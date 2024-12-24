import React from "react";
import Sidebar from "./sidebar";
import UserHeader from "./header";
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import ManImg from "../../components/img/man.png"
import BullPreview from "../../components/img/bull-bg.png";
import BearPreview from "../../components/img/bear-bg.png";
import WhalePreview from "../../components/img/whale-bg.png";
import RabbitPreview from "../../components/img/rabbit-bg.png";
import DeerPreview from "../../components/img/deer-bg.png";
import TortoisePreView from "../../components/img/tortoise-bg.png"

import Back from "../../components/img/back.png"
import ShareIcon from "../../components/img/icon/share.svg"
import DownloadIcon from "../../components/img/icon/download.svg"
import BackLoad from "../../components/img/back-load.png"
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import Avatar from "../../components/img/avatar.png"

const CardDetails = () => {

    const location = useLocation();
    const data = location.state;
    const userDetails = data.userDetails
    const selectedCard = data.selectedCard
    const latestOrder = data.latestOrder

    const cardImages = {
        Bull: BullPreview,
        Bear: BearPreview,
        Whale: WhalePreview,
        Rabbit: RabbitPreview,
        Deer: DeerPreview,
        Tortoise: TortoisePreView
    };
    return (
        <>
            <Sidebar />
            <div className="content">
                <UserHeader />
                <div className="p-3">
                    <h2 className="heading2">Card Details</h2>
                    <div className="white-box mb-3">
                        <div className="d-md-flex align-items-center ">
                            <div className="profilePic">
                                <img src={Avatar} />
                            </div>
                            <div className="ms-4">
                                <h3 style={{ color: "#1D666D" }} className="heading2">{userDetails && userDetails.length > 0 && userDetails[0].name}</h3>
                                <table className="small-table">
                                    <tr>
                                        <th className="text-black">Membership card number</th>
                                        <td>{userDetails && userDetails.length > 0 && (userDetails[0]._id).substring(0, 5)}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-black">Expiry date:</th>
                                        <td>{latestOrder && new Intl.DateTimeFormat('en-GB').format(new Date(parseInt(latestOrder.orderEndTime)))}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-black">Type </th>
                                        {userDetails && userDetails.length > 0 && userDetails[0]?.card == undefined ? <td> Not selected yet</td> : <td>{userDetails[0]?.card}</td>}
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="white-box mt-3">
                        <h2 className="heading mb-4">Your Membership card</h2>
                        <div className="detail-bg">
                            <div className="flip-container">
                                <div className="flipper">
                                    {/* Front image */}
                                    <div className="front ">
                                        <img
                                            src={cardImages[selectedCard.name]} // Dynamically fetch the correct image
                                            alt={selectedCard.name}
                                        />
                                    </div>
                                    {/* Back image */}
                                    <div className="back">
                                        {/* <img src={Back} alt="backside" /> */}
                                        <div className="card-back">
                                            <h3>{selectedCard.name}</h3>
                                            <p>Optimistic investor who pushes prices higher</p>
                                            <img src={BackLoad} />
                                            <table>
                                                <tr>
                                                    <th>Member name</th>
                                                    <th>Validity date</th>
                                                    <th>Membership ID </th>
                                                </tr>
                                                <tr>
                                                    <th>{userDetails && userDetails.length > 0 && userDetails[0].name}</th>
                                                    <th>{latestOrder && new Intl.DateTimeFormat('en-GB').format(new Date(parseInt(latestOrder.orderEndTime)))}</th>
                                                    <th>{userDetails && userDetails.length > 0 && (userDetails[0]._id).substring(0, 5)}</th>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {userDetails && userDetails.length > 0 && userDetails[0].card == undefined ? '' :
                            <div className="d-flex justify-content-end mt-4 btn-iconed">
                                <button type="button" className="view small-btn bordered-btn">Share<img src={ShareIcon} className="ms-2" /></button>
                                <button type="button" className="view small-btn ms-2">Download<img src={DownloadIcon} className="ms-2" /></button>
                            </div>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CardDetails;