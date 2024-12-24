import React, { useState } from 'react';
import Sidebar from './sidebar';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import config from "../../config"
import toast, { Toaster } from "react-hot-toast";

function TickerData() {
    const navigate = useNavigate();

    const checkToken = localStorage.getItem("token");
    if (!checkToken) {
        const checkRole = localStorage.getItem("role");
        if (checkRole && checkRole === "0") {
            navigate(`${config.baseUrl}`);
        }
    }

    const [tickerData, setTickerData] = useState('');

    const handleTickerDataChange = (e) => {
        setTickerData(e.target.value);  // Capture the pasted string
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${config.apiUrl}setTickerData`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${checkToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tickerData: tickerData,  // Send the raw string
                }),
            });

            const result = await response.json();
            if (result.status) {
                toast.success(result.message);
                setTimeout(() => {
                    navigate(`${config.baseUrl}admin/tickerData`); // Redirect or update after success
                }, 3000);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error saving ticker data:', error);
            toast.error('An error occurred while saving ticker data.');
        }
    };

    return (
        <>
            <Toaster />
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
                <div className='form-data me-md-5'>
                    <h2 className='dash-heading mb-md-4'>
                        Update Ticker Data
                    </h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Paste Ticker Data</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={10}
                                        placeholder="Paste your JSON here"
                                        value={tickerData}
                                        onChange={handleTickerDataChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className='d-flex justify-content-end'>
                            <button type='submit' className='theme-btn mt-4'>Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default TickerData;
