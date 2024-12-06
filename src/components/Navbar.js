import React,{ useEffect, useState } from 'react';
import '../components/css/Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import '../components/css/Trading.css'


const Navbar = ({loginStatus,setLoginStatus,name,setName,picture,setPicture,newname,setUserid,email}) => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [show, doShow] = useState(false);

  useEffect(() => {
  // const navLinks = document.querySelector('.nav-links-mobile');
  // console.log(navLinks);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


 
  const navLinks = document.querySelector('.nav-links-mobile');
  const Hamburger = () => {
    if(navLinks.style.transform !== 'translateX(-100%)')
    {
      navLinks.style.transform = 'translateX(-100%)';
    }
    else{
      navLinks.style.transform = 'translateX(0%)';

    }
    // console.log('clicked');
  }

  const navlinclickfunc = () => {
    navLinks.style.transform = 'translateX(-100%)';
  }

  // console.log(newname)
  return (
  <>
    <nav className={`navbar px-5  ${scrolling ? 'navbar-scrolled' : ''} ${location.pathname.startsWith('/home/card/') ? 'nonavbar' : ''} ${location.pathname === '/membershipcard' ? 'navbar_top' : ''} ${location.pathname === '/userprofile' ? 'navbar_top' : ''} ${location.pathname !== '/login' ? 'navbar-white' : ''} ${location.pathname === '/dashboard' ? 'navbar_dash' : ''} ${location.pathname==='/about'?'navbar_top':''}  ${location.pathname==='/login' || location.pathname==='/forgotpass' || location.pathname==='/newpass' || location.pathname==='/signup'?'nonavbar':''} ${location.pathname==='/signup'?'navbar_top':''} ${location.pathname==='/userdashboard'?'navbar_top':''} ${location.pathname==='/pricing'?'navbar_top':''} ${location.pathname === '/otp' ? 'nonavbar' : ''}`}>

      <Logo scrolling={scrolling} />
      <ul className="nav-links-mobile">
        <li>
          <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/" onClick={navlinclickfunc} title='Home'>Home</Link>
        </li>
        <li>
          <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/stockview' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/stockview" onClick={navlinclickfunc} title='Stocks'>Stocks Tracker</Link>
        </li>
        <li>
          <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/about' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/about" onClick={navlinclickfunc} title='About Us'>About Us</Link>
        </li>
       
        <li>
          <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/contact' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/contact" onClick={navlinclickfunc} title='Contact Us'>Contact Us</Link>
        </li>
      </ul>
      {/*  */}
      <ul className="nav-links">
        <li>
          <Link className={`${location.pathname === '/stockview' ? 'nav-link-stock' : 'nav-link'}  ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/" onClick={navlinclickfunc} title='Home'>Home</Link>
        </li>
        <li>
          <Link className={`${location.pathname === '/stockview' ? 'nav-link-stock' : 'nav-link'} ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/about' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/about" onClick={navlinclickfunc} title='About Us'>About Us</Link>
        </li>
        <li>
          <Link className={`${location.pathname === '/stockview' ? 'nav-link-stock' : 'nav-link'} ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/stockview' ? 'activestock' : ''} ${location.pathname === '/stockview' && scrolling ? 'activescrolled' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/stockview" onClick={navlinclickfunc} title='Stocks'>Stocks</Link>
        </li>
        <li>
          <Link className={`${location.pathname === '/stockview' ? 'nav-link-stock' : 'nav-link'} ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/contact' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/contact" onClick={navlinclickfunc} title='Contact Us'>Contact Us</Link>
        </li>
        {/* Pricing, to='/pricing' */}
        <li>
          <Link className={`${location.pathname === '/stockview' ? 'nav-link-stock' : 'nav-link'} ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/pricing' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} onClick={navlinclickfunc} to="/pricing" title='Pricing'>Pricing</Link>
        </li>
      </ul>


      {
        loginStatus.success!==null&&loginStatus.success!==false
        &&
        
        <div className="logout">
          <Link to="/login" onClick={() => 
            {
              setName(null);
              setLoginStatus({ success: null, message: '' })
              setPicture(null);
              sessionStorage.removeItem('email');
              sessionStorage.removeItem('loginStatus');
              sessionStorage.removeItem('picture');
              sessionStorage.removeItem('creditscore');
              sessionStorage.removeItem('userid');
              sessionStorage.removeItem('name');

              
              setUserid(null);  
            }
            }>
              {
                loginStatus.success!==null&&
            // <i className="fas fa-sign-out" title='logout'></i>
            <button className="logoutbtn">Log Out</button>
              }
          </Link>
        </div>
        
      }
    </nav>
  </>
  );
}

export default Navbar;
