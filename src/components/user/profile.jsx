import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import UserHeader from "./header";
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import ManImg from "../../components/img/man.png"
import Avatar from "../../components/img/avatar.png"

import { useNavigate } from 'react-router-dom';
import config from "../../config";
const Profile = () => {

    const navigate = useNavigate();
    const checkToken = localStorage.getItem("token");

    if (!checkToken) {
        const checkRole = localStorage.getItem("role");
        if (checkRole && checkRole == 1) {
            navigate(`${config.baseUrl}`);
        }
    }
    const [selectedValue, setSelectedValue] = useState(""); // State to store selected value

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
                console.log(result.user)
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


    const updatePro = async (e) => {
        e.preventDefault();
      
        try {
          // Prepare the payload
          console.log(selectedValue,"selectedValue")
          userDetails[0].profession = selectedValue; // Assuming `selectedValue` is defined elsewhere
          const payload = userDetails[0];
      
          // Make the API call
          const response = await fetch(`${config.apiUrl}updateProfile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Ensure payload is sent as JSON
              'Authorization': `Bearer ${checkToken}` // Replace with actual token
            },
            body: JSON.stringify(payload) // Convert payload to JSON string
          });
      
          // Parse and handle the response
          const result = await response.json();
          if (response.ok) {
            fetchUserDetails()
          } else {
            console.error("Failed to update profile:", result);
          }
        } catch (error) {
          console.error("Error updating profile:", error);
        }
      };
      

    const handleChange = (event) => {
    
      setSelectedValue(event.target.value); // Update the state when a new option is selected
    };
    return (
        <>
            <Sidebar />
            <div className="content">
                <UserHeader />
                <div className="p-3">
                    {userDetails.length > 0 ? <Row>
                        <Col lg={8}>
                            <div className='form-data '>
                                <h2 className="heading2">Personal Information</h2>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-2" >
                                                <Form.Label>User Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your name " value={userDetails[0].name}/>
                                            </Form.Group>
                                        </Col>
                                        {/* <Col md={6}>
                                            <Form.Group className="mb-2" >
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your  last name " />
                                            </Form.Group>
                                        </Col> */}
                                    </Row>
                                    <Form.Group className="mb-2" >
                                        <Form.Label>Email Adress</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name " value={userDetails[0].email} />
                                    </Form.Group>
                                    <Form.Group className="mb-2" >
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name " value={userDetails[0].phone}/>
                                    </Form.Group>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-2" >
                                                <Form.Label> Country</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your name " value={userDetails[0].country}/>

                                                {/* <Form.Select aria-label="Enter your  last name ">
                                                    <option>Enter your  last name</option>
                                                    <option value="1">USA</option>
                                                    <option value="2">India</option>
                                                    <option value="3">Three</option>
                                                </Form.Select> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-2" >
                                                <Form.Label>Profession</Form.Label>
                                                
                                                { userDetails[0].profession?
                                                 <Form.Control type="text" placeholder="Enter your name " value={userDetails[0].profession}/>
                                                : <Form.Select
                                                aria-label="Select your profession"
                                                value={selectedValue} // Bind the state to the select value
                                                onChange={handleChange} // Handle changes
                                              >
                                                <option value="" disabled>Select your profession</option>
                                                <option value="Student">Student</option>
                                                <option value="Working Professional">Working Professional</option>
                                                <option value="Businessman">Businessman</option>
                                                <option value="Other">Other</option>
                                              </Form.Select>}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className=''>
                                        <button type='submit' onClick={(e)=>{updatePro(e)}} className='theme-btn mt-4'>Save</button>
                                    </div>
                                </Form>
                            </div></Col>
                        <Col lg={4}>
                            <div className="white-box">
                                <h2 className="heading2">Overview</h2>
                                <div>
                                    <div className="profilePic">
                                        {userDetails[0].picture?<img src={`${config.apiUrl}profile/${userDetails[0]._id}`} />:<img src={Avatar} />}
                                        <h3>{userDetails[0].name}</h3>
                                    </div>
                                    <div>
                                        <table className="small-table mt-3">
                                            <tr>
                                                <th>Membership status</th>
                                                <td>{userDetails[0].userType==1?"Active":"To be active soon"}</td>
                                            </tr>
                                            <tr>
                                                <th>Account since</th>
                                                <td>{new Date(userDetails[0].createAt).toLocaleDateString('en-GB').replace(/\//g, '-')}</td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                           {userDetails[0].userType==1 &&
                            <div className="white-box mt-3">
                                <h2 className="heading2">Subscription details</h2>
                                <div>
                                    <table className="small-table my-3">
                                    <tr>
                                                <th>Membership status</th>
                                                <td>Active</td>
                                            </tr>
                                        <tr>
                                            <th>Member since</th>
                                            <td>02-10-2024</td>
                                        </tr>
                                        <tr>
                                            <th>Next billing date</th>
                                            <td>03-10-2025</td>
                                        </tr>
                                        <tr>
                                            <th>Payment details</th>
                                            <td>Via credit card</td>
                                        </tr>
                                    </table>
                                    <div>
                                        <button className="border-btn me-2">View now</button>
                                        <button className="text-btn">Download invoice</button>
                                    </div>
                                </div>
                            </div>
                            }
                        </Col>
                    </Row> 
                    
                    : <p>Loading ...</p>}

                </div>
            </div>
        </>
    )
}
export default Profile;