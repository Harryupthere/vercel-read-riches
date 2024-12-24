import React, { useState } from "react";
import Header from "../header";
import Search from "../../components/img/icon/search.svg"
import { Col, Container, Row } from "react-bootstrap";
import Thumb from '../../components/img/icon/thumb.svg'
import User from '../../components/img/icon/user.svg'
import Doller from '../../components/img/icon/doller.svg'
import Footer from "../Footer";
import Accordion from 'react-bootstrap/Accordion';
import Arrow from '../../components/img/icon/arrowRight.svg';
import ArrowDown from '../../components/img/icon/downArrow.svg';
import './help.css'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';
import config from "../../config";
const Help = () => {
    const navigate = useNavigate();

    const [activeKey, setActiveKey] = useState();
    const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    const faqs = [
        {
            question: "How can I become a member of Read Riches?",
            answer: "To become a member, simply sign up on our website, start your free trial by accessing three company analysis, and then choose a membership plan that suits your needs to continue enjoying unlimited access.",
        },
        {
            question: "How does the free trial work?",
            answer: "New users can access three company analysis for free to evaluate the quality and depth of our insights. After these initial reports, you will need to subscribe to our exclusive membership to continue accessing detailed analysis.",
        },
        {
            question: "Who should use Read Riches?",
            answer: "Read Riches is ideal for value investors, financial enthusiasts, and anyone looking for in-depth and easy-to-understand analysis of listed companies. Our platform caters to both seasoned professionals and those new to financial markets, enhancing their understanding and engagement with financial data.",
        },
        {
            question: "Is Read Riches suitable for new investors?",
            answer: "Absolutely, Read Riches is designed to assist both new and experienced investors. We offer easy-to-understand explanations alongside comprehensive data, making it suitable for anyone interested in financial markets.",
        },
        {
            question: "What payment methods are accepted for Read Riches memberships?",
            answer: "Read Riches accepts a variety of payment methods including credit cards, debit cards, net-banking and UPI. All transactions are secured to ensure your payment data is protected.",
        },
        {
            question: "Can I access Read Riches analysis from multiple devices?",
            answer: "Yes, once you have a membership, you can access Read Riches from any device, including smartphones, tablets, and computers, ensuring you can stay informed on the go.",
        },
        {
            question: "Does Read Riches offer any discounts or promotions for new members?",
            answer: "From time to time, we offer promotional rates and discounts for new members. Please check our website or subscribe to our newsletter for the latest offers and updates.",
        },
        {
            question: "Who can I contact if I have technical issues with the platform?",
            answer: "If you encounter any technical issues, please contact our support team directly through the contact form on our website or by emailing readriches@gmail.com. We are committed to resolving your issues promptly and efficiently.",
        },
    ];

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter FAQs based on search term
    const filteredFAQs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNavigateAndScroll = () => {
        navigate(`${config.baseUrl}contact`);
      };
    return (
        <>
            <div className="mobile-view-show">
                <Header />
            </div>
            <div style={{backgroundColor:"#F5F5F5"}}>
            <section className="help-section mt-0 position-relative">
                <div className="white-header ">
                    <Header />
                </div>
                <div className="help-content">
                    <div>
                        <h2 className="heading text-white text-center">How can we help?</h2>
                        <p className="text-white">Find answers to your questions by our support team or contact us directly.</p>
                        <div className="search-box">
                            <img src={Search} alt="Search Icon" />
                            <input
                                type="text"
                                placeholder="Search your question here"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-md-5">
                <Container>
                    <h2 className="heading text-center mb-md-4 mb-2">Browse your topic </h2>
                    <div className="h-web px-md-5">
                        <div className="help-slide-box">
                            <div className="help-box">
                                <div>
                                    <div className="h-box">
                                        <img src={Thumb} />
                                    </div>
                                    <h3>Getting started</h3>
                                    <p>Going beyond the obvious, our algorithm uncovers companies flying under the radar but with huge growth potential.</p>
                                </div>
                            </div>
                            <div className="help-box">
                                <div>
                                    <div className="h-box">
                                        <img src={User} />
                                    </div>
                                    <h3>Account</h3>
                                    <p>Going beyond the obvious, our algorithm uncovers companies flying under the radar but with huge growth potential.</p>
                                </div>
                            </div>
                            <div className="help-box">
                                <div>
                                    <div className="h-box">
                                        <img src={Doller} />
                                    </div>
                                    <h3>Trouble shooting</h3>
                                    <p>Going beyond the obvious, our algorithm uncovers companies flying under the radar but with huge growth potential.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-mob">

                    </div>
                </Container>
            </section>
            <section className='help-faq'>
                <div className='faq'>
                    <Container>
                        <Row>
                            <h2 className='sub-heading mb-3'>Frequently Asked Questions?</h2>
                            <Accordion activeKey={activeKey}>
                                {filteredFAQs.map((faq, index) => (
                                    <Accordion.Item eventKey={String(index)} key={index}>
                                        <Accordion.Header onClick={() => handleToggle(String(index))}>
                                            {faq.question}
                                            {activeKey === String(index) ? (
                                                <img src={Arrow} className="ms-auto" alt="Open Icon" width="12" height="12" />
                                            ) : (
                                                <img src={ArrowDown} className="ms-auto" alt="Closed Icon" width="12" height="12" />
                                            )}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {faq.answer}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Row>
                    </Container>
                </div>
            </section>
            <section>
                <Container>
                    <div className="get-touch">
                        <h2 className="sub-heading">Don't find any answer to your question?</h2>
                        <p>Get in touch with us, and we will assist you in the best way possible.</p>
                        <button type="button" className="logoutbtn" onClick={handleNavigateAndScroll}>Contact us</button>
                    </div>
                </Container>
            </section>
            </div>
            <Footer />
        </>
    );
};

export default Help;
