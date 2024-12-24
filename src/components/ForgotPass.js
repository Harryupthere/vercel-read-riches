import React, { useState } from 'react'
import '../components/css/Forgetpass.css'
import loginsvg from '../components/img/login-img.png';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import toast, { Toaster } from "react-hot-toast";
import { Container, Row,Col } from 'react-bootstrap';
import { FiChevronLeft } from 'react-icons/fi';
import LoginMobile from '../components/img/loginMobile.png';

const ForgotPass = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const handleForgetPass = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate email format
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }
        try {
            const response = await fetch(`${config.apiUrl}forgotPassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (data.status) {
                toast.success('Password reset link sent successfully. Please check your email.');
                setTimeout(() => {
                    navigate(`${config.baseUrl}login`);
                }, 5000);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <><Toaster />
            <section className='my-md-0 my-5 start-pages'>
            {/* <button alt="Back Icon"  className="back-icon mb-4" style={{color:"#1C656D"}}> <FiChevronLeft style={{fontSize:"16px"}}/>Back</button> */}
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='login-img'>
                                <img src={loginsvg} alt="login" style={{ position: "absolute", left: "0", zIndex: "-1" }} className='login-side' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='loginData p-md-5 p-2 mt-md-0 mt-4'>
                                <div className='titledesc'>
                                    <h1>Forgot Password?</h1>
                                    <img src={LoginMobile} alt="login"  className='login-side-mob'/>
                                    <p>No worries! Just enter your email and we’ll send you a reset password link</p>
                                </div>
                                <form className="form" onSubmit={handleForgetPass}>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Hello@gmail.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="lbtn">Send Recovery email</button>
                                        <hr className='w-100 my-md-4 my-3'/>

                                    <p className='justrem'> New Member? <u onClick={() => {
                                        navigate(`${config.baseUrl}signup`);
                                    }} style={{ color: "#007AFF", textDecoration: "none", cursor: "pointer" }}>sign up now</u></p>

                                </form>
                            </div></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ForgotPass