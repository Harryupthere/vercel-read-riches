import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import config from "../../config"
import { Link } from 'react-router-dom';

function Cards() {
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
            await fetch(`${config.apiUrl}card`, {
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
    const updateCardStatus=async(e,id)=>{
        e.preventDefault()
        try{
            await fetch(`${config.apiUrl}changeCardStatus/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${checkToken}`
                },
            }).then(response => response.json())
                .then(data => {
                    if(data.status){
                        toast.success(data.message)
                        fetchUsers()
                    }else{
                        toast.error(data.message)
                    }

                }).catch((error) => {
                    console.error('Error:', error);
                    toast.error(error.message ? error.message : error)
                    // Handle error (e.g., display error message)
                });
        }catch(error){

        }
    }


    return (
        <>
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-lg-5 p-2 content'>
               
                <div className='d-flex justify-content-between mb-2'>
                <h2 className='dash-heading'>
                    Cards
                </h2>
                    <Link to={`${config.baseUrl}admin/add-card`}>
                        <button type='button' className='theme-btn'>Add card</button>
                    </Link>
                </div>
                <div className='user-table'>
                    <table className='theme-table mt-md-5 w-100'>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Card Name</th>
                                <th>Action</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.cardName}</td>
                                        <td> <Link to={`/admin/update-card/${user._id}`}><button>Update</button></Link></td>
                                        <td>{user.status?<button onClick={(e)=>{updateCardStatus(e,user._id)}}>Deactivate</button>:<button onClick={(e)=>{updateCardStatus(e,user._id)}}>Activate</button>}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No cards found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Cards;
