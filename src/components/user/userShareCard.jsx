import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import BullPreview from "../../components/img/bull-bg.png";
import BearPreview from "../../components/img/bear-bg.png";
import WhalePreview from "../../components/img/whale-bg.png";
import RabbitPreview from "../../components/img/rabbit-bg.png";
import DeerPreview from "../../components/img/deer-bg.png";
import TortoisePreView from "../../components/img/tortoise-bg.png";
import BackLoad from "../../components/img/back-load.png";
import Footer from "../Footer";
import config from "../../config";

const UserShareCard = () => {
  const { id: userId } = useParams(); // Extract userId from route params
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const cardImages = {
    Bull: BullPreview,
    Bear: BearPreview,
    Whale: WhalePreview,
    Rabbit: RabbitPreview,
    Deer: DeerPreview,
    Tortoise: TortoisePreView,
  };

  // Fetch user details
  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`${config.apiUrl}getProfileShared/${userId}`, {
        method: "GET",
      });

      const result = await response.json();
      if (response.ok) {
        setUserDetails([result.user]);
      } else {
        console.error("Error fetching user details:", result.message);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Ensure userDetails has valid data
  const user = userDetails.length > 0 ? userDetails[0] : null;

  return (
    <>
      <div className="p-3">
        <div className="white-box mt-3">
          <div className="detail-bg">
            <div className="flip-container">
              <div className="flipper">
                <div className="front">
                  <img
                    src={cardImages[user?.cardType || "Bull"]} // Dynamically fetch image based on user.cardType
                    alt={user?.cardType || "Bull"}
                  />
                </div>
                <div className="back">
                  <div className="card-back">
                    <h3>{user?.cardType || "Card Type"}</h3>
                    <p>Optimistic investor who pushes prices higher</p>
                    <img src={BackLoad} alt="Card Back" />
                    <table>
                      <thead>
                        <tr>
                          <th>Member Name</th>
                          <th>Membership ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{user?.name || "N/A"}</td>
                          <td>{user?._id?.substring(0, 5) || "N/A"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserShareCard;
