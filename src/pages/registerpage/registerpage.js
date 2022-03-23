import React from 'react';
import './registerpage.css'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import testPP from '../../assets/userIcon.png';

const registerpage = () => {
  return (
    <>
      <Navbar/>
      <div className='reg-page-bg'/>
      <div className='reg-register-bg'/>
      <Link to='/login' activeStyle>
        <div className='reg-register-title'>Register</div>
      </Link>
      <div className='reg-desc-bg'/>
      <div className='reg-desc-title'>Description</div>
      <textarea rows="5" cols="60" type="text" placeholder="tell us a bit about you..." className='reg-desc-txt'>
      </textarea>
      <img img src={testPP} alt='testPP' className='reg-pic-frame'></img>
      <div className='reg-uppic-bg'/>
      <div className='reg-uppic-title'>Upload picture</div>
      <div className='reg-deladd-bg'/>
      <div className='reg-deladd-title'>Delivery Address</div>
      <input type="text" placeholder="ex. 123 Street Avaenue" className='reg-deladd-txt'>
      </input>
      <div className='reg-stoadd-bg'/>
      <div className='reg-stoadd-title'>Store Address</div>
      <input type="text" placeholder="ex. 123 Street Avaenue" className='reg-stoadd-txt'>
      </input>
      <div className='reg-pass-bg'/>
      <div className='reg-pass-title'>Password</div>
      <input type="text" placeholder="ex. sTr0nGp4S5WoRd132" className='reg-pass-txt'>
      </input>
      <div className='reg-user-bg'/>
      <div className='reg-user-title'>Username</div>
      <input type="text" placeholder="ex. John Doe Store" className='reg-user-txt'>
      </input>
      <Footer/>
    </>
  );
};

export default registerpage;