import React from 'react';
import './ItemStatusPage.css';
import { Link } from "react-router-dom";
import itemTemp3 from '../../assets/itemTemp-3-1x1.png';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import OtwIcon from '../../assets/OtwIcon.png';

const ItemStatusPage2 = () => {
  return (
    <>
      <Navbar/>
        <Link to='/tempItemPage2' activeStyle>
          <div className='sp-name'>Name of product</div>
        </Link>
        <div className='sp-eta-title'>ETA:</div>
        <div className='sp-eta-content'>17 June 2022 -  19 June 2022</div>
        <div className='sp-sendto-title'>Sending to:</div>
        <div className='sp-sendto-content'>321 Street Avenue</div>
        <div className='sp-status-txt'>Status:</div>
        <img src={itemTemp3} alt='itemTemp3' className='sp-main-img'/>
        <div className='sp-return-bg'/>
        <Link to='/UserPage' activeStyle>
          <div className='sp-return-txt'>Return to Orders</div>
        </Link>
        <img src={OtwIcon} alt='OtwIcon' className='sp-stat-icon'/>
      <Footer/>
    </>
  );
};

export default ItemStatusPage2;