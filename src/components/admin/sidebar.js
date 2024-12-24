import React, { useState } from 'react';
import Logo from "../../components/img/logoLatest.svg";
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '../../components/img/icon/menu.svg'
import MobileSearch from "../../components/img/icon/mobileSearch.svg"
import { FiChevronLeft } from 'react-icons/fi';
import config from '../../config';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle
  const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu state on click
    };
    const goToLogOut = (e) => {
        e.preventDefault();

        // Remove specific items from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate(`${config.baseUrl}login`);
    }
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar-menu'>
                    <div className='logo'>
                        <Link to={`${config.baseUrl}`}>
                            <img src={Logo} alt='logo' />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to={`${config.baseUrl}admin/dashboard`} className={`${location.pathname === '/admin/dashboard' ? 'active' : ''}`}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to={`${config.baseUrl}admin/users`} className={`${location.pathname === '/admin/users' ? 'active' : ''}`}>
                                User
                            </Link>
                        </li>
                        <li>
                            <Link to={`${config.baseUrl}admin/tickerData`}  className={`${location.pathname === '/admin/tickerData' ? 'active' : ''}`}>
                                Ticker
                            </Link>
                        </li>
                        <li>
                            <Link to={`${config.baseUrl}admin/companies`} className={`${location.pathname === '/admin/companies' ? 'active' : ''} ${location.pathname === '/admin/add-company' ? 'active' : ''}`}>
                                Companies
                            </Link>
                        </li>
                        <li>
                            <Link to={`${config.baseUrl}admin/category`} className={`${location.pathname === '/admin/category' ? 'active' : ''} ${location.pathname === '/admin/add-category' ? 'active' : ''}`}>
                                Category
                            </Link>
                        </li>
                    </ul>
                    <ul className='side-logout'>
                    <li onClick={(e)=>goToLogOut(e)}>
                            <Link >Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='mobile-header'>
                <div className='mobile-header-container'>
                <Link to="/">
                    <img src={Logo} />
                    </Link>
                    <div>
                        <img src={MobileSearch} alt="search" style={{ marginRight: "14px" }} />
                        <img src={MenuIcon} alt="Menu Icon" onClick={toggleMenu} className="menu-icon" />
                    </div>
                </div>
                <div className={`side-menu-list ${menuOpen ? 'open' : ''}`}>
                    <div className="menu-header d-flex align-items-center">
                        <FiChevronLeft /> <button alt="Back Icon" onClick={toggleMenu} className="back-icon">Back</button>
                    </div>

                    <ul className="nav-links-mobile mt-4">
                        <li>
                            <Link to={`${config.baseUrl}admin/dashboard`} className={`${location.pathname === '/admin/dashboard' ? 'active' : ''}`}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to={`${config.baseUrl}admin/users`} className={`${location.pathname === '/admin/users' ? 'active' : ''}`}>
                                User
                            </Link>
                        </li>

                        <li>
                            <Link to={`${config.baseUrl}admin/companies`} className={`${location.pathname === '/admin/companies' ? 'active' : ''} ${location.pathname === '/admin/add-company' ? 'active' : ''}`}>
                                Companies
                            </Link>
                        </li>
                        <li>
                            <Link to={`${config.baseUrl}admin/category`} className={`${location.pathname === '/admin/category' ? 'active' : ''} ${location.pathname === '/admin/add-category' ? 'active' : ''}`}>
                                Category
                            </Link>
                        </li>
                        <li onClick={(e)=>goToLogOut(e)}>
                            <Link >Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
