import React from 'react';
import './tempItemPage.css'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import arrowDownIcon from '../../assets/arrowDown.png';
import arrowUpIcon from '../../assets/arrowUp.png';
import item2Temp1x1 from '../../assets/itemTemp-2-1x1.png';

const tempItemPage1 = () => {
  return (
    <>
      <Navbar/>
      <div className='temp-name'>Name of Product</div>
      <div className='temp-price'>$Price Of Product</div>
      <div className='temp-category'>Category of Product</div>
      <div className='temp-description'>Description of Product, Lorem ipsum dolor sit amet, consectetur adipisci elit. Aenean faucibus nec tortor sed volutpat. Phasellus viverra sagittis nibh, nec imperdiet enim mollis eget.</div>
      <img src={item2Temp1x1} alt='item2Temp1x1' className='temp-item-main'/>
      <img src={item2Temp1x1} alt='item2Temp1x1' className='temp-item-top'/>
      <img src={item2Temp1x1} alt='item2Temp1x1' className='temp-item-mid'/>
      <img src={item2Temp1x1} alt='item2Temp1x1' className='temp-item-bot'/>
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

export default tempItemPage1;