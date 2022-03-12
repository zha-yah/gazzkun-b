import React from 'react';
import './tempItemPage1.css'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import arrowDownIcon from '../assets/arrowDown.png';

const tempItemPage1 = () => {
  return (
    <>
      <Navbar/>
      <div className='temp1-name'>Name of Product</div>
      <div className='temp1-price'>$Price Of Product</div>
      <div className='temp1-category'>Category of Product</div>
      <div className='temp1-item-main'/>
      <div className='temp1-item-top'/>
      <div className='temp1-item-mid'/>
      <div className='temp1-item-bot'/>
      <img src={arrowDownIcon} alt='arrowDownIcon' className='temp1-arrow-down'/>
      <Footer/>
    </>
  );
};

export default tempItemPage1;