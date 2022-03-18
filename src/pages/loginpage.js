import React from 'react';
import './loginpage.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const loginpage = () => {
  return (
    <>
      <Navbar/>
      <div className='login-bg'/>
      <div className='yeet-1-txt'>Join the marketplace!</div>
      <div className='yeet-2-txt'>Join GAZZ-Kun!</div>
      <div className='normal-signin-bg'/>
      <div className='normal-signin'>Sign In</div>
      <div className='google-signin-bg'/>
      <div className='google-signin'>Sign In with google</div>
      <div className='user-bg'/>
      <input type="text" placeholder="Enter username" className='user-txt'>
      </input>
      <div className='user-title'>Username</div>
      <div className='forgor'>Forgor password?</div>
      <div className='pass-bg'/>
      <input type="text" placeholder="Enter password" className='pass-txt'>
      </input>
      <div className='pass-title'>Password</div>
      <Footer/>
    </>
  )
}

export default loginpage;