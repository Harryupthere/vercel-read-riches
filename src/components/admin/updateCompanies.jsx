import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import config from "../../config"
import toast, { Toaster } from "react-hot-toast";
import { useParams } from 'react-router-dom';

function UpdateCompany({ match }) {
    const navigate = useNavigate();

    const checkToken = localStorage.getItem("token")
    if (!checkToken) {
        const checkRole = localStorage.getItem("role")

        if (checkRole && checkRole == 0) {
            navigate(`${config.baseUrl}`)
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
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Get cardId from URL params

    useEffect(() => {
        async function fetchCompanyData() {
            try {
                const response = await fetch(`${config.apiUrl}company/${id}`, {
                    method: 'GET',
                    headers: {
                         'Authorization': `Bearer ${checkToken}`
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setCompanyName(data.data.company_name);
                    setTitle(data.data.title);
                    //setCategory(data.data.category);
                    setFirstColor(data.data.first_color);
                    setSecondColor(data.data.second_color);
                    

                } else {
                    console.error('Failed to fetch company data:', response.statusText);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching company data:', error);
                setLoading(false);
            }
        }

        fetchCompanyData();
    }, [id]);


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


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('company_name', companyName);
            formData.append('title', title);
            formData.append('category', categoryName);
            formData.append('first_color', firstColor);
            formData.append('second_color', secondColor);
            formData.append('company_unique_id', id);

            if (mainImage) formData.append('mainimage', mainImage);
            if (logoImage) formData.append('logoimage', logoImage);
            if (excelFile) formData.append('file', excelFile);

            const response = await fetch(`${config.apiUrl}company`, {
                method: 'PUT',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${checkToken}`

                },
            });
            const data = await response.json();
            if (response.ok) {
                
                toast.success(data.message);
                setTimeout(() => {
                    navigate(`${config.baseUrl}admin/companies`);
                }, 3000);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error updating company:', error);
            toast.error('Error updating company');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <>
        <Toaster/>
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
                <div className='form-data me-md-5'>
                    <h2 className='dash-heading mb-md-4'>
                        Update Company
                    </h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-2">
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
                                <Form.Group className="mb-2">
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
                                <Form.Group className="mb-2">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select
                                        onChange={(e) => setCategoryName(e.target.value)} // Update category on change
                                    >
                                        <option value="">Select Category</option> 
                                        {category.length>0 && category.map((cat, index) => (
                                            <option key={index} value={cat._id}>
                                                {cat.categoryName}  
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
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
                                <Form.Group className="mb-2">
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
                        <Form.Group className="mb-2">
                            <Form.Label>Main Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => handleFileChange(e, setMainImage)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Logo Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => handleFileChange(e, setLogoImage)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
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

export default UpdateCompany;
