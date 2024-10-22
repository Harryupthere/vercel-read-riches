import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../header';
import Facebook from '../../components/img/icon/facebook.svg';
import Insta from '../../components/img/icon/insta.svg';
import LinkedIn from '../../components/img/icon/linkedIn.svg';
import Twitter from '../../components/img/icon/twitter.svg';
import Email from '../../components/img/icon/mail.svg';
import Call from '../../components/img/icon/call.svg';
import Robot from '../../components/img/callingRobot.png';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer';
import Accordion from 'react-bootstrap/Accordion';
import Arrow from '../../components/img/icon/arrowRight.svg';
import ArrowDown from '../../components/img/icon/downArrow.svg';

function Contact() {
    const [activeKey, setActiveKey] = useState("0");

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        // // const { firstName, lastName, address, phone, message } = formData;

        // // // Send email using smtpjs
        // // window.Email.send({
        // //   Host: "smtp.elasticemail.com",
        // //   Username: "developmentfolks@gmail.com",
        // //   Password: "BD9538FCCDC2DD6C20CC23FC0E178F34E61B",
        // //   To: 'developmentfolks@gmail.com',
        // //   From: 'developmentfolks@gmail.com',
        // //   Subject: "Contact Us", // Static subject
        // //   Body: `
        // //     Name: ${firstName} ${lastName} <br> 
        // //     Address: ${address} <br>
        // //     Phone no: ${phone} <br> 
        // //     Message: ${message}
        // //   `
        // // }).then(
        // //   message => {
        // //     // Redirect to thank you page after sending
        // //     window.location = 'thankyou.html';
        // //   }
        // // ).catch(error => {
        // //   console.error("Error sending email:", error);
        // //   alert('Error sending email. Please try again later.');
        // // });
    };

    return (
        <div>
            <Header />
            <section>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='position-relative contact-details'>
                                <h2 className='home-heading pt-md-5'>Contact Us </h2>
                                <p className='pe-5'>Fill out the form below if you have any questions for us. <br />We typically try to respond within 24 hours of the query </p>
                                <h3>Information</h3>
                                <p className='cd'><Link to=""><img src={Email} alt="Email" />info@readriches.com</Link></p>
                                <p className='cd'><Link to=""><img src={Call} alt="Phone" /> +91- 7340283616</Link></p>
                                <h3>Follow</h3>
                                <div className='footer-list contact-list'>
                                    <ul>
                                        {/* <li><Link to=""><img src={Facebook} alt="Facebook" /></Link></li> */}
                                        <li>
                                            <Link to="https://www.instagram.com/readriches?igsh=MXY3ZnBmOWRjMWMwZA==" target="_blank" rel="noopener noreferrer">
                                                <img src={Insta} alt="Instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.linkedin.com/company/read-riches/" target="_blank" rel="noopener noreferrer">
                                                <img src={LinkedIn} alt="LinkedIn" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://x.com/ReadRiches?t=RwnqDBwEFI5s4Twnx1KSMw&s=09" target="_blank" rel="noopener noreferrer">
                                                <img src={Twitter} alt="Twitter" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <img src={Robot} className='robot' alt="Robot" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='position-relative'>
                                <div className='form-data contact-form'>
                                    <div className='inner-box'></div>
                                    (
                                    <Form onSubmit={handleSubmit}>
                                        <h3 className='mb-4'>Get In Touch With Us</h3>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="First Name"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Last Name"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Phone Numbers"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                placeholder="Your message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <div className=''>
                                            <button type='submit' className='theme-btn mt-4 w-100'>Send message</button>
                                        </div>
                                    </Form>
                                    <p className='mt-4' style={{ color: "#3A3A3C", fontWeight: "600" }}>
                                        Need more help? Check out our <Link to="" style={{ color: "#1D666D" }}>Help and support</Link> for additional answers.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='m-bg'>
                <div className='faq'>
                    <Container>
                        <Row>
                            <h2 className='home-heading mb-4'>Frequently <b>Asked Questions ?</b></h2>
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
            <Footer />
        </div>
    );
}

export default Contact;
