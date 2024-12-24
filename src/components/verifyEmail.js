import React, { useState, useEffect, useContext } from 'react'
import "../components/css/Login.css"
import { useParams, useNavigate } from 'react-router-dom';
import loginsvg from '../components/img/loginsvg.svg';
import toast, { Toaster } from "react-hot-toast";
import config from '../config';

export default function VerifyEmail() {

  const navigate = useNavigate();
  const { token } = useParams();
  const [manageStatus, setManageStatus] = useState(false)
  useEffect(() => {
    // Automatically trigger the email verification when the component mounts
    console.log({token})
    if (token) {
      fetch(`${config.apiUrl}verifyEmail/${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          setManageStatus(data.status);

          setTimeout(() => {
            navigate(`${config.baseUrl}login`);
          }, 3000);
        })
        .catch((error) => {
          console.error('Error:', error);
          setManageStatus(false);
        });
    }
  }, [token]);
  return (
    <><Toaster />

      <main className='loginmain'>
        <div className='loginleftimg'>
          <img src={loginsvg} alt="login" />
        </div>
        {manageStatus ? <div className='loginright'>
          <h1>Congractulations you email has been verified. You can login now.</h1>
        </div> :
          <div className='loginright'>
            <h1>Invalid token. Please register again</h1>
          </div>}
      </main>
    </>
  )
}