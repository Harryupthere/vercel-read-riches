import React, { useState, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutImg from '../../components/img/aboutImg.png'
import VisionIMg from '../../components/img/vision.png'
import VisionMob from '../../components/img/visionMob.png'
import Man3 from '../../components/img/man3.png'
import Man2 from '../../components/img/man2.png'
import Man1 from '../../components/img/man1.png'
import { Link } from 'react-router-dom'
import Header from '../header';
import Footer from '../Footer'
import Slider from "react-slick";
import Cube from "../../components/img/icon/cube.svg"
import Users from "../../components/img/users.png"
import Stars from "../../components/img/fiveStar.svg"

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing icons for custom arrows


function AboutUs() {
    const [read, setRead] = useState();
    const handleRead = () => {
        setRead(!read)
    }
    const sliderRef = useRef(null);
    const sliderRef2 = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };
    const next2 = () => {
        sliderRef2.current.slickNext();
    };
    const previous2 = () => {
        sliderRef2.current.slickPrev();
    };
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1, // Scroll 1 slide at a time
        speed: 500,
        dots: false,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
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
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
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
    return (
        <>
            <div className='light-footer about-page'>
                <Header />
                <section>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className='position-relative'>
                                    <div className=' about-read'>
                                        <Row className='d-flex align-items-start'>
                                            <Col md={2} className='pe-0'><h3 className='ms-5'>Read</h3></Col>
                                            <Col md={8} className='position-relative p-md-0 p-3'> <img src={AboutImg} alt='about' />
                                            </Col>
                                            <Col md={2} className='ps-0'><h3 className='me-5'>Riches</h3></Col>
                                        </Row>
                                    </div>
                                    <div className='why-us'>
                                        <h2>What is <b>Read Riches? </b></h2>
                                        {!read ?
                                            <p>
                                                Read Riches is a curated investment research platform for investors, who want to do their own research without searching for half-and-half information all
                                                over the internet. It is founded with a vision to minimize the time and effort financial
                                                research takes by providing a one-stop solution for all your research needs...
                                            </p>
                                            :
                                            <p>
                                                Read Riches is a curated investment research platform for investors, who want to do their own research without searching for half-and-half information all over the internet. It is founded with a vision to minimise the time and effort financial research takes by providing a one-stop solution for all your research needs.
                                                What sets us apart is the depth and quality of the research provided to you.
                                                The platform gives a bird’s-eye view of the company’s overall performance with all the smaller details
                                                that make a difference in the market.
                                                The neatly categorized bulk information under various sections makes it simple to locate and follow while providing substantive explanations wherever necessary.
                                            </p>
                                        }
                                        <Link to="" onClick={handleRead}>Read More</Link>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='section-vision  '>
                    <div className='py-md-4 mobile-view-show'>
                        <img src={VisionMob} className='man-img' />
                    </div>
                    <div className='vision-box py-5' style={{ backgroundColor: "#1d666d" }}>
                        <Container>
                            <Row>
                                <Col md={5}>
                                    <div className='py-md-4 hide-mobile'>
                                        <img src={VisionIMg} style={{ withd: "100%", height: "100%" }} />
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <div className='py-md-5 vision'>
                                        <h2 className='home-heading text-white'>Our Vision</h2>
                                        <p>Read Riches envisions speeding up the process of financial research to simply the mountainous task of financial research by integrating all the important research parameters into a single platform offering a quick one-stop solution for whatever data you’re looking for.</p>
                                        <p>Read Riches is backed by the narrative behind the numbers taking into account the qualitative aspects that further ease up the process and an exclusive community of finance enthusiasts who collaborate to learn from the experiences of our members, creating a space for dialogue about finance-related topics.</p>
                                        <h3>Come, Be a Part of our Vision!</h3>
                                        <button type='button' className='view'>Join us </button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </section>
                <section className='pt-md-5'>
                    <Container>
                        <Row>
                            <div className='text-center'>
                                <h2 className='home-heading'>Why Choose Read Riches</h2>
                                <p  className='center-para-heading'>In the fast-paced world of business and investment, where information is scattered and shallow. Read Riches stands out as a source of clear and thorough insights. Here's why Read Riches is your ultimate companion for navigating the intricacies of the market:</p>
                            </div>
                        </Row>
                    </Container>
                    <div className="slider-container about-slider1">
                        <Slider ref={sliderRef} {...settings}>
                            <div className='about-slider-item'>
                                <div className='slide-item'>
                                    <div className='icon'>
                                        <img src={Cube} />
                                    </div>
                                    <h3>1. 360° Analysis</h3>
                                    <p>We thoroughly evaluate companies from every conceivable angle, ensuring no stone is left unturned, from introducing word cloud analysis to cover concalls and Management discussions to ROE breakdown through Dupont Analysis offering insights into market trends and company fundamentals</p>
                                </div>
                            </div>
                            <div className='about-slider-item'>
                                <div className='slide-item'>
                                    <div className='icon'>
                                        <img src={Cube} />
                                    </div>
                                    <h3>2. 360° Analysis</h3>
                                    <p>We thoroughly evaluate companies from every conceivable angle, ensuring no stone is left unturned, from introducing word cloud analysis to cover concalls and Management discussions to ROE breakdown through Dupont Analysis offering insights into market trends and company fundamentals</p>
                                </div>
                            </div>
                            <div className='about-slider-item'>
                                <div className='slide-item'>
                                    <div className='icon'>
                                        <img src={Cube} />
                                    </div>
                                    <h3>3. 360° Analysis</h3>
                                    <p>We thoroughly evaluate companies from every conceivable angle, ensuring no stone is left unturned, from introducing word cloud analysis to cover concalls and Management discussions to ROE breakdown through Dupont Analysis offering insights into market trends and company fundamentals</p>
                                </div>
                            </div>
                            <div className='about-slider-item'>
                                <div className='slide-item'>
                                    <div className='icon'>
                                        <img src={Cube} />
                                    </div>
                                    <h3>4. 360° Analysis</h3>
                                    <p>We thoroughly evaluate companies from every conceivable angle, ensuring no stone is left unturned, from introducing word cloud analysis to cover concalls and Management discussions to ROE breakdown through Dupont Analysis offering insights into market trends and company fundamentals</p>
                                </div>
                            </div>
                            <div className='about-slider-item'>
                                <div className='slide-item'>
                                    <div className='icon'>
                                        <img src={Cube} />
                                    </div>
                                    <h3>5. 360° Analysis</h3>
                                    <p>We thoroughly evaluate companies from every conceivable angle, ensuring no stone is left unturned, from introducing word cloud analysis to cover concalls and Management discussions to ROE breakdown through Dupont Analysis offering insights into market trends and company fundamentals</p>
                                </div>
                            </div>
                            <div className='about-slider-item'>
                                <div className='slide-item'>
                                    <div className='icon'>
                                        <img src={Cube} />
                                    </div>
                                    <h3>6. 360° Analysis</h3>
                                    <p>We thoroughly evaluate companies from every conceivable angle, ensuring no stone is left unturned, from introducing word cloud analysis to cover concalls and Management discussions to ROE breakdown through Dupont Analysis offering insights into market trends and company fundamentals</p>
                                </div>
                            </div>
                        </Slider>
                        <div className="d-flex align-items-center justify-content-center slider-arrows">
                            <CustomLeftArrow onClick={previous} />
                            <CustomRightArrow onClick={next} />
                        </div>
                    </div>
                </section>
                <section>
                <Container>
                        <div className='user-sec px-3'>
                            <div className='user-icon'>
                                <img src={Users} alt='users' />
                                <span>Our community</span>
                            </div>
                            <h3 style={{ color: "#1D666D", textAlign: "center" }}>
                                Dive into Read Riches’ vibrant <b>WhatsApp community</b>, where financial enthusiasts and investors come alive, exchanging cutting-edge insights and dissecting market trends in real-time—a hub of collaboration and excitement !
                            </h3>
                        </div>

                    </Container>
                    <Row className='slider2 '>
                        <Col lg={1} md={0}></Col>
                        <Col lg={3} md={4} className="what-p px-md-4 py-md-2">
                            <div className='py-md-3'>
                                <h2 className='home-heading pt-md-4'>What people say <b>About us</b></h2>
                                <p style={{ fontSize: "16px", color: "#3A3A3C" }}>Discover the impact we've made through the voices of our Memeber</p>
                            </div>
                            <div className=' hide-mobile'>
                                <div className='d-flex justify-content-start m-0 slider-arrows'>
                                    <CustomLeftArrow onClick={previous2} />
                                    <CustomRightArrow onClick={next2} />
                                </div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="slider-container me-4">
                                <Slider ref={sliderRef2} {...settings2}>
                                    <div className='rate-box'>
                                        <img src={Stars} />
                                        <p>“Nay wears a double hat at Read Riches! He's not just an explorer in finance but also our maestro in marketing and sales. Picture him as the guy who not only dives deep in’’ </p>
                                        <h3 className='heading4 mb-0' style={{ fontSize: "20px" }}>Karan</h3>
                                        <span style={{ fontSize: "13px", color: "#1E6E76" }}>Auditor at delloit</span>
                                    </div>
                                    <div className='rate-box'>
                                        <img src={Stars} />
                                        <p>“Nay wears a double hat at Read Riches! He's not just an explorer in finance but also our maestro in marketing and sales. Picture him as the guy who not only dives deep in’’ </p>
                                        <h3 className='heading4 mb-0' style={{ fontSize: "20px" }}>Prnay aggarwal </h3>
                                        <span style={{ fontSize: "13px", color: "#1E6E76" }}>Auditor at delloit</span>
                                    </div>
                                    <div className='rate-box'>
                                        <img src={Stars} />
                                        <p>“Nay wears a double hat at Read Riches! He's not just an explorer in finance but also our maestro in marketing and sales. Picture him as the guy who not only dives deep in’’ </p>
                                        <h3 className='heading4 mb-0' style={{ fontSize: "20px" }}>Prnay aggarwal </h3>
                                        <span style={{ fontSize: "13px", color: "#1E6E76" }}>Auditor at delloit</span>
                                    </div>
                                    <div className='rate-box'>
                                        <img src={Stars} />
                                        <p>“Nay wears a double hat at Read Riches! He's not just an explorer in finance but also our maestro in marketing and sales. Picture him as the guy who not only dives deep in’’ </p>
                                        <h3 className='heading4 mb-0' style={{ fontSize: "20px" }}>Karan</h3>
                                        <span style={{ fontSize: "13px", color: "#1E6E76" }}>Auditor at delloit</span>
                                    </div>
                                </Slider>
                            </div>
                        </Col>

                    </Row>
                </section>
                <section className='py-5' style={{ backgroundColor: "#1d666d" }}>
                    <Container>
                        <Row>
                            <Col md={3} className="order-md-1 order-2"> {/* Change order for smaller screens */}
                                <div className='people-card'>
                                    <div className='card-img'>
                                        <img src={Man3} />
                                    </div>
                                    <div className='p-3'>
                                        <h3>Rudransh Singhal</h3>
                                        <h4>Co-founder</h4>
                                        <p>May wears a double hat at Read Riches! He's not just an explorer in finance but </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} className="order-md-2 order-3"> {/* Change order for smaller screens */}
                                <div className='people-card'>
                                    <div className='card-img'>
                                        <img src={Man2} />
                                    </div>
                                    <div className='p-3'>
                                        <h3>Pranay Agarwal</h3>
                                        <h4>Co-founder</h4>
                                        <p>May wears a double hat at Read Riches! He's not just an explorer in finance but </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} className="order-md-3 order-4"> {/* Change order for smaller screens */}
                                <div className='people-card'>
                                    <div className='card-img'>
                                        <img src={Man1} />
                                    </div>
                                    <div className='p-3'>
                                        <h3>Sanchi Sikka</h3>
                                        <h4>Co-founder</h4>
                                        <p>May wears a double hat at Read Riches! He's not just an explorer in finance but </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} className="order-md-last order-1"> {/* Change order to first on small screens */}
                                <div className='p-3'>
                                    <h2 className='home-heading' style={{ color: "#E8F0F0" }}>Meet the Architects of Read Riches</h2>
                                    <p style={{ color: "#E8F0F0" }}>
                                        Behind Read Riches lies a team of visionaries dedicated to transforming how financial wisdom is perceived and pursued.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Footer />
            </div>
        </>
    )
}

export default AboutUs