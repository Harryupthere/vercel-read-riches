import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../components/css/Signup.css"
import loginsvg from '../components/img/login-img.png';
import config from '../config';
import toast, { Toaster } from "react-hot-toast";
import { Col,Row, Container } from 'react-bootstrap';
import { FiChevronLeft } from 'react-icons/fi';
import LoginMobile from '../components/img/loginMobile.png';


export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    country: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name) {
      isValid = false;
      formErrors.name = 'Name is required.';
    }

    // Email validation
    if (!formData.email) {
      isValid = false;
      formErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      formErrors.email = 'Enter a valid email address.';
    }

    // Password validation
    if (!formData.password) {
      isValid = false;
      formErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      isValid = false;
      formErrors.password = 'Password must be at least 6 characters long.';
    }

    // Confirm password validation
    if (formData.password !== formData.password2) {
      isValid = false;
      formErrors.password2 = 'Passwords do not match.';
    }

    // Phone validation
    if (!formData.phone) {
      isValid = false;
      formErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      isValid = false;
      formErrors.phone = 'Enter a valid 10-digit phone number.';
    }

    // Country validation
    if (!formData.country) {
      isValid = false;
      formErrors.country = 'Country is required.';
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted', formData);
      fetch(`${config.apiUrl}signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data.status);
          if (data.status) {
            toast.success(data.message);
            setTimeout(() => {
              navigate('/login');
            }, 3000);
          } else {
            toast.error(data.message)
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error(error.message ? error.message : error)
        });
    }
  };


  return (
    <><Toaster />
      <section className='my-md-0 my-5 start-pages'>
      {/* <button alt="Back Icon"  className="back-icon" style={{color:"#1C656D"}}> <FiChevronLeft style={{fontSize:"16px"}}/>Back</button> */}
        <Container>
          <Row>
            <Col lg={6}>
              <div className='login-img'>
              <img src={loginsvg} alt="login" style={{ position: "absolute", left: "0",zIndex:"1" }} className='login-side'/>
              </div></Col>
            <Col lg={6}>
              <div className='loginData p-md-4 p-2 mt-md-0 mt-5'>
                <h1>Registration</h1>
                <img src={LoginMobile} alt="login"  className='login-side-mob'/>
                <form className="form" onSubmit={handleSignup}>
                  <div className="form-group">
                    <label htmlFor="name">Name<span>&#42;</span></label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email<span>&#42;</span></label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter an email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password<span>&#42;</span></label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter a password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password2">Confirm Password<span>&#42;</span></label>
                    <input
                      type="password"
                      id="password2"
                      placeholder="Confirm your password"
                      value={formData.password2}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.password2 && <p style={{ color: 'red' }}>{errors.password2}</p>}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="form-group" style={{ width: "48%" }}>
                      <label htmlFor="phone">Phone Number<span>&#42;</span></label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter a phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                    </div>
                    <div className="form-group" style={{ width: "48%" }}>
                      <label htmlFor="country">Country<span>&#42;</span></label>
                      <select
                        id="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>Select a country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                      </select>
                      {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
                    </div>
                  </div>
                  <button type="submit" className="lbtn">Create an account</button>
                  <p style={{ display: "flex", justifyContent: "start", gap: "10px", marginTop: "16px" }}>
                    Have an account? <u onClick={() => navigate('/login')} style={{ color: "#007AFF", textDecoration: "none", cursor: "pointer" }}>Login</u>
                  </p>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}