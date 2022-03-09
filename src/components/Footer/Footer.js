import React from 'react';
import './Footer.css';
import logo from '../../assets/Logo GAZZ-Kun.png';

const Footer = () => {
  return (
    <>
      <div className='footerContainer'></div>
      <div className='faq'>FAQ/Help</div>
      <div className='feedback'>Feedback Form</div>
      <div className='contactus'>Contact us!</div>
      <div className='tos'>Terms of Service</div>
      <div className='pol'>Privacy and Policies</div>
      <div className='useful'>Useful Links</div>
      <img src={logo} alt='Logo GAZZ-Kun' className='logoFooter'/>
    </>
  )
};

export default Footer;