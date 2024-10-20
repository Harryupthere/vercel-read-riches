import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import Footer from "../Footer";

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
];

const MembershipCard = () => {
    // State to hold the selected card
    const [selectedCard, setSelectedCard] = useState(cards[0]);
    const [userName, setUserName] = useState("Sanchi Sikka"); // Default user name

    return (
        <>
            <Sidebar />
            <div className="content">
                <UserHeader />
                <div className="p-3">
                    <h2 className="heading2">Your Membership Card</h2>
                    <Row>
                        <Col lg={8}>
                            <div className="white-box mb-3">
                                <div className="d-md-flex align-items-center ">
                                    <div className="profilePic">
                                        <img src={ManImg} />
                                    </div>
                                    <div className="ms-4">
                                        <h3 style={{ color: "#1D666D" }} className="heading2">Sanchi sikka</h3>
                                        <table className="small-table">
                                            <tr>
                                                <th className="text-black">Membership card number</th>
                                                <td>12124547</td>
                                            </tr>
                                            <tr>
                                                <th className="text-black">Expiry date:</th>
                                                <td>02-07-2024</td>
                                            </tr>
                                            <tr>
                                                <th className="text-black">Type </th>
                                                <td>Gold</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* ///////only see in mobile view///////////// */}
                            <div className="white-box mobile-view-show">
                                <h2 className="heading2">
                                    Preview{" "}
                                    <Link to="/user/card-detail" className="small-link" style={{ float: "right" }}>
                                        Full view <i className="arrow"></i>
                                    </Link>
                                </h2>
                                <p>Here is a preview of your selected membership card.</p>
                                <div className="side-preview">
                                    <div className="member-card">
                                        <span>#999222</span>
                                        <h4>{selectedCard.name} Member</h4>
                                        <img src={selectedCard.cardImage} alt="Card Preview" />
                                    </div>
                                </div>
                                <button type="button" className="theme-btn w-100 mt-3">
                                    Save your card
                                </button>
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
                                    <Link to="/user/card-detail" className="small-link" style={{ float: "right" }}>
                                        Full view <i className="arrow"></i>
                                    </Link>
                                </h2>
                                <p>Here is a preview of your selected membership card.</p>
                                <div className="side-preview">
                                    <div className="member-card">
                                        <span>#999222</span>
                                        <h4>{selectedCard.name} Member</h4>
                                        <img src={selectedCard.cardImage} alt="Card Preview" />
                                    </div>
                                </div>
                                <button type="button" className="theme-btn w-100 mt-3">
                                    Save your card
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MembershipCard;
