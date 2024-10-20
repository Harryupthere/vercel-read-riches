import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import loginsvg from '../components/img/login-img.png';
import '../components/css/Newpass.css';
import config from '../config';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { Col, Container, Row } from 'react-bootstrap';

export const NewPass = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [statusMessage1, setStatusMessage1] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

    const navigate = useNavigate();
    const { token } = useParams(); // Fetch token from URL params

    const handlePasswordChange = (e) => {
        setStatusMessage('');
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setStatusMessage1('');
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password) {
            setStatusMessage('Please enter password fields.');
            return;
        }
        if (!confirmPassword) {
            setStatusMessage1('Please enter confirm password fields.');
            return;
        }

        if (password !== confirmPassword) {
            setStatusMessage1('Passwords do not match.');
            return;
        }

        if (password.length < 6 || confirmPassword.length < 6) {
            setStatusMessage('Password must be at least 6 characters long.');
            return;
        }

        try {
            const response = await fetch(`${config.apiUrl}resetPassword/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password, password2: confirmPassword }),
            });

            const data = await response.json();
            if (data.status) {
                toast.success('Password reset successfully. You can now log in.');
                setTimeout(() => navigate('/login'), 3000); // Navigate after 3 seconds
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <Toaster />
            <section className='my-0'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='login-img'>
                                <img src={loginsvg} alt="login" style={{ position: "absolute", left: "0", zIndex: "-1" }} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='loginData p-5 mt-md-5'>
                                <div className='titledesc'>
                                    <h1>New Password</h1>
                                    <p>Please create a new password that you don’t use on any other site.</p>
                                </div>
                                <form className="form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <div className="password-container position-relative">
                                            <input
                                                className='w-100'
                                                type={showPassword ? 'text' : 'password'}
                                                id="password"
                                                value={password}
                                                onChange={handlePasswordChange}
                                                placeholder="Create new Password"
                                                required
                                            />
                                            <span className="eye-icon position-absolute"
                                                style={{ right: "15px", top: "15px", cursor:"pointer"}}
                                                onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                        </div>
                                    </div>
                                    {statusMessage && <span style={{ color: "red" }}>{statusMessage}</span>}
                                    <div className="form-group">
                                        <div className="password-container position-relative">
                                            <input
                                                className='w-100'
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                id="confirmPassword"
                                                value={confirmPassword}
                                                onChange={handleConfirmPasswordChange}
                                                placeholder="Confirm new Password"
                                                required
                                            />
                                            <span className="eye-icon position-absolute"
                                             style={{ right: "15px", top: "15px",cursor:"pointer" }}
                                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                        </div>
                                    </div>
                                    {statusMessage1 && <span style={{ color: "red" }}>{statusMessage1}</span>}
                                    <button type="submit" className="lbtn">Reset Password</button>
                                    <div className="or">
                                        <hr  className='w-100'/>
                                    </div>
                                    <p className='justrem'>Just remember? <u onClick={() => navigate('/signup')} style={{ color: "#007AFF", textDecoration: "none", cursor: "pointer" }}>sign up now</u></p>
                                </form>
                            </div></Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};
