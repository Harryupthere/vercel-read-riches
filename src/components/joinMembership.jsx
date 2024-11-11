import React, { useEffect, useState, useRef } from 'react'
import '../components/css/StockView.css';
import Header from './header';
import { Container, Row, Col } from 'react-bootstrap';
import Read from "../components/img/readCompany.svg"
import Line from "../components/img/line.svg"
import Memb1 from "../components/img/memb1.png"
import Memb2 from "../components/img/memb2.png"
import Memb3 from "../components/img/memb3.png"
import Memb4 from "../components/img/memb4.png"
import GraphIcon from "../components/img/icon/graphIcon.svg"
import PiIcon from "../components/img/icon/piIcon.svg"
import Event from "../components/img/icon/event.svg"
import Heart from "../components/img/icon/heart.svg"
import Check from "../components/img/icon/check.svg"
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import config from "../../src/config"
import toast, { Toaster } from "react-hot-toast";
import Form from 'react-bootstrap/Form';
import Clip from "../components/img/icon/clip.svg"

import { useLocation } from 'react-router-dom';


export default function JoinMemberShip() {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let token = ''
    useEffect(() => {
        const checkToken = localStorage.getItem("token");
        if (checkToken) {
            setIsLoggedIn(true);
            token = checkToken
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const purchasePlan = async (e, planId) => {
        e.preventDefault();
        try {
            alert("Plan purchased")
            return
            console.log(isLoggedIn && token != '')

            if (isLoggedIn && token != '') {

                const response = await fetch(`${config.apiUrl}getProfile`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`, // Replace with actual token

                    }
                });

                const result = await response.json();

                if (!result.status) {

                    toast.error("Something went wrong.")
                    return
                }

                if (result.user.userType == 1) {
                    toast.error("Your plan is already activated.")
                    return
                }

                let payload = {
                    orderTrxId: "Exapmle transation",
                    orderTypeId: planId,
                }
                const response2 = await fetch(`${config.apiUrl}createOrder`, {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Authorization': `Bearer ${token}`, // Replace with actual token
                        'Content-Type': 'application/json'
                    }
                });

                const result2 = await response2.json();

                if (result2.success) {
                    toast.success(result2.message)
                } else {
                    toast.error(result2.message)
                    return
                }

            } else {
                navigate('/login');

            }

        } catch (error) {

            console.log(error)
        }
    }

    const handleScrollToSection = () => {
        const scrollPercentage = 1.9; // Adjust the scroll percentage here
        const scrollY = window.innerHeight * scrollPercentage; // Calculate the Y position to scroll to
        window.scrollTo({
          top: scrollY,
          behavior: 'smooth' // Smooth scrolling
        });
      };
      

      const location = useLocation();

      useEffect(() => {
        // Check if scrollTo is passed in the location state
        if (location.state?.scrollTo) {
          const scrollPercentage = 1.9; // Adjust the scroll percentage here
          const scrollY = window.innerHeight * scrollPercentage;
          window.scrollTo({
            top: scrollY,
            behavior: 'smooth',
          });
        }
      }, [location]);
    return (
        <>
            <div className='line-bg'>
                <Header />
                <Toaster />
                <section>
                    <Container>
                        <Row>
                            <Col md={6} className='order1 order-2'>
                                <div className='join d-flex'>
                                    <img src={Line} className='hide-mobile' />
                                    <div className='px-md-5'>
                                        <h1>Make our<br /> Community Better
                                            <br /> <b> Join Us!</b>
                                        </h1>
                                        <p >Unlock exclusive access to comprehensive company analysis, stay updated with the latest insights, and enjoy a seamless experience with our premium features. Join us today and take your research to the next level.</p>
                                        <button type='button' className='logoutbtn mt-md-4'  onClick={handleScrollToSection}>Join now</button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className='order-md-last order-1'>
                                <div className='d-flex member-img'>
                                    <div>
                                        <img src={Memb1} />
                                        <img src={Memb2} />
                                    </div>
                                    <div className='mt-4'>
                                        <img src={Memb3} />
                                        <img src={Memb4} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <div>
                        <h2 className='home-heading text-center'>Benefits of <b>joining us</b></h2>
                        <p className='text-center h-para'>"Unlock a world of benefits by joining us today!"</p>
                        <div style={{ backgroundColor: "#F5F5F5" }} className='p-2 mt-5'>
                            <Container>
                                <div className='px-md-5 ps-4'>
                                    <Row className='mb-md-4'>
                                        <Col md={6}>
                                            <div className='benifit-box mb-2'>
                                                <div className='icons'>
                                                    <img src={GraphIcon} />
                                                </div>
                                                <div className='white-box'>
                                                    <h3>Access to Company Research</h3>
                                                    <p>Navigate through the detailed company analysis that makes research a piece of cake. Make your research game stronger and less time-consuming by doing it on your own. Be your own finance expert, and understand what works best for you!</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='benifit-box mb-2'>
                                                <div className='icons'>
                                                    <img src={Event} />
                                                </div>
                                                <div className='white-box'>
                                                    <h3>Events and workshops </h3>
                                                    <p>Always be a step ahead by attending exclusive workshops with top finance experts and staying up-to-date with the latest information, trends and strategies in the market. Engage, Participate, Empower!</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <div className='benifit-box mb-2'>
                                                <div className='icons'>
                                                    <img src={PiIcon} />
                                                </div>
                                                <div className='white-box'>
                                                    <h3>Financial Resources</h3>
                                                    <p>Explore a variety of financial tools, with detailed explanations provided in reports to help understand market movements, a key strength of Read Riches. These tools offer a comprehensive view of the market landscape</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='benifit-box mb-2'>
                                                <div className='icons'>
                                                    <img src={Heart} />
                                                </div>
                                                <div className='white-box'>
                                                    <h3>Exclusive community</h3>
                                                    <p>Join an exclusive community for access to unique solutions tailored to your needs, fostering collaboration and achieving great results together. Network with like-minded investors, share insights, and benefit from collective knowledge and experience.</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h2 className='home-heading text-center'><b>Membership</b> Details</h2>
                        <p className='text-center center-para-heading'>
                            Discover the benefits of joining our community and gain access to exclusive resources. With our trust in the power of our community, we're here to support you in getting the most out of your membership.</p>
                        <div className='p-2 mt-5'>
                            <Container>
                                <div className='check-member'>
                                    <h3>Membership</h3>
                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"
                                        className="custom-switch"
                                    />
                                    <h3 style={{color:"#000"}}>Per report</h3>
                                    <img src={Clip}/>
                                </div>
                                <Row className='d-flex align-items-center'>
                                    <Col md={4}>
                                        <div className='plan-card light-bg'>
                                            <h3>Value report</h3>
                                            {/* <p>Unlock exclusive insights, community access, and financial tools with one report.</p> */}
                                            <div className='d-flex align-items-center'>
                                                <h2 className='price'>₹199</h2>
                                                <span>per report</span>
                                            </div>
                                            <hr className='w-100' />
                                            {/* <p>The membership unlocks full access to all research, exclusive insights, and community. Don’t miss out—upgrade today to get the most out of your membership!</p> */}
                                            <ul>
                                                <li><img src={Check} />Access to Detailed Research: Get an in-depth analysis of a specific company of interest.</li>
                                                <li><img src={Check} />Comprehensive Insights: Dive into key metrics, industry positioning, and financial health.</li>
                                                <li><img src={Check} />No Long-Term Commitment: Purchase only the reports you need, as you need them.</li>
                                                {/* <li><img src={Check} />Access to financial tools</li> */}
                                            </ul>
                                            <button type="button" className="view w-100" onClick={e => { purchasePlan(e, 1) }}>Get started</button>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='plan-card light-bg'>
                                            <h3>Quarter Plan</h3>
                                            {/* <p>Unlock exclusive insights, community access, and financial tools with one report.</p> */}
                                            {/* <img src={Plan} className='plan' /> */}
                                            <div className='d-flex align-items-center'>
                                                <h2 className='price'>₹999</h2>
                                                <span>per quarter</span>
                                            </div>
                                            <hr className='w-100' />
                                            {/* <p>The membership unlocks full access to all research, exclusive insights, and community. Don’t miss out—upgrade today to get the most out of your membership!</p> */}
                                            <ul>
                                                <li><img src={Check} />Access to all Companies Synopsis</li>
                                                <li><img src={Check} />Exclusive community</li>
                                                <li><img src={Check} />Events and Workshops</li>
                                                <li><img src={Check} />Access to financial tools</li>
                                            </ul>
                                            <button type="button" className="view w-100" onClick={e => { purchasePlan(e, 1) }}>Get started</button>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        {/* <div className='plan-card light-bg theme-bg'>
                                            <div className='pop-plan'>
                                                Most Popular
                                            </div>
                                            <h3>Value report</h3>
                                            <p>Unlock exclusive insights, community access, and financial tools with one report.</p>
                                            <div className='d-flex align-items-center'>
                                                <h2 className='price'>₹1500</h2>
                                                <span>per year</span>
                                            </div>
                                            <hr className='w-100' />
                                            <p>The free plan gives you a taste, but the membership unlocks full access to all research, exclusive insights, and community. Don’t miss out—upgrade today to get the most out of your membership!</p>
                                            <ul>
                                                <li><img src={Check} />Access to all Companies Synopsis</li>
                                                <li><img src={Check} />Exclusive community</li>
                                                <li><img src={Check} />Events and Workshops</li>
                                                <li><img src={Check} />Access to financial tools</li>
                                            </ul>
                                            <button type="button" className="view w-100" onClick={e => { purchasePlan(e, 1) }}>Get started</button>
                                        </div> */}
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
