import React, { useEffect, useState } from "react";
import SearchIcon from "../../components/img/icon/search.svg"
import MobileSearch from "../../components/img/icon/mobileSearch.svg"
import NotificationIcon from "../../components/img/icon/notification.svg"
import "../../components/css/style.css"
import ManImg from "../../components/img/man.png"
import Avatar from "../../components/img/avatar.png"
import { useNavigate } from 'react-router-dom';
import config from "../../config";
import { FiChevronLeft } from 'react-icons/fi';
import MenuIcon from '../../components/img/icon/menu.svg'
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomeIcon from "../../components/img/icon/home.svg"
import ProfileIcon from "../../components/img/icon/price.svg"
import MembershipIcon from "../../components/img/icon/company.svg"
import { useLocation } from "react-router-dom";

const UserHeader = () => {

    const navigate = useNavigate();
    const checkToken = localStorage.getItem("token");
    const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu state on click
    };

    if (!checkToken) {
        const checkRole = localStorage.getItem("role");
        if (checkRole && checkRole == 1) {
            navigate(`${config.baseUrl}`);
        }
    }

    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch companies data from the API
    const fetchUserDetails = async () => {
        try {
            const response = await fetch(`${config.apiUrl}getProfile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${checkToken}` // Replace with actual token
                }
            });

            const result = await response.json();
            if (response.ok) {
                setUserDetails([result.user]);
            } else {
            }
        } catch (error) {
            console.error('Error fetching companies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <>
            <div className="p-3 web-header">
                <div className="d-flex align-items-center">
                    <div className="position-relative searchBox">
                        <img src={SearchIcon} alt="search" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="light-box">
                        <img src={NotificationIcon} alt="notification" />
                    </div>
                    {userDetails.length > 0 &&
                        <div className="profile">
                            {userDetails[0].picture ? <img src={`${config.apiUrl}profile/${userDetails[0]._id}`} /> : <img src={Avatar} />}
                            <span>{userDetails[0].name}</span>
                        </div>}
                </div>
            </div>
            <div className='mobile-header'>
                <div className='mobile-header-container'>
                    <Logo />
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
                            <Link to={`${config.baseUrl}user/dashboard`} className={`nav-link ${location.pathname === '/user/dashboard' ? 'active' : ''}`}>
                                <img src={HomeIcon} className='me-2' />Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to={`${config.baseUrl}user/profile`} className={`nav-link ${location.pathname === '/user/profile' ? 'active' : ''}`}>
                                <img src={ProfileIcon} className='me-2' /> Profile
                            </Link>
                        </li>
                        <li>
                            <Link to={`${config.baseUrl}user/membership-card`}  className={`nav-link ${location.pathname === '/user/card-detail' ? 'active' : ''} ${location.pathname === '/user/membership-card' ? 'active' : ''}`}>
                                <img src={MembershipIcon} className='me-2' />  Memberships Card
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default UserHeader;