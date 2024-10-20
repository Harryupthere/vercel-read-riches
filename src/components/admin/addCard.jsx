import React, { useState } from 'react';
import Sidebar from './sidebar';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import config from "../../config"
import toast, { Toaster } from "react-hot-toast";

function AddCard() {
    const navigate = useNavigate();

    const checkToken = localStorage.getItem("token")
    if (!checkToken) {
        const checkRole = localStorage.getItem("role")

        if (checkRole && checkRole == 0) {
            navigate("/")
        }

    }
    const [cardName, setCardName] = useState('');
    const [cardImage, setCardImage] = useState(null);

    const handleCardNameChange = (e) => setCardName(e.target.value);
    const handleCardImageChange = (e) => setCardImage(e.target.files[0]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('cardName', cardName);
        if (cardImage) {
            formData.append('cardImageName', cardImage);
        }

        try {
            const response = await fetch(`${config.apiUrl}card`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${checkToken}`, // Replace with actual token
                    'Content-Type': 'application/json',       // Add Content-Type header
                },
            });

            const result = await response.json();
            if (result.status) {
                toast.success(result.message);
                // Navigate to /admin/cards after successful submission
                setTimeout(() => {
                    navigate('/admin/cards');
                }, 3000);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error adding card:', error);
            toast.error('An error occurred while adding the card.');
        }
    };

    return (
        <>
        <Toaster/>
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
                <div className='form-data me-md-5'>
                    <h2 className='dash-heading mb-md-4'>
                        Add Card
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
                                        onChange={handleCardNameChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-2">
                            <Form.Label>Card Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={handleCardImageChange}
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

export default AddCard;
