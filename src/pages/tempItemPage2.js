import React from 'react';
import './tempItemPage.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import arrowDownIcon from '../assets/arrowDown.png';
import arrowUpIcon from '../assets/arrowUp.png';
import item3Temp1x1 from '../assets/itemTemp-3-1x1.png';

const tempItemPage2 = () => {
  return (
    <>
      <Navbar/>
      <div className='temp-name'>Name of Product</div>
      <div className='temp-price'>$Price Of Product</div>
      <div className='temp-category'>Category of Product</div>
      <img src={item3Temp1x1} alt='item3Temp1x1' className='temp-item-main'/>
      <img src={item3Temp1x1} alt='item3Temp1x1' className='temp-item-top'/>
      <img src={item3Temp1x1} alt='item3Temp1x1' className='temp-item-mid'/>
      <img src={item3Temp1x1} alt='item3Temp1x1' className='temp-item-bot'/>
      <img src={arrowDownIcon} alt='arrowDownIcon' className='temp-arrow-down'/>
      <img src={arrowUpIcon} alt='arrowDownIcon' className='temp-arrow-up'/>
      <div className='temp-cart-bg'/>
      <div className='temp-cart-content'>Add to cart</div>
      <div className='temp-wishlist-bg'/>
      <div className='temp-wishlist-content'>Add to wishlist</div>
      <Footer/>
    </>
  );
};

export default tempItemPage2;