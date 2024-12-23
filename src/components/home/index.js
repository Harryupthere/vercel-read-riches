import React, { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Header from "../header";
import HeroImg from "../../components/img/heroImg.png"
import Finance from "../../components/img/finance.svg"
import Company from "../../components/img/company.svg"
import Valuation from "../../components/img/valuation.svg"
import Competitor from "../../components/img/competitor.svg"
import ManagementRing from "../../components/img/icon/managmentRing.svg"
import InsightRing from "../../components/img/icon/insightRing.svg"
import TailwindRIng from "../../components/img/icon/tailwindRing.svg"
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Car from "../../components/img/icon/car.svg"
import Avi from "../../components/img/icon/aviation.svg"
import Capital from "../../components/img/icon/capital.svg"
import Chemical from "../../components/img/icon/chemical.svg"
import UserLove from "../../components/img/icon/userlove.svg"
import It from "../../components/img/icon/it.svg"
import Metals from "../../components/img/icon/metal.svg"
import Search from "../../components/img/icon/search.svg"
import GrapgIcon from "../../components/img/icon/graph.svg"
import CircleText from "../../components/img/curve-text.svg"
import Down from "../../components/img/downArrow.svg"
import config from "../../config";
import Footer from "../Footer";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing icons for custom arrows
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import "../../components/css/home.css"



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const list = [
    {
        name: "automobiles",
        img: Car
    },
    {
        name: "aviation",
        img: Avi
    },
    {
        name: "capital goods",
        img: Capital
    },
    {
        name: "chemicals",
        img: Chemical
    }, {
        name: "FMCG",
        img: Car
    },
    {
        name: "hospitality",
        img: UserLove
    }, {
        name: "IT & software",
        img: It
    }, {
        name: "metals",
        img: Metals
    }
]
const Home = () => {

    const checkToken = localStorage.getItem("token");

    if (!checkToken) {
        const checkRole = localStorage.getItem("role");
    }
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Clear the session storage key on homepage load
        sessionStorage.removeItem("hasRefreshed");
    }, []);

    useEffect(() => {
        const checkToken = localStorage.getItem("token");
        if (checkToken) {
            setIsLoggedIn(true);
            setToken(checkToken);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const [companies, setCompanies] = useState([])
    const [categories, setCategories] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        if (searchInput) {
            // Filter companies based on the search input
            const filtered = companies.filter(company => company.company_name.toLowerCase().includes(searchInput.toLowerCase()));
            setFilteredCompanies(filtered);
        } else {
            // If input is empty, reset filtered companies
            setFilteredCompanies([]);
        }
    }, [searchInput]);


    useEffect(() => {
        // Fetch data from the API
        fetchCompanies();
        fetchCategories();
    }, [searchInput]);
    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button onClick={onClick} className="custom-left-arrow">
                <FiChevronLeft size={30} />
            </button>
        );
    };

    // Custom Next Button
    const CustomRightArrow = ({ onClick }) => {
        return (
            <button onClick={onClick} className="custom-right-arrow">
                <FiChevronRight size={30} />
            </button>
        );
    };
    const fetchCompanies = async () => {
        try {
            await fetch(`${config.apiUrl}company?company_name=${searchInput}`, {
                method: 'GET'
            }).then(response => response.json())
                .then(data => {
                    if (data.status) {
                        setCompanies(data.data)
                    }
                }).catch((error) => {
                    console.log(error)
                });


        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            await fetch(`${config.apiUrl}category`, {
                method: 'GET'
            }).then(response => response.json())
                .then(data => {
                    if (data.status) {

                        setCategories(data.data)
                    }
                }).catch((error) => {
                    console.log(error)

                });


        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const [activeCategory, setActiveCategory] = useState('');
    const handleCategory = async (categoryName) => {
        try {
            setActiveCategory(categoryName)
            await fetch(`${config.apiUrl}categories-companies?letter=${categoryName}`, {
                method: 'GET'
            }).then(response => response.json())
                .then(data => {
                    if (data.status) {
                        setCompanies(data.companies)
                    }
                }).catch((error) => {
                    console.log(error)

                });
        } catch (error) {
            console.log(error)
        }
    }


    const openPdf = async (e, itemId) => {
        e.preventDefault()
        try {
            setLoading(true)
            if (isLoggedIn && token != '') {

                const response = await fetch(`${config.apiUrl}getProfile`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}` // Replace with actual token
                    }
                });

                const result = await response.json();

                if (!result.status) {
                    setLoading(false)

                    toast.error("Something went wrong.")
                    return
                }

                if (result.user.userType == 0 && result.user.creditscore == 0 && result.user?.orderId) {
                    setLoading(false)

                    toast.error("Your plan is expired. Please purchase another plan.")
                    return
                } else if (result.user.userType == 0 && result.user.creditscore == 0) {
                    setLoading(false)

                    toast.error("You used all your free trials. Please purchase plan.")
                    return
                }



                navigate(`${config.baseUrl}overview/${itemId}`);


            } else {
                setLoading(false)

                navigate(`${config.baseUrl}login`);

            }
        } catch (error) {
            setLoading(false)

            console.log(error)
        }
    }


    const customNextArrow = (onClickHandler, hasNext) => {
        return (
            <button
                type="button"
                className="custom-next-arrow"
                onClick={onClickHandler}
                disabled={!hasNext}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-40px', // Adjust for better visibility
                    transform: 'translateY(-50%)',
                    zIndex: 1000,
                    backgroundColor: '#fff', // Ensure visibility
                    border: 'none',
                    padding: '10px',
                    fontSize: '24px',
                    cursor: 'pointer'
                }}
            >
                &#8250;
            </button>
        );
    };

    // Custom Prev Arrow Button (same position, just to the left of the next arrow)
    const customPrevArrow = (onClickHandler, hasPrev) => {
        return (
            <button
                type="button"
                className="custom-prev-arrow"
                onClick={onClickHandler}
                disabled={!hasPrev}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-80px', // Adjust for better visibility
                    transform: 'translateY(-50%)',
                    zIndex: 1000,
                    backgroundColor: '#fff', // Ensure visibility
                    border: 'none',
                    padding: '10px',
                    fontSize: '24px',
                    cursor: 'pointer'
                }}
            >
                &#8249;
            </button>
        );
    };


    return (
        <>
            <div className="mobile-view-show">
                <Header />
            </div>
           
            <section className="home-color white-header hero-section">
            <div className="lining-bg mt-0">
                {loading && <div className="spinner-container">
                    <Spinner animation="border" variant="primary" className="spinner" />
                </div>
                }
                <Container>
                    <Header />
                    <Toaster />
                    <div className="">
                        <Row className="">
                            <Col lg={5} md={12} sm={12} className="mt-md-5">
                                <img src={HeroImg} alt="hero-img" style={{ width: "100%" ,marginLeft:"24px"}} className="hero-img-mobile" />
                                <div className="landing-content">
                                    <h1>From< b> Pages </b>To <b>Profits</b></h1>
                                    <p>Explore simplified, in-depth analysis blending quantitative data with qualitative insights uncovering undervalued gems—all in one platform</p>
                                </div>
                                <button type="button" className="view">View now</button>

                            </Col>
                            <Col lg={7} md={12} sm={12}>
                                <img src={HeroImg} alt="hero-img" style={{ width: "100%" }} className="hero-img" />
                            </Col>
                        </Row>
                    </div>
                </Container>
                </div>
            </section>
         
            <div className="round-bg">
                <img src={CircleText} className="text rotate" />
                <img src={Down} className="arrowText" />
            </div>

            {/* /////////////////////// */}
            <div className="mb-md-3">
                <h2 className="main-heading text-center mb-md-3">
                    <b>Analysis Scope</b>
                </h2>
                <div className="analys-section">
                    <Container >
                        <Row>
                            <Col md={11}>
                                <div className="slider-container home-slider">
                                    <div>
                                    <Slider
                                        ref={slider => {
                                            sliderRef = slider;
                                        }}
                                        {...settings}
                                    >
                                         
                                        <div className="me-1">
                                            <div className="ana-card">
                                                <div className="card-img">
                                                    <img src={Valuation} alt="Valuation" />
                                                </div>
                                                <h3>Valuation</h3>
                                                <p>DCF and Relative valuation models with all inputs included</p>
                                            </div>
                                        </div>
                                        <div className="me-1">
                                            <div className="ana-card">
                                                <div className="card-img">
                                                    <img src={Competitor} alt="Competitor" />
                                                </div>
                                                <h3>Competitor check</h3>
                                                <p>Scatter plot analysis and positioning the company against its peers</p>
                                            </div>
                                        </div>
                                        <div className="me-1">
                                            <div className="ana-card">
                                                <div className="card-img">
                                                    <img src={ManagementRing} alt="Management" />
                                                </div>
                                                <h3>Management Matters</h3>
                                                <p>Market and Management sentiment gauged through word clouds from con-calls and discussions</p>
                                            </div>
                                        </div>
                                        <div className="me-1">
                                            <div className="ana-card">
                                                <div className="card-img">
                                                    <img src={Company} alt="Company Profile" />
                                                </div>
                                                <h3>Company Profile</h3>
                                                <p>Overview of the business model, revenue mix, and a 3P analysis of revenue quality</p>
                                            </div>
                                        </div>
                                        <div className="me-1">
                                            <div className="ana-card">
                                                <div className="card-img">
                                                    <img src={TailwindRIng} alt="Headwinds & Tailwinds" />
                                                </div>
                                                <h3>Headwinds & Tailwinds</h3>
                                                <p>Integration of Porter's 5 Forces, PESTEL, and MOAT analyses to explore strategic risks and benefits</p>
                                            </div>
                                        </div>
                                        <div className="me-1">
                                            <div className="ana-card">
                                                <div className="card-img">
                                                    <img src={InsightRing} alt="Industry Insights" />
                                                </div>
                                                <h3>Industry Insights</h3>
                                                <p>Overall industry analysis, market outlook, and their impact on the business</p>
                                            </div>
                                        </div>
                                        {/* <div className="me-1">
                                            <div className="ana-card">
                                                <div className="card-img">
                                                    <img src={Finance} alt="Finance" />
                                                </div>
                                                <h3>Financial xray</h3>
                                                <p>A concise analysis of the three financial statements, qualitative insights, and DuPont breakdown</p>
                                            </div>
                                        </div> */}
                                    </Slider>
                                    </div>
                                </div>
                            </Col>
                            <Col md={1} className="p-0">
                                <div className="home-slider">
                                    <div className="d-flex align-items-center justify-content-center slider-arrows">
                                        <CustomLeftArrow onClick={previous} />
                                        <CustomRightArrow onClick={next} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* <div className="slider-bg"></div> */}
                </div>
                <div className="buttons"></div>
            </div>
            <Container className="mb-md-5">
                <Row>
                    <Col md={12}>
                        <div className="d-flex align-items-center mb-md-5 mb-3">
                            <img src={GrapgIcon} className="companyGrph" />
                            <h2 className="main-heading ms-md-3  mb-0">
                                <b>Company Synopsis</b>
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* <Col md={3}>
                        <div className="finance-sidebar">
                            <ul>
                                <li className="active">
                                    <Link onClick={() => handleCategory('')}>All companies</Link>
                                </li>
                                {categories.map((item => (
                                    <li key={item._id} onClick={() => handleCategory(item.categoryName)}>
                                        <img src={`${config.apiUrl}categoryImage/${item._id}`} />
                                        <Link>{item.categoryName}</Link>
                                    </li>
                                )))}
                            </ul>
                        </div>
                    </Col> */}
                    <Col lg={3} sm={12}>

                        <div className="finance-sidebar">
                            <div className="search-box">
                                <img src={Search} className="home-search-img"/>
                                <input
                                    type="input"
                                    placeholder="Search by the company "
                                    value={searchInput}
                                    className="home-search"
                                    onChange={(e) => setSearchInput(e.target.value)} // Update searchInput as user types
                                // onChange={(e) => setSearchInput(e.target.value)} // Update searchInput as user types
                                // onFocus={() => setFilteredCompanies(companies)}  // Show suggestions on focus
                                />
                                {filteredCompanies.length > 0 && (
                                    <ul className="suggestion-dropdown">
                                        {filteredCompanies.map((company, index) => (
                                            <li key={index} onClick={() => setSearchInput(company.company_name)}>
                                                {company.company_name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {/* <ul>
                                <li className="active"><Link>All companies</Link></li>
                                {list.map((item => (
                                    <li><img src={item.img} /><Link>{item.name}</Link></li>
                                )))}
                            </ul> */}



                            <ul>
                                <li className={activeCategory === '' ? 'active' : ''}>
                                    <Link onClick={() => handleCategory('')}>All companies</Link>
                                </li>
                                {categories.map((item => (
                                    <li className={activeCategory === item.categoryName ? 'active' : ''} key={item._id} onClick={() => handleCategory(item.categoryName)}>
                                        <img src={`${config.apiUrl}categoryImage/${item._id}`} />
                                        <Link>{item.categoryName}</Link>
                                    </li>
                                )))}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={9} sm={12}>
                        <Row>

                            {companies.length > 0 ?
                                companies.map((item) => (

                                    <Col md={4} className="max-height-box" onClick={e => { openPdf(e, item.company_unique_id) }}>
                                        <div className="company-box" style={{ background: `radial-gradient(54.02% 54.02% at 50% 50%, ${item.first_color} 33.1%, ${item.second_color} 100%)` }}>
                                            <div className="date">
                                                <span>23 July 24</span>
                                            </div>
                                            <div className="company-img">
                                                <img src={`${config.apiUrl}companyLogoImage/${item.company_unique_id}`} />
                                                <div className="blur-box"></div>
                                            </div>
                                            <button className="hover-btn">{item.category.categoryName}</button>
                                            <h3>{item.company_name}</h3>
                                        </div>
                                    </Col>
                                )) :
                                <p> No data found</p>}

                            {/* <Col md={4} className="max-height-box">
                                <div className="company-box" style={{ background: "radial-gradient(54.02% 54.02% at 50% 50%, #FFFFFF 0%, #AFBBE7 33.1%, #7E92D9 100%)" }}>
                                    <div className="date">
                                        <span>23 July 24</span>
                                    </div>
                                    <img src={Tata} />
                                    <button className="hover-btn">Automobiles</button>
                                    <h3>Motors</h3>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="max-height-box">
                                <div className="company-box" style={{ background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #BCE4EB 40.1%, #7DCAD8 100%)" }}>
                                    <div className="date">
                                        <span>23 July 24</span>
                                    </div>
                                    <img src={Wipro} />
                                    <button className="hover-btn">Automobiles</button>
                                    <h3>Wipro</h3>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="max-height-box">
                                <div className="company-box" style={{ background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #E8BDEB 0.01%, #E7BCEB 51.6%, #D17DD8 100%)" }}>
                                    <div className="date">
                                        <span>23 July 24</span>
                                    </div>
                                    <img src={Hindu} />
                                    <button className="hover-btn">Automobiles</button>
                                    <h3>Hindustan uniliver</h3>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="max-height-box">
                                <div className="company-box" style={{ background: "radial-gradient(54.02% 54.02% at 50% 50%, #FFFFFF 0%, #ECEDC1 40.1%, #D7D97E 100%)" }}>
                                    <div className="date">
                                        <span>23 July 24</span>
                                    </div>
                                    <img src={Tata} />
                                    <button className="hover-btn">Automobiles</button>
                                    <h3>Hindustan uniliver</h3>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="max-height-box">
                                <div className="company-box" style={{ background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #F4D5B9 29.6%, #F4D5B9 48.1%, #E8A96E 100%)" }}>
                                    <div className="date">
                                        <span>23 July 24</span>
                                    </div>
                                    <img src={Wipro} />
                                    <button className="hover-btn">Automobiles</button>
                                    <h3>Hindustan uniliver</h3>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="max-height-box">
                                <div className="company-box" style={{ background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #ECC0C0 42.1%, #D87D7D 100%)" }}>
                                    <div className="date">
                                        <span>23 July 24</span>
                                    </div>
                                    <img src={Hindu} />
                                    <button className="hover-btn">Automobiles</button>
                                    <h3>Hindustan uniliver</h3>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="max-height-box">
                                <div className="company-box" style={{ background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #BCE4EB 40.1%, #7DCAD8 100%)" }}>
                                    <div className="date">
                                        <span>23 July 24</span>
                                    </div>
                                    <img src={Wipro} />
                                    <button className="hover-btn">Automobiles</button>
                                    <h3>Wipro</h3>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="max-height-box">
                                <div className="company-box" style={{ background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #BCE4EB 40.1%, #7DCAD8 100%)" }}>
                                    <div className="date">
                                        <span>23 July 24</span>
                                    </div>
                                    <img src={Wipro} />
                                    <button className="hover-btn">Automobiles</button>
                                    <h3>Wipro</h3>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="max-height-box">
                                <div className="company-box" style={{ background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #BCE4EB 40.1%, #7DCAD8 100%)" }}>
                                    <div className="date">
                                        <span>23 July 24</span>
                                    </div>
                                    <img src={Hindu} />
                                    <button className="hover-btn">Automobiles</button>
                                    <h3>Wipro</h3>
                                </div>
                            </Col> */}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Home;