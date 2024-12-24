import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import UserHeader from "./header";
import { Row, Col } from "react-bootstrap";
import ManImg from "../../components/img/man.png";
import Bull from "../../components/img/bullCard.png";
import Bear from "../../components/img/bearCard.png";
import Whale from "../../components/img/whaleCard.png";
import Rabbit from "../../components/img/rabbitCard.png";
import Deer from "../../components/img/deerCard.png";
import BullPreview from "../../components/img/bull-bg.png";
import BearPreview from "../../components/img/bear-bg.png";
import WhalePreview from "../../components/img/whale-bg.png";
import RabbitPreview from "../../components/img/rabbit-bg.png";
import DeerPreview from "../../components/img/deer-bg.png";
import TortoisePreView from "../../components/img/tortoise-bg.png"
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';
import config from "../../config";
import Avatar from "../../components/img/avatar.png"
import toast, { Toaster } from "react-hot-toast";
// Cards data with images
const cards = [
    {
        name: "Bull",
        img: Bull,
        description: "Optimistic investors who push the price higher",
        cardImage: BullPreview,
    },
    {
        name: "Bear",
        img: Bear,
        description: "Pessimistic investors who expect prices to fall",
        cardImage: BearPreview,
    },
    {
        name: "Dolphin",
        img: Whale,
        description: "Pessimistic investors who expect prices to fall",
        cardImage: WhalePreview,
    },
    {
        name: "Rabbit",
        img: Rabbit,
        description: "Pessimistic investors who expect prices to fall",
        cardImage: RabbitPreview,
    },
    {
        name: "Deer",
        img: Deer,
        description: "Pessimistic investors who expect prices to fall",
        cardImage: DeerPreview,
    },
    {
        name: "Tortoise",
        img: Deer,
        description: "Pessimistic investors who expect prices to fall",
        cardImage: TortoisePreView,
    },
];

const MembershipCard = () => {
    // State to hold the selected card
    const [selectedCard, setSelectedCard] = useState(cards[0]);
    const [userName, setUserName] = useState("Sanchi Sikka"); // Default user name
    const navigate = useNavigate();
    const checkToken = localStorage.getItem("token");

    if (!checkToken) {
        const checkRole = localStorage.getItem("role");
        if (checkRole && checkRole == 1) {
            navigate(`${config.baseUrl}`);
        }
    }
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [latestOrder, setLatestOrder] = useState();

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


    // Fetch companies data from the API
    const fetchLatestOrder = async () => {
        try {
            const response = await fetch(`${config.apiUrl}latestOrder`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${checkToken}` // Replace with actual token
                }
            });

            const result = await response.json();
            if (response.ok) {
                setLatestOrder(result)
                // setUserDetails([result.user]);
            } else {
            }
        } catch (error) {
            console.error('Error fetching companies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLatestOrder();
    }, []);


    const saveCardMethod = async (e) => {
        e.preventDefault();
        try {
            let newCard = selectedCard.name;
            const response = await fetch(`${config.apiUrl}saveCard`, {
                method: 'POST',
                body: JSON.stringify({ card: newCard }),
                headers: {
                    'Authorization': `Bearer ${checkToken}`, // Replace with actual token
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();

            if (response.ok) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error(error); // Logs the error object for debugging
            toast.error(error.message || "Something went wrong!"); // Display a friendly error message
        }
    };

    return (
        <>
            <Sidebar />
            <Toaster />

            <div className="content">
                <UserHeader />
                <div className="p-3">
                    <h2 className="heading2">Your Membership Card</h2>
                    <Row>
                        <Col lg={8}>
                            <div className="white-box mb-3">
                                <div className="d-md-flex align-items-center ">
                                    <div className="profilePic">
                                        <img src={Avatar} />
                                    </div>
                                    <div className="ms-md-4">
                                        <h3 style={{ color: "#1D666D" }} className="heading2">{userDetails && userDetails.length > 0 && userDetails[0].name}</h3>
                                        <table className="small-table">
                                            <tr>
                                                <th className="text-black">Membership card number</th>
                                                <td>{userDetails && userDetails.length > 0 && (userDetails[0]._id).substring(0, 5)}</td>
                                            </tr>
                                            <tr>
                                                <th className="text-black">Expiry date:</th>
                                                <td>
                                                    {latestOrder && new Intl.DateTimeFormat('en-GB').format(new Date(parseInt(latestOrder.orderEndTime)))}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="text-black">Type </th>
                                                {userDetails && userDetails.length > 0 && userDetails[0]?.card == undefined ? <td> Not selected yet</td> : <td>{userDetails[0]?.card}</td>}
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* ///////only see in mobile view///////////// */}
                            <div className="white-box mobile-view-show">
                                <h2 className="heading2">
                                    Preview{" "}
                                    {(userDetails[0]?.card != undefined && selectedCard.name === userDetails[0].card) || (userDetails[0]?.card == undefined) ? (
                                        <Link
                                            to={`${config.baseUrl}user/card-detail`}
                                            className="small-link"
                                            style={{ float: "right" }}
                                            state={{ selectedCard, userDetails, latestOrder }}
                                        >
                                            Full view <i className="arrow"></i>
                                        </Link>
                                    ) : (
                                        <span
                                            className="small-link disabled-link"
                                            style={{ float: "right", pointerEvents: "none", color: "gray" }}
                                        >
                                            Full view <i className="arrow"></i>
                                        </span>
                                    )}
                                </h2>
                                <p>Here is a preview of your selected membership card.</p>
                                <div className="side-preview">
                                    <div className="member-card">
                                        <span>#{userDetails && userDetails.length > 0 && (userDetails[0]._id).substring(0, 5)}</span>
                                        <h4>{userDetails && userDetails.length > 0 && userDetails[0].name}</h4>
                                        <img src={selectedCard.cardImage} alt="Card Preview" />
                                    </div>
                                </div>
                                {userDetails && userDetails.length > 0 && userDetails[0]?.card == undefined ? <button type="button" className="theme-btn w-100 mt-3" onClick={e => { saveCardMethod(e) }}>
                                    Save your card
                                </button>
                                    :
                                    <button type="button" className="theme-btn w-100 mt-3" disabled>
                                        Card Already saved
                                    </button>}
                            </div>
                            <div className="white-box">
                                <h2 className="heading2">Select Your Card Image</h2>
                                <p>Here we have various animals, tell us which type suits you the most.</p>
                                <Row>
                                    {cards.map((item, index) => (
                                        <Col key={index} md={4} xs={6} className="p-md-2 p-0">
                                            <div
                                                className={`membershipCard ${selectedCard.name === item.name ? 'selectedCard' : ''}`}
                                                onClick={() => setSelectedCard(item)} // Set selected card
                                                style={{ cursor: "pointer" }}
                                            >
                                                <img src={item.img} alt={item.name} />
                                                <h3>{item.name}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                        <Col lg={4}>
                            {/* ////only see in web version////// */}
                            <div className="white-box hide-mobile">
                                <h2 className="heading2">
                                    Preview{" "}
                                    {(userDetails[0]?.card != undefined && selectedCard.name === userDetails[0].card) || (userDetails[0]?.card == undefined) ? (
                                        <Link
                                            to={`${config.baseUrl}user/card-detail`}
                                            className="small-link"
                                            style={{ float: "right" }}
                                            state={{ selectedCard, userDetails, latestOrder }}
                                        >
                                            Full view <i className="arrow"></i>
                                        </Link>
                                    ) : (
                                        <span
                                            className="small-link disabled-link"
                                            style={{ float: "right", pointerEvents: "none", color: "gray" }}
                                        >
                                            Full view <i className="arrow"></i>
                                        </span>
                                    )}

                                </h2>
                                <p>Here is a preview of your selected membership card.</p>
                                <div className="side-preview">
                                    <div className="member-card">
                                        <span>#{userDetails && userDetails.length > 0 && (userDetails[0]._id).substring(0, 5)}</span>
                                        <h4>{userDetails && userDetails.length > 0 && userDetails[0].name}</h4>
                                        <img src={selectedCard.cardImage} alt="Card Preview" />
                                    </div>
                                </div>
                                {userDetails && userDetails.length > 0 && userDetails[0]?.card == undefined ? <button type="button" className="theme-btn w-100 mt-3" onClick={e => { saveCardMethod(e) }}>
                                    Save your card
                                </button>
                                    :
                                    <button type="button" className="theme-btn w-100 mt-3" disabled>
                                        Card Already saved
                                    </button>}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MembershipCard;
