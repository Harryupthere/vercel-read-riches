import React, { useState } from 'react';
import Logo from "../../components/img/logoLatest.svg";
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '../../components/img/icon/menu.svg'
import MobileSearch from "../../components/img/icon/mobileSearch.svg"
import { FiChevronLeft } from 'react-icons/fi';


function Sidebar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu state on click
    };

    return (
        <>
            <div className='sidebar'>
                <div className='sidebar-menu'>
                    <div className='logo'>
                        <Link to="/">
                            <img src={Logo} alt='logo' />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/admin/dashboard" className={`${location.pathname === '/admin/dashboard' ? 'active' : ''}`}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/users" className={`${location.pathname === '/admin/users' ? 'active' : ''}`}>
                                User
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/tickerData" className={`${location.pathname === '/admin/tickerData' ? 'active' : ''}`}>
                                Ticker
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/companies" className={`${location.pathname === '/admin/companies' ? 'active' : ''} ${location.pathname === '/admin/add-company' ? 'active' : ''}`}>
                                Companies
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/category" className={`${location.pathname === '/admin/category' ? 'active' : ''} ${location.pathname === '/admin/add-category' ? 'active' : ''}`}>
                                Category
                            </Link>
                        </li>
                    </ul>
                    <ul className='side-logout'>
                        <li>
                            <Link to="">Logout</Link>
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
                            <Link to="/admin/dashboard" className={`${location.pathname === '/admin/dashboard' ? 'active' : ''}`}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/users" className={`${location.pathname === '/admin/users' ? 'active' : ''}`}>
                                User
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/cards" className={`${location.pathname === '/admin/cards' ? 'active' : ''}`}>
                                Cards
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/companies" className={`${location.pathname === '/admin/companies' ? 'active' : ''} ${location.pathname === '/admin/add-company' ? 'active' : ''}`}>
                                Companies
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/category" className={`${location.pathname === '/admin/category' ? 'active' : ''} ${location.pathname === '/admin/add-category' ? 'active' : ''}`}>
                                Category
                            </Link>
                        </li>
                        <li>
                            <Link to="">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
