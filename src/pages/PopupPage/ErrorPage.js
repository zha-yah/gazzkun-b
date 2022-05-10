import React from 'react';
import './PopupPage.css';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';

const ErrorPage = () => {
  return (
    <>
      <Navbar/>
      <div className='ppp-msg-title'>An error has occurred.</div>
      <div className='ppp-retbtn-bg'/>
      <Link to='/' activeStyle>
        <div className='ppp-retbtn-txt'>Return to Homepage</div>
      </Link>
    </>
  );
};

export default ErrorPage;