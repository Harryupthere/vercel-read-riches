import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import config from "../../config"
import toast, { Toaster } from "react-hot-toast";

function UpdateCard() {

    const navigate = useNavigate();

    const checkToken = localStorage.getItem("token")
    if (!checkToken) {
        const checkRole = localStorage.getItem("role")

        if (checkRole && checkRole == 0) {
            navigate(`${config.baseUrl}`)
        }

    }
    const { id } = useParams(); // Get cardId from URL params
    const [cardName, setCardName] = useState('');
    const [cardImage, setCardImage] = useState(null);
    
    useEffect(() => {

        fetchCardDetails();
    }, [id]);
    const fetchCardDetails = async () => {
        try {
            const response = await fetch(`${config.apiUrl}card/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': `Bearer ${checkToken}`
                },
            });

            const result = await response.json();
            if (result.status) {
                setCardName(result.data.cardName);
            } else {
                console.error('Failed to fetch card:', result.message);
            }
        } catch (error) {
            console.error('Error fetching card:', error);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('cardName', cardName);
        formData.append('cardId', id);
        if (cardImage) {
            formData.append('cardImageName', cardImage);
        }

        try {
            const response = await fetch(`${config.apiUrl}card`, {
                method: 'PUT',
                body: formData,
                headers: {
                     'Authorization': `Bearer ${checkToken}`
                },
            });

            const result = await response.json();
            if (result.status) {
                toast.success(result.message);
                fetchCardDetails();

                setTimeout(() => {
                    navigate(`${config.baseUrl}admin/cards`);
                }, 3000);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error updating card:', error);
        }
    };

    return (
        <>
        <Toaster/>
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
                <div className='form-data me-md-5'>
                    <h2 className='dash-heading mb-md-4'>
                        Update Card
                    </h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Card Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Card Name"
                                        value={cardName}
                                        onChange={(e) => setCardName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-2">
                            <Form.Label>Card Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => setCardImage(e.target.files[0])}
                            />
                        </Form.Group>
                        <div className='d-flex justify-content-end'>
                            <button type='submit' className='theme-btn mt-4'>Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default UpdateCard;
