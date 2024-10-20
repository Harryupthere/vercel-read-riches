import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '../components/img/icon/menu.svg'
import User from '../components/img/Userman.png'
import { FiChevronLeft } from 'react-icons/fi';


const Header = () => {
    const navigate = useNavigate();
  
    const [scrolling, setScrolling] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const checkToken = localStorage.getItem("token");
        if (checkToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu state on click
    };

    const navLinks = document.querySelector('.nav-links-mobile');
    const Hamburger = () => {
        if (navLinks.style.transform !== 'translateX(-100%)') {
            navLinks.style.transform = 'translateX(-100%)';
        }
        else {
            navLinks.style.transform = 'translateX(0%)';

        }
    }
    useEffect(() => {
        const handleScroll = () => { // it is not working
            
            if (window.scrollY > 200) {
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

    const navlinclickfunc = () => {
        navLinks.style.transform = 'translateX(-100%)';
    }


    const goToLogin=async(e)=>{
        e.preventDefault()
        navigate('/login');
    }
    const goToLogOut = (e) => {
        e.preventDefault();
        // Remove specific items from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsLoggedIn(false);

    }
    return (
        <>
        <div className='web-header'>
            <nav className={`navbar  px-5  ${scrolling ? 'navbar-scrolled' : ''} ${location.pathname.startsWith('/home/card/') ? 'nonavbar' : ''} ${location.pathname === '/membershipcard' ? 'navbar_top' : ''} ${location.pathname === '/userprofile' ? 'navbar_top' : ''} ${location.pathname !== '/login' ? 'navbar-white' : ''} ${location.pathname === '/dashboard' ? 'navbar_dash' : ''} ${location.pathname === '/about' ? 'navbar_top' : ''}  ${location.pathname === '/login' || location.pathname === '/forgotpass' || location.pathname === '/newpass' || location.pathname === '/signup' ? 'nonavbar' : ''} ${location.pathname === '/signup' ? 'navbar_top' : ''} ${location.pathname === '/userdashboard' ? 'navbar_top' : ''} ${location.pathname === '/pricing' ? 'navbar_top' : ''} ${location.pathname === '/otp' ? 'nonavbar' : ''}`}>
                <Logo scrolling={scrolling} />

                <ul className="nav-links">
                    <li>
                        <Link className={`nav-link  ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/" onClick={navlinclickfunc} title='Home'>Home</Link>
                    </li>
                    {/* <li>
                        <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/stockview' ? 'active' : ''} ${location.pathname === '/stockview' && scrolling ? 'activescrolled' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/stockview" onClick={navlinclickfunc} title='Stocks'>Stocks Tracker</Link>
                    </li>j */}
                    <li>
                        <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/about' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/about" onClick={navlinclickfunc} title='About Us'>About Us</Link>
                    </li>
                    <li>
                        <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/join-membership' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} onClick={navlinclickfunc} to="/join-membership" title='Pricing'>Pricing</Link>
                    </li>
                    <li>
                        <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/contact' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/contact" onClick={navlinclickfunc} title='Contact Us'>Contact Us</Link>
                    </li>
                </ul>
                <div>
                {isLoggedIn ? <button className="logoutbtn" onClick={e=>{goToLogOut(e)}}>Log Out</button>:<button className="logoutbtn" onClick={e=>{goToLogin(e)}}>Log In</button>}
                </div>
            </nav>
            </div>
            <div className='mobile-header'>
                <div className='mobile-header-container'>
                    <img src={MenuIcon} alt="Menu Icon" onClick={toggleMenu} className="menu-icon" />
                    <Logo scrolling={scrolling} />
                </div>
                <div className={`side-menu-list ${menuOpen ? 'open' : ''}`}>
                    <div className="menu-header d-flex align-items-center">
                       <FiChevronLeft/> <button alt="Back Icon" onClick={toggleMenu} className="back-icon">Back</button>
                    </div>
                    <div className='mobile-login'>
                        <img src={User}/>
                        <p>Seems you havent logged in yet </p>
                        <button className="logoutbtn">Log In</button>
                    </div>
                    <ul className="nav-links-mobile mt-4">
                    <li>
                        <Link className={`nav-link  ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/" onClick={navlinclickfunc} title='Home'>Home</Link>
                    </li>
                    <li>
                        <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/about' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/about" onClick={navlinclickfunc} title='About Us'>About Us</Link>
                    </li>
                    <li>
                        <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/stockview' ? 'active' : ''} ${location.pathname === '/stockview' && scrolling ? 'activescrolled' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/stockview" onClick={navlinclickfunc} title='Stocks'>Stocks Tracker</Link>
                    </li>
                    <li>
                        <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/contact' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} to="/contact" onClick={navlinclickfunc} title='Contact Us'>Contact Us</Link>
                    </li>
                    <li>
                        <Link className={`nav-link ${scrolling ? 'nav-links-scrolled' : ''} ${location.pathname === '/join-membership' ? 'active' : ''} ${location.pathname !== '/' ? 'nav-link-white' : ''}`} onClick={navlinclickfunc} to="/join-membership" title='Pricing'>Pricing</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;