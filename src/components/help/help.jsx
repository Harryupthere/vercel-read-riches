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


const Help = () => {
    const [activeKey, setActiveKey] = useState();

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };
    return (
        <>
            <div className="mobile-view-show">
                <Header />
            </div>
            <section className="help-section mt-0 position-relative">
                <div className="white-header ">
                    <Header />
                </div>
                <div className="help-content">
                    <div>
                        <h2 className="heaing text-white text-center">How can we help?</h2>
                        <p className="text-white">Find answers to your questions by our support team or contact us directly.</p>
                        <div className="search-box">
                            <img src={Search} />
                            <input type="input" placeholder="Search your question here " />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-md-5">
                <Container>
                    <h2 className="heading text-center mb-md-5 mb-2">Browse your topic </h2>
                    <div className="h-web">
                        <div className="help-slide-box">
                            <div className="help-box">
                                <div>
                                    <div className="h-box">
                                        <img src={Thumb} />
                                    </div>
                                    <h3>Getting started</h3>
                                    <p>Going beyond the obvious, our algorithm uncovers companies flying under the radar but with huge gdivth potential.</p>
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
                            <h2 className='sub-heading mb-3'>Frequently Asked Questions ?</h2>
                            <Accordion activeKey={activeKey}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={() => handleToggle("0")}>
                                        How do I buy and sell stocks on Read Riches?
                                        {activeKey === "0" ? (
                                            <img src={ArrowDown} className="ms-auto" alt="Open Icon" width="12" height="12" />
                                        ) : (
                                            <img src={Arrow} className="ms-auto" alt="Closed Icon" width="12" height="12" />
                                        )}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header onClick={() => handleToggle("1")}>
                                        What tools does Read Riches offer for technical analysis?
                                        {activeKey === "1" ? (
                                            <img src={ArrowDown} className="ms-auto" alt="Open Icon" width="12" height="12" />
                                        ) : (
                                            <img src={Arrow} className="ms-auto" alt="Closed Icon" width="12" height="12" />
                                        )}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We prioritize security and privacy with top-notch encryption and access control features.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header onClick={() => handleToggle("2")}>
                                        Can I trade international stocks on Read Riches?
                                        {activeKey === "2" ? (
                                            <img src={ArrowDown} className="ms-auto" alt="Open Icon" width="12" height="12" />
                                        ) : (
                                            <img src={Arrow} className="ms-auto" alt="Closed Icon" width="12" height="12" />
                                        )}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We prioritize security and privacy with top-notch encryption and access control features.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header onClick={() => handleToggle("3")}>
                                        What tools does Read Riches offer for technical analysis?
                                        {activeKey === "3" ? (
                                            <img src={ArrowDown} className="ms-auto" alt="Open Icon" width="12" height="12" />
                                        ) : (
                                            <img src={Arrow} className="ms-auto" alt="Closed Icon" width="12" height="12" />
                                        )}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We prioritize security and privacy with top-notch encryption and access control features.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header onClick={() => handleToggle("4")}>
                                        What tools does Read Riches offer for technical analysis?
                                        {activeKey === "4" ? (
                                            <img src={ArrowDown} className="ms-auto" alt="Open Icon" width="12" height="12" />
                                        ) : (
                                            <img src={Arrow} className="ms-auto" alt="Closed Icon" width="12" height="12" />
                                        )}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We prioritize security and privacy with top-notch encryption and access control features.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Container>
                </div>
            </section>
            <section>
                <Container>
                    <div className="get-touch">
                        <h2 className="sub-heading">Don't find any answer to your question? </h2>
                        <p>Get in touch with us we will assist you in best way possible .</p>
                        <button type="button" className="logoutbtn">Contact us </button>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}
export default Help;