import React,{useEffect,useState} from 'react';
import Logo from "../../components/img/logoLatest.svg";
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from "../../components/img/icon/home.svg"
import ProfileIcon from "../../components/img/icon/price.svg"
import MembershipIcon from "../../components/img/icon/company.svg"

import config from "../../config";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    
        const navigate = useNavigate();
        const checkToken = localStorage.getItem("token");
        if (!checkToken) {
            const checkRole = localStorage.getItem("role");
            if (!checkRole) {
                navigate(`${config.baseUrl}`);
            }
        }
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const goToLogOut = (e) => {
        e.preventDefault();
        // Remove specific items from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        //setIsLoggedIn(false);

    }
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar-menu'>
                    <div className='logo'>
                        <Link to={`${config.baseUrl}`}>
                        <img src={Logo} alt='logo'/>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to={`${config.baseUrl}user/dashboard`} className={`${location.pathname === '/user/dashboard' ? 'active' : ''}`}>
                            <img src={HomeIcon} className='me-2'/>Dashboard 
                            </Link>
                        </li>
                        <li>
                            <Link to={`${config.baseUrl}user/profile`} className={`${location.pathname === '/user/profile' ? 'active' : ''}`}>
                            <img src={ProfileIcon} className='me-2'/> Profile 
                            </Link>
                        </li>
                       {userDetails.length>0 && userDetails[0].userType==1 &&
                        <li>
                            <Link to={`${config.baseUrl}user/membership-card`} className={`${location.pathname === '/user/card-detail' ? 'active' : ''} ${location.pathname === '/user/membership-card' ? 'active' : ''}`}>
                            <img src={MembershipIcon} className='me-2'/>  Memberships Card 
                            </Link>
                        </li>}
                    </ul>
                    <ul className='side-logout'>
                        <li onClick={e=>{goToLogOut(e)}}>
                            <Link to="">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
