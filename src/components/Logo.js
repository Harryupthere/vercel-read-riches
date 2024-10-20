import React from 'react';
// import logo1 from '../components/img/white_read.png'
import logo2 from '../components/img/logoLatest.svg'
import { Link } from 'react-router-dom';
import config from '../config';

// import {useLocation } from 'react-router-dom';

const Logo = ({scrolling}) => {
  // const location = useLocation();
  return (
    <div className="logo">
      <Link to='/'>
      <img src={logo2} alt='Logo' width={100}  id='logo'/>
      </Link>
    </div>
  );
}

export default Logo;
