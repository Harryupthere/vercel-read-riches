import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import config from "../../config"
import { Link } from 'react-router-dom';

function Category() {
    const navigate = useNavigate();

    const checkToken = localStorage.getItem("token")
    if (!checkToken) {
        const checkRole = localStorage.getItem("role")

        if (checkRole && checkRole == 0) {
            navigate(`${config.baseUrl}`)
        }

    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            await fetch(`${config.apiUrl}category`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${checkToken}`
                },
            }).then(response => response.json())
                .then(data => {
                    if (data.status) {
                        setUsers(data.data)
                    }
                }).catch((error) => {
                    console.error('Error:', error);
                    toast.error(error.message ? error.message : error)
                    // Handle error (e.g., display error message)
                });


        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };


    return (
        <>
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
               
                <div className='d-flex justify-content-between mb-2'>
                <h2 className='dash-heading'>
                    Cards
                </h2>
                    <Link to={`${config.baseUrl}admin/add-category`}>
                        <button type='button' className='theme-btn'>Add category</button>
                    </Link>
                </div>
                <div className='user-table'>
                    <table className='theme-table mt-md-5 w-100'>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Category Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.categoryName}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No category found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Category;
