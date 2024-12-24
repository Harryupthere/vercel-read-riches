import React, { useState,useEffect } from 'react';
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
import emailjs from 'emailjs-com'; // or the appropriate path
import axios from 'axios';
import config from '../../config';
import toast, { Toaster } from "react-hot-toast";

function Contact() {
    const [activeKey, setActiveKey] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const faqs = [
        {
            question: "How can Read Riches simplify my investment research?",
            answer: "Read Riches consolidates essential company data and in-depth analysis all in one place, offering real-time metrics, qualitative insights, and detailed financial breakdowns to streamline your investment research process.",
        },
        {
            question: "What makes Read Riches different from other financial analysis platforms?",
            answer: "Read Riches stands out by providing a one-stop investment research platform, focusing on both the quantitative metrics and qualitative aspects of company performance on a real-time basis. From real-time stock prices and key ratios like PE, we offer a complete, holistic view of every company you care about. Additionally, you have a chance to be part of an exclusive community where members can engage in discussions, share insights, and learn from experienced investors.",
        },
        {
            question: "What details about the company does Read Riches offer in its analysis?",
            answer: "Read Riches provides comprehensive analysis including Financial X-Ray of the three financial statements, detailed valuations via DCF and relative models, and competitor positioning through scatter plots. We gauge management sentiment with word clouds from concalls and offer an in-depth company profile detailing business models and revenue quality. Our reports also integrate Porter's 5 Forces and MOAT analysis for strategic insights, complemented by thorough industry analysis and market outlooks.",
        },
        {
            question: "How often is company data updated on Read Riches?",
            answer: "We strive to provide the most current and relevant financial data. The stock prices are live according to market fluctuations, and company analyses are updated regularly in response to new financial reports, market changes, and other relevant events to ensure our members have the latest information.",
        },
        {
            question: "What is the Read Riches community, and what can I expect?",
            answer: "The Read Riches community is our dynamic WhatsApp group where financial enthusiasts, traders, and investors gather to discuss market trends, share insights, and explore potential opportunities. It's a collaborative hub that turns financial discussions into profitable insights.",
        },
        {
            question: "What does membership at Read Riches include?",
            answer: "Membership provides unlimited access to our full range of company analyses, along with exclusive member benefits such as detailed financial reports, expert insights, and an invitation to join our vibrant community of investors. You will also gain access to events hosted by Read Riches that are exclusive for investors.",
        },
        {
            question: "Can I cancel my Read Riches membership at any time?",
            answer: "Yes, you can cancel your membership at any time through your account settings. Upon cancellation, you'll retain access to member benefits until the end of your current billing period.",
        },
    ];
    

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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form Data Submitted:', formData);

    //     const { firstName, lastName, address, phone, message } = formData;
    //     //Uncaught TypeError: Cannot read properties of undefined (reading 'send')
    //     emailjs.send({
    //       Host: "smtp.elasticemail.com",
    //       Username: "contact@readriches.com",
    //       Password: "D23315C3BE25047C1B710044DEF362A02DB91",
    //       To: 'harsh.chouhan010@gmail.com',
    //       From: 'contact@readriches.com',
    //       Subject: "Contact Us", // Static subject
    //       Body: `
    //         Name: ${firstName} ${lastName} <br> 
    //         Address: ${address} <br>
    //         Phone no: ${phone} <br> 
    //         Message: ${message}
    //       `
    //     }, 'YOUR_USER_ID').then(
    //       message => {
    //         // Redirect to thank you page after sending
    //         window.location = 'thankyou.html';
    //       }
    //     ).catch(error => {
    //       console.error("Error sending email:", error);
    //       alert('Error sending email. Please try again later.');
    //     });
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        const { firstName, lastName, address, phone, message } = formData;

        const emailData = {
            from: 'contact@readriches.com',
            to: 'harsh.chouhan010@gmail.com',
            subject: "Contact Us",
            body: `
                Name: ${firstName} ${lastName} <br>
                Address: ${address} <br>
                Phone no: ${phone} <br>
                Message: ${message}
            `
        };

        // try {
        //     const response = await axios.post('https://api.elasticemail.com/v4/email/', {
        //         ...emailData,
        //         // Include your API key here
        //         apiKey: '195918D803C495585D20B2524BC394D421760D7C380A786AF4729F830AA9A317D0925DB201C74FBF30B9E1C6CD41210E'
        //     });
        //     console.log('Email sent successfully:', response.data);
        //     // just referesh page 
        // } catch (error) {
        //     console.error("Error sending email:", error);
        //     alert('Error sending email. Please try again later.');
        // }


       try{
        fetch(`https://api.elasticemail.com/v4/email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorizations':'195918D803C495585D20B2524BC394D421760D7C380A786AF4729F830AA9A317D0925DB201C74FBF30B9E1C6CD41210E'
            },
            body: emailData,
          })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            }).catch((error) => {
                console.error('Error:', error);
                  toast.error(error.message ? error.message : error)
                     // Handle error (e.g., display error message)
                   });

       }catch(error){
        console.log(error)
       } 

        // fetch(`${config.apiUrl}contactEmail`, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        //   })
        //     .then(response => response.json())
        //     .then(data => {
        //       if (data.status) {
        //         toast.success(data.message);

        //       } else {
        //         toast.error(data.message ? data.message : data.error ? data.error : "Something went wrong. Please try again.")
        //       }
        //     })
        //     .catch((error) => {
        //       console.error('Error:', error);
        //       toast.error(error.message ? error.message : error)
        //       // Handle error (e.g., display error message)
        //     });
    };
    return (
        <div>
            <Header />
            <section>
                <Container>
                    <Row>
                        <Col md={7}>
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
                        <Col md={5} className='pe-0'>
                            <div className='position-relative h-100'>
                            <div className='inner-box'></div>

                                <div className='form-data contact-form'>

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
                                        Need more help? Check out our <Link to="/help" style={{ color: "#1D666D" }}>Help and support</Link> for additional answers.
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
                                {faqs.map((faq, index) => (
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
            <Footer />
        </div>
    );
}

export default Contact;
