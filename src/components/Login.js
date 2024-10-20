import React, { useState, useEffect, useContext } from 'react'
import "../components/css/Login.css"
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import loginsvg from '../components/img/login-img.png';
import LoginMobile from '../components/img/loginMobile.png';
import toast, { Toaster } from "react-hot-toast";
import config from '../config';
import { Col, Container, Row } from 'react-bootstrap';
import { FiChevronLeft } from 'react-icons/fi';


export default function Login() {
  const navigate = useNavigate();

  //   const checkToken = localStorage.getItem("token")
  //  if(checkToken){
  //   navigate("/")
  //  }

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Email validation
    if (!formData.email) {
      isValid = false;
      formErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email) && !/^\d{10}$/.test(formData.email)) {
      isValid = false;
      formErrors.email = 'Enter a valid Email.';
    }

    // Password validation
    if (!formData.password) {
      isValid = false;
      formErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      isValid = false;
      formErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      fetch(`${config.apiUrl}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status) {
            toast.success(data.message);
            localStorage.setItem("token", data.token)
            localStorage.setItem("role", data.role)
            if (data.role == 0) {
              navigate("/")
            } else {
              navigate("/admin/dashboard")
            }
          } else {
            toast.error(data.message ? data.message : data.error ? data.error : "Something went wrong. Please try again.")
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error(error.message ? error.message : error)
          // Handle error (e.g., display error message)
        });
    }
  };


  const HandleLoginGoogle = async (googleResponse) => {
    var userobj = jwtDecode(googleResponse.credential);

    try {
      fetch(`${config.apiUrl}google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userobj.email }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status) {
            toast.success(data.message);
            localStorage.setItem("token", data.token)
            localStorage.setItem("role", data.role)





          } else {
            toast.error(data.message ? data.message : data.error ? data.error : "Something went wrong. Please try again.")
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error(error.message ? error.message : error)
          // Handle error (e.g., display error message)
        });
    } catch (error) {
      console.error('Error during login:', error);

    }
  }

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "586580843313-t10e9v048f1qqktvrensdit0ikqp5hv2.apps.googleusercontent.com",//process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: HandleLoginGoogle,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-login-button'),
        {
          theme: 'outline',
          size: 'large',
          text: 'continue_with',
          shape: 'rectangular',
          locale: 'en',
          width: '100%',
        
        }
      );
    }
  }, []);
  return (
    <><Toaster />
    <section className='my-md-0 my-5 start-pages'>
    {/* <button alt="Back Icon"  className="back-icon mb-4" style={{color:"#1C656D"}}> <FiChevronLeft style={{fontSize:"16px"}}/>Back</button> */}
    <Container>
        <Row>
          <Col lg={6}>
            <div className='login-img'>
              <img src={loginsvg} alt="login" style={{ position: "absolute", left: "0",zIndex:"1" }} className='login-side'/>
            </div>
          </Col>
          <Col lg={6}>
            <div className='p-md-5 p-2 loginData'>
              <h1 className='mb-4'>Nice to see you Here</h1>
              <img src={LoginMobile} alt="login"  className='login-side-mob'/>
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email or phone number</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <div className="form-group" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <label id="remember" htmlFor="remember-me">Remember Me</label>
                    <input
                      style={{ marginBottom: 0 }}
                      type="checkbox"
                      id="remember-me"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <a href="/forgotpass" id='forgot' style={{ color: '#007AFF', textDecoration: 'none' }}>Forgot Password?</a>
                  </div>
                </div>
                <div className="or">
                  <hr />
                  <span>Or</span>
                  <hr />
                </div>
                <button type="submit" className="lbtn">Sign In</button>
                <div id="google-login-button" className='google-btn mt-3' style={{ width: '100%' }}></div>
                <p style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px' }}>
                  Don't have an account? <u onClick={() => navigate('/signup')} style={{ color: '#007AFF', textDecoration: 'none', cursor: 'pointer' }}>Sign Up</u>
                </p>
              </form>
            </div></Col>
        </Row>
      </Container>
    </section>

    </>
  )
}