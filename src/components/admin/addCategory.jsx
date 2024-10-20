import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import { toast, Toaster } from 'react-hot-toast';
import Sidebar from './sidebar'; // Assuming you have a Sidebar component
import config from '../../config'; // Adjust the import path for your config

function AddCategory() {
    const navigate = useNavigate();
    const checkToken = localStorage.getItem("token");

    if (!checkToken) {
        const checkRole = localStorage.getItem("role");
        if (checkRole && checkRole == 0) {
            navigate("/");
        }
    }

    const [cardName, setCardName] = useState('');
    const [categoryIcon, setCategoryIcon] = useState(null); // State to handle file input

    const handleCardNameChange = (e) => setCardName(e.target.value);
    const handleIconChange = (e) => setCategoryIcon(e.target.files[0]); // Handle file input

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Using FormData to send both text and file data
        let formData = new FormData();
        formData.append('categoryName', cardName);
        formData.append('categoryIcon', categoryIcon); // Append file

        try {
            const response = await fetch(`${config.apiUrl}category`, {
                method: 'POST',
                body: formData, // Sending form data
                headers: {
                    'Authorization': `Bearer ${checkToken}`, // Replace with actual token
                },
            });

            const result = await response.json();
            if (result.status) {
                toast.success(result.message);
                // Navigate to /admin/category after successful submission
                setTimeout(() => {
                    navigate('/admin/category');
                }, 3000);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error adding category:', error);
            toast.error('An error occurred while adding the category.');
        }
    };

    return (
        <>
            <Toaster />
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
                <div className='form-data me-md-5'>
                    <h2 className='dash-heading mb-md-4'>
                        Add Category
                    </h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Category Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Category Name"
                                        value={cardName}
                                        onChange={handleCardNameChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Category Icon</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept=".svg,.png,.jpg,.jpeg" // Restricting to specific file types
                                        onChange={handleIconChange}
                                        required
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

export default AddCategory;
