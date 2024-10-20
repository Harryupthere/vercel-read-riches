import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import config from "../../config"
import toast, { Toaster } from "react-hot-toast";

function AddCompany() {
    const navigate = useNavigate();

    const checkToken = localStorage.getItem("token")
    if (!checkToken) {
        const checkRole = localStorage.getItem("role")

        if (checkRole && checkRole == 0) {
            navigate("/")
        }

    }
    const [companyName, setCompanyName] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState([]);
    const [categoryName,setCategoryName]= useState('');
    const [firstColor, setFirstColor] = useState('');
    const [secondColor, setSecondColor] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const [logoImage, setLogoImage] = useState(null);
    const [excelFile, setExcelFile] = useState(null);

    useEffect(() => {

        getCategory()
    }, [])

    const getCategory = async () => {
        try {
            await fetch(`${config.apiUrl}category`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${checkToken}`
                },
            }).then(response => response.json())
                .then(data => {
                    if (data.status) {
                        setCategory(data.data)
                    }
                }).catch((error) => {
                    console.error('Error:', error);
                    toast.error(error.message ? error.message : error)
                    // Handle error (e.g., display error message)
                });


        } catch (error) {
            console.log(error)
        }
    }

    const handleFileChange = (event, setter) => {
        setter(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('company_name', companyName);
        formData.append('title', title);
        formData.append('category', categoryName);
        formData.append('first_color', firstColor);
        formData.append('second_color', secondColor);
        if (mainImage) formData.append('mainimage', mainImage);
        if (logoImage) formData.append('logoimage', logoImage);
        if (excelFile) formData.append('file', excelFile);

        try {
            const response = await fetch(`${config.apiUrl}company`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${checkToken}` // Replace with actual token
                }
            });

            const result = await response.json();
            if (response.ok) {
                toast.success(result.message);
                setTimeout(() => {
                    navigate('/admin/companies');
                }, 3000);
            } else {
                toast.error(result.message || 'Failed to add company.');
            }
        } catch (error) {
            console.error('Error adding company:', error);
            toast.error('An error occurred while adding the company.');
        }
    };

    return (
        <>
            <Toaster />
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
                <div className='form-data me-md-5'>
                    <h2 className='dash-heading mb-md-4'>
                        Add Company
                    </h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-md-2 mb-1">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Company Name"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-md-2 mb-1">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-md-2 mb-1">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select
                                        onChange={(e) => setCategoryName(e.target.value)} // Update category on change
                                    >
                                        <option value="">Select Category</option> {/* Default option */}
                                        {category.length>0 && category.map((cat, index) => (
                                            <option key={index} value={cat._id}>
                                                {cat.categoryName}  
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-md-2 mb-1">
                                    <Form.Label>First Color</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="First Color"
                                        value={firstColor}
                                        onChange={(e) => setFirstColor(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-md-2 mb-1">
                                    <Form.Label>Second Color</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Second Color"
                                        value={secondColor}
                                        onChange={(e) => setSecondColor(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-md-2 mb-1">
                            <Form.Label>Main Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => handleFileChange(e, setMainImage)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-md-2 mb-1">
                            <Form.Label>Logo Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => handleFileChange(e, setLogoImage)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-md-2 mb-1">
                            <Form.Label>Excel File</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => handleFileChange(e, setExcelFile)}
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

export default AddCompany;
