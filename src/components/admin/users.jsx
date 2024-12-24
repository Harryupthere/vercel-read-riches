import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import config from "../../config"
function Users() {
    const navigate = useNavigate();

       const checkToken = localStorage.getItem("token")
   if(!checkToken){
    const checkRole = localStorage.getItem("role")

    if(checkRole && checkRole==0){
        navigate(`${config.baseUrl}`)
    }

   }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        const fetchUsers = async () => {
            try {
                await fetch(`${config.apiUrl}users`, {
                    method: 'GET',
                    headers: {
                         'Authorization': `Bearer ${checkToken}`
                    },
                }).then(response => response.json())
                .then(data => {
                  if(data.status){
                    setUsers(data.data)
                  }}).catch((error) => {
                    console.error('Error:', error);
                    toast.error(error.message?error.message:error)
                    // Handle error (e.g., display error message)
                  });

               
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <Sidebar />
            <div style={{ backgroundColor: "#FAFAFA"}} className='p-lg-5 p-2 content'>
                <h2 className='dash-heading'>
                    Users
                </h2>
                <div className='user-table'>
                    <table className='theme-table mt-md-5 w-100'>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Joining Date</th>
                                <th>User Type</th>
                                <th>Card Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{new Date(user.createAt).toLocaleDateString()}</td>
                                        <td>{user.userType === 1 ? 'Normal User' : 'Paid User'}</td>
                                        <td>{user.cardName || 'N/A'}</td>
                                        <td>{user.verified ? 'Verified' : 'Not Verified'}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No users found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Users;
