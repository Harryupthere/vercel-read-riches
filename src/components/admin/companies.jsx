import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import config from "../../config"
import toast, { Toaster } from "react-hot-toast";


function Companies() {

    const navigate = useNavigate();

    const checkToken = localStorage.getItem("token")
    if (!checkToken) {
        const checkRole = localStorage.getItem("role")

        if (checkRole && checkRole == 0) {
            navigate(`${config.baseUrl}`)
        }

    }

    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch companies data from the API
    const fetchCompanies = async () => {
        try {
            const response = await fetch(`${config.apiUrl}company`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${checkToken}` // Replace with actual token
                }
            });

            const result = await response.json();
            if (response.ok) {
                setCompanies(result.data);
            } else {
                toast.error(result.message || 'Failed to fetch companies.');
            }
        } catch (error) {
            console.error('Error fetching companies:', error);
            toast.error('An error occurred while fetching companies.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    if (loading) {
        return (
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
                <h2 className='dash-heading'>Companies</h2>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
        <Toaster/>
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-md-5 p-1 content'>
              
                <div className='d-flex justify-content-between mb-3'>
                <h2 className='dash-heading'>
                    Companies
                </h2>
                    <Link to={`${config.baseUrl}admin/add-company`}>
                        <button type='button' className='theme-btn'>Add company</button>
                    </Link>
                </div>
                <div className='user-table'>
                    <table className='theme-table mt-md-3 w-100'>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Company Name</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Company Unique Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(companies)}
                            {companies.length > 0 ? (
                                companies.map((company, index) => (
                                    <tr key={company._id}>
                                        <td>{index + 1}</td>
                                        <td>{company.company_name}</td>
                                        <td>{company.title}</td>
                                        <td>{company.category.categoryName}</td>
                                        <td>{new Date(company.created_at).toLocaleDateString()}</td>
                                        <td>{new Date(company.updated_at).toLocaleDateString()}</td>
                                        <td>{company.company_unique_id}</td>
                                        <td><Link to={`/admin/update-company/${company.company_unique_id}`}><button >Update</button></Link></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">No companies found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Companies;
