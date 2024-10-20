import React from 'react';
import Logo from "../../components/img/logoLatest.svg";
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from "../../components/img/icon/home.svg"
import ProfileIcon from "../../components/img/icon/price.svg"
import MembershipIcon from "../../components/img/icon/company.svg"


function Sidebar() {
    const location = useLocation();

    return (
        <>
            <div className='sidebar'>
                <div className='sidebar-menu'>
                    <div className='logo'>
                        <Link to="/">
                        <img src={Logo} alt='logo'/>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/user/dashboard" className={`${location.pathname === '/user/dashboard' ? 'active' : ''}`}>
                            <img src={HomeIcon} className='me-2'/>Dashboard 
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/profile" className={`${location.pathname === '/user/profile' ? 'active' : ''}`}>
                            <img src={ProfileIcon} className='me-2'/> Profile 
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/membership-card" className={`${location.pathname === '/user/card-detail' ? 'active' : ''} ${location.pathname === '/user/membership-card' ? 'active' : ''}`}>
                            <img src={MembershipIcon} className='me-2'/>  Memberships Card 
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
        </>
    );
}

export default Sidebar;
