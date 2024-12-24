import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import UserHeader from "./header";
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import ManImg from "../../components/img/man.png"
import { ProgressBar } from "react-bootstrap";
import config from "../../config";
import Avatar from "../../components/img/avatar.png"
import { Link } from "react-router-dom";
import { FiChevronRight } from 'react-icons/fi'; // Importing icons for custom arrows
import Footer from "../Footer";


const UserDashboard = () => {

    const checkToken = localStorage.getItem("token");

    if (!checkToken) {
        const checkRole = localStorage.getItem("role");
    }

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [companies, setCompanies] = useState([])

    const [watchlistData, setWatchlistData] = useState([]);
    const [latestCompanyData, setlatestCompanyData] = useState([]);

    const fetchCompanies = async () => {
        try {
            await fetch(`${config.apiUrl}company?company_name=`, {
                method: 'GET'
            }).then(response => response.json())
                .then(data => {
                    if (data.status) {
                        setCompanies(data.data)
                    }
                }).catch((error) => {
                    console.log(error)
                });


        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const fetchWatchlist = async () => {
        try {
            const response = await fetch(`${config.apiUrl}watchlist`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${checkToken}`,
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json(); // in watchlist I will get multiple array of different companies I want to filter the latest on which was opened by user 
            if (result.status) {
                const watchlists = result.data.watchlists;
                // Sort the watchlists by openedTime (latest first)
                const sortedWatchlists = watchlists.sort((a, b) => new Date(b.openedTime) - new Date(a.openedTime));

                // Optionally, you can get the latest one (first element after sorting)
                const latestOpenedCompany = sortedWatchlists;

                setlatestCompanyData(latestOpenedCompany);

                // Set the sorted data to state
                setWatchlistData(sortedWatchlists);
            }
        } catch (error) {
            console.error('Error fetching companies:', error);
        } finally {
            setLoading(false);
        }
    };
    const fetchUserProfile = async () => {
        try {
            const response = await fetch(`${config.apiUrl}getProfile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${checkToken}` // Replace with actual token
                }
            });

            const result = await response.json();
            if (result.status) {
                setUserData([result.user])
                if (result.user.userType == 1) {
                    const response1 = await fetch(`${config.apiUrl}getOrder`, {
                        method: 'POST',
                        body: JSON.stringify({ orderId: result.user.orderId }),
                        headers: {
                            'Authorization': `Bearer ${checkToken}`, // Replace with actual token
                            'Content-Type': 'application/json'
                        }
                    });

                    const result1 = await response1.json();
                    setOrderData([result1.order])
                }
            }
        } catch (error) {
            console.error('Error fetching companies:', error);
        } finally {
            setLoading(false); // Hide loader after data is fetched
        }
    };

    useEffect(() => {
        fetchWatchlist();
        fetchUserProfile();
        fetchCompanies();
    }, []);

    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }, []);


    const convertTimestampToDate = (timestamp) => {
        const date = new Date(Number(timestamp));
        return date.toLocaleDateString(); // Format the date to a readable string (only date part)
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString(); // This will display the date in a more readable format like "9/26/2024, 10:31:14 AM"
    };
    return (
        <>
            <Sidebar />
            <div className="content">
                <UserHeader />
                <div className="p-3">
                    <Row>
                        <Col lg={8}>
                            <div className=''>
                                <div className="latest-uploads">
                                    {watchlistData.length > 0 ?
                                        <div>
                                            <span>Latest Uploads</span>
                                            <h3>"Hello {userData.length > 0 && userData[0].name}<br />
                                                Check out our latest upload: in-depth financial <br />insights for <b>
                                                    {latestCompanyData.length > 0 && latestCompanyData[0].companyName}
                                                    </b> now available!"</h3>
                                            <button type="button" className="view">View now</button>
                                        </div>
                                        :
                                        <div>
                                            {/* <span>Latest Uploads</span> */}
                                            <h3>"Hello {userData.length > 0 && userData[0].name}<br />
                                                Start your stocks journey </h3>
                                            {/* <button type="button" className="view">View now</button> */}
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="white-box mt-2 mobile-view-show">
                                <h2 className="heading2">Statistics</h2>
                                <div>
                                    <div className="profilePic">
                                        <div className="progress-img">
                                            <img src={ManImg} />
                                            <div className="percentBar">
                                                <span>30%</span>
                                            </div>
                                        </div>
                                        <h3>Good morning </h3>
                                        <span style={{ color: "#319F43" }}>You have utilized 30% of your subscription enjoy the rest </span>
                                    </div>

                                </div>
                            </div>
                            <Row className="mt-4">
                                <Col lg={4}>
                                    <div className="dashcard">
                                        <h3>Pdf usage summery </h3>
                                        <h2>{watchlistData.length > 0 ? watchlistData.length : 0}</h2>
                                        <p><span>{watchlistData.length > 0 ? watchlistData.length : 0}/{userData.length > 0 && userData[0].creditscore}</span>Pdf opened</p>
                                    </div>
                                </Col>
                                {orderData &&<Col lg={4}>
                                    <div className="dashcard">
                                        <h3>Subscription Status </h3>
                                        <h2>{orderData.length > 0 ? "Active" : "Inactive"}</h2>
                                        {/* {orderData.length > 0 && (
                                            <p>
                                                <span>{convertTimestampToDate(orderData[0].orderEndTime)}</span> Next Billing Date
                                            </p>
                                        )} */}
                                        </div>
                                </Col>}
                                <Col lg={4}>
                                    <div className="dashcard">
                                        <h3>Last pdf opened</h3>
                                        <h2>
                                            {latestCompanyData.length > 0 ? latestCompanyData[0].companyName : "No Records"}
                                            </h2>
                                        {/* Convert lastSeenTime to readable format */}
                                        <p><span>
                                            {latestCompanyData.length > 0 ? formatDate(latestCompanyData[0].lastSeenTime) : "-"}
                                            </span></p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="white-box mt-3">
                                <h2 className="heading2">Recently watched</h2>
                                {watchlistData.length > 0 ?
                                    watchlistData.map((item) => (
                                        <div className="progress-box active">
                                            <div className="tLogo"><span>T</span></div>
                                            <div className="w-100">
                                                <h3>{item.companyName}</h3>
                                                {/* <p>Tata Motors is a major Indian automaker, part of the Tata Group conglomerate</p> */}
                                                <ProgressBar
                                                    className="progress-line"
                                                    now={
                                                        item.progress
                                                    }
                                                />
                                                <label style={{ float: "right" }}>{item.progress}% Read</label>
                                            </div>
                                        </div>))
                                        :
                                        <p>No Records</p>}
                                {/* <div className="progress-box">
                                    <div className="tLogo"><span>T</span></div>
                                    <div className="w-100">
                                        <h3>Tata motors</h3>
                                        <p>Tata Motors is a major Indian automaker, part of the Tata Group conglomerate</p>
                                        <ProgressBar
                                            className="progress-line"
                                            now={60}
                                        />
                                        <label style={{ float: "right" }}>60% Read</label>
                                    </div>
                                </div>
                                <div className="progress-box">
                                    <div className="tLogo"><span>T</span></div>
                                    <div className="w-100">
                                        <h3>Tata motors</h3>
                                        <p>Tata Motors is a major Indian automaker, part of the Tata Group conglomerate</p>
                                        <ProgressBar
                                            className="progress-line"
                                            now={60}
                                        />
                                        <label style={{ float: "right" }}>60% Read</label>
                                    </div>
                                </div> */}
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="white-box hide-mobile">
                                <h2 className="heading2">Statistics</h2>
                                <div>
                                    <div className="profilePic">
                                        <div className="progress-img">
                                            <img src={Avatar} />
                                            {/* <div className="percentBar">
                                                <span>30%</span>
                                            </div> */}
                                        </div>
                                        <h3>{greeting}</h3>
                                        {/* <span style={{ color: "#319F43" }}>You have utilized 30% of your subscription enjoy the rest </span> */}
                                    </div>

                                </div>
                            </div>
                            <div className="white-box mt-3 watchlist">
                                <h2 className="heading2 mb-4">Your watchlist
                                    <Link to="" style={{ float: "right", fontSize: "12px", color: "#73BBC3", marginTop: "7px" }}>
                                   </Link></h2>
                                <div className="watchList">
                                   {watchlistData.length > 0 ?
                                     watchlistData.map((item) => (<div className="watch-item">
                                        <h3>{item.companyName}</h3>
                                        {/* <p>Tata Motors is a major Indian automaker, part of the Tata Group conglomerate</p> */}
                                        <FiChevronRight />
                                    </div>))
                                    :
                                    <p>No Records</p>}
                                    {/* <div className="watch-item">
                                        <h3>Tata motors</h3>
                                        <p>Tata Motors is a major Indian automaker, part of the Tata Group conglomerate</p>
                                    </div>
                                    <div className="watch-item">
                                        <h3>Tata motors</h3>
                                        <p>Tata Motors is a major Indian automaker, part of the Tata Group conglomerate</p>
                                    </div> */}
                                </div>
                            </div>

                            <div className="white-box mt-3 watchlist">
                                <h2 className="heading2 mb-4">Your Whislist
                                    <Link to="" style={{ float: "right", fontSize: "12px", color: "#73BBC3", marginTop: "7px" }}>
                                   </Link></h2>
                                <div className="watchList">
                                   {watchlistData.length > 0 ?
                                     watchlistData.map((item) => (<div className="watch-item">
                                        <h3>{item.companyName}</h3>
                                        {/* <p>Tata Motors is a major Indian automaker, part of the Tata Group conglomerate</p> */}
                                        <FiChevronRight />
                                    </div>))
                                    :
                                    <p>No Records</p>}
                                    {/* <div className="watch-item">
                                        <h3>Tata motors</h3>
                                        <p>Tata Motors is a major Indian automaker, part of the Tata Group conglomerate</p>
                                    </div>
                                    <div className="watch-item">
                                        <h3>Tata motors</h3>
                                        <p>Tata Motors is a major Indian automaker, part of the Tata Group conglomerate</p>
                                    </div> */}
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default UserDashboard;