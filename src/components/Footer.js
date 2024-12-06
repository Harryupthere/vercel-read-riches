import React from 'react';
import '../components/css/Footer.css'; // Import the CSS file
import logo from '../components/img/logo-white.svg'
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Facebook from '../components/img/icon/facebook.svg'
import Insta from '../components/img/icon/insta.svg'
import LinkedIn from '../components/img/icon/linkedIn.svg'
import Twitter from '../components/img/icon/twitter.svg'
import Phone from '../components/img/icon/phone.svg'
import Email from '../components/img/icon/email.svg'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const location = useLocation();
//   const handlePageChane=(e,path)=>{
// e.preventDefault()
// navigate(path);

//   }
const handlePageChane = (e, path) => {
  e.preventDefault();
  window.location.href = path; // This forces a full page reload to the specified path
};

const handleNavigateAndScroll = () => {
  navigate('/join-membership', { state: { scrollTo: true } });
};

    const handleScrollToSection = () => {
        const scrollPercentage = 1.9; // Adjust the scroll percentage here
        const scrollY = window.innerHeight * scrollPercentage; // Calculate the Y position to scroll to
        window.scrollTo({
          top: scrollY,
          behavior: 'smooth' // Smooth scrolling
        });
      };
  return (
    <footer className='light-bg-Img py-4 mx-0 '>
      <Container>
        <Row>
          <Col lg={3} md={3}>
            <div>
              <img src={logo} className='logo footer-logo mb-3' />
              <h3 className='heading4 mb-0'>
                Your money deserves more
              </h3>
              <p className='heading4 mb-1'>Join the movement</p>
              <button className='view mt-0' type='button' style={{ fontWeight: "500" }} onClick={handleNavigateAndScroll}>Be a Member</button>
            </div>
          </Col>
          <Col md={9} lg={6}>
            <div className='mt-3 d-md-flex justify-content-md-around'>
              <div className='footer-list'>
                <h3 className='heading4 hide-mobile'>
                  Quick links
                </h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/stockview">Stocks Tracker</Link></li>
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/contact">Contact us</Link></li>
                </ul>
              </div>
              <div className='footer-list'>
                <h3 className='heading4 hide-mobile'>
                  Others
                </h3>
                {/* <ul>
                  <li><Link to="/tearms-and-conditions">Terms and conditions</Link></li>
                  <li><Link to="/privacy-policy">Privacy policy</Link></li>
                  <li><Link to="/disclaimer-disclosures">Disclaimer Disclosures</Link></li>
                </ul> */}
                <ul>
                  <li onClick={e=>handlePageChane(e,'/tearms-and-conditions')}><Link>Terms and conditions</Link></li>
                  <li onClick={e=>handlePageChane(e,'/privacy-policy')}><Link>Privacy policy</Link></li>
                  <li onClick={e=>handlePageChane(e,'/disclaimer-disclosures')}><Link>Disclaimer Disclosures</Link></li>
                </ul>
              </div>
              <div className='footer-list hide-mobile'>
                <h3 className='heading4'>
                  Contact Us
                </h3>
                <ul>
                  <li><Link to=""><img src={Phone} className='me-2'/> +91- 7340283616</Link></li>
                  <li><Link to=""><img src={Email} className='me-2' />info@readriches.com</Link></li>
                </ul>
              </div>
            </div>
            <div className='mobile-social-icons footer-list'>
              <ul>
                <li><Link to=""><img src={Facebook} className='' /></Link></li>
                <li><Link to=""><img src={Insta} className='' /></Link></li>
                <li><Link to=""><img src={LinkedIn} className='' /></Link></li>
                <li><Link to=""><img src={Twitter} className='' /></Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={12} className='d-flex justify-content-lg-end  justify-content-center'>
            <div className='mt-3'>
              <h3 className='heading4 subscribe'>
                Subscribe For Latest Updates
              </h3>
              <div className='footer-update'>
                <input type='text' placeholder='E-mail' />
                <button type='button'>Subscribe</button>
              </div>
            </div>
          </Col>
        </Row>
        <div className='footer-list hide-mobile mt-md-4'>
          <ul className='d-flex justify-content-center mobile-social-icons'>
          <li><Link to=""><img src={Twitter} className='' /></Link></li>
            <li><Link to=""><img src={Facebook} className='' /></Link></li>
            <li><Link to=""><img src={Insta} className='' /></Link></li>
            <li><Link to=""><img src={LinkedIn} className='' /></Link></li>
          </ul>
        </div>
        <div className='copy-right mt-3'>
          <p className='w-75 m-auto'>
          <b>Disclaimer</b>: This website is not registered with SEBI. Before making any investment decisions, please consult a SEBI-registered advisor. The information provided here is for educational purposes only and should not be considered financial advice.. 
          </p>
          <p className='mt-2'>
          © 2024ReadRiches|All Rights Reserved|
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
