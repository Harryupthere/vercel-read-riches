import React from "react";
import Sidebar from "./sidebar";
//import UserHeader from "./header";
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import ManImg from "../../components/img/man.png"
import Bullbg from "../../components/img/bull-bg.png"
import Bearbg from "../../components/img/bear-bg.png"

import Back from "../../components/img/back.png"
import ShareIcon from "../../components/img/icon/share.svg"
import DownloadIcon from "../../components/img/icon/download.svg"
import BackLoad from "../../components/img/back-load.png"
import Footer from "../Footer";

const CardDetails = () => {
    return (
        <>
            <Sidebar />
            <div className="content">
                {/* <UserHeader /> */}
                <div className="p-3">
                    <h2 className="heading2">Card Details</h2>
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
                    <div className="white-box mt-3">
                        <h2 className="heading mb-4">Your Membership card</h2>
                  <div className="detail-bg">
                  <div className="flip-container">
                            <div className="flipper">
                                {/* Front image */}
                                <div className="front ">
                                    <img src={Bearbg} alt="bull" />
                                </div>
                                {/* Back image */}
                                <div className="back">
                                    {/* <img src={Back} alt="backside" /> */}
                                    <div className="card-back">
                                        <h3>Bear</h3>
                                        <p>Optimistic investor who pushes prices higher</p>
                                        <img src={BackLoad}/>
                                        <table>
                                            <tr>
                                                <th>Member name</th>
                                                <th>Validity date</th>
                                                <th>Membership ID </th>
                                            </tr>
                                            <tr>
                                                <th>Rudransh singhal</th>
                                                <th>29-10-2002</th>
                                                <th>ABC123</th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>

                        <div className="d-flex justify-content-end mt-4 btn-iconed">
                            <button type="button" className="view small-btn bordered-btn">Share<img src={ShareIcon} className="ms-2" /></button>
                            <button type="button" className="view small-btn ms-2">Download<img src={DownloadIcon} className="ms-2" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default CardDetails;