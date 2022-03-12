/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from "react-router-dom";
import './Arrivals.css';
import arrowLeft from '../../../assets/arrowLeft.png';
import arrowRight from '../../../assets/arrowRight.png';
import itemTemp2 from '../../../assets/itemTemp-2.png';

const Arrivals = () => {
  return (
    <>
      <div className='title'>New Arrivals</div>
      <img src={arrowLeft} alt='arrowLeft' className='arrow-left-a' />
      <img src={itemTemp2} alt='itemTemp2' className='item1-container' />
      <Link to='/tempItemPage1' activeStyle>
        <span className='item1-description' style={{"display": "block"}}>
          Name of Product $Price Of Product Category of Product
        </span>
      </Link>
      <img src={itemTemp2} alt='itemTemp2' className='item2-container' />
      <Link to='/tempItemPage1' activeStyle>
        <span className='item2-description' style={{"display": "block"}}>
          Name of Product $Price Of Product Category of Product
        </span>
      </Link>
      <img src={itemTemp2} alt='itemTemp2' className='item3-container' />
      <Link to='/tempItemPage1' activeStyle>
        <span className='item3-description' style={{"display": "block"}}>
          Name of Product $Price Of Product Category of Product
        </span>
      </Link>
      <img src={itemTemp2} alt='itemTemp2' className='item4-container' />
      <Link to='/tempItemPage1' activeStyle>
        <span className='item4-description' style={{"display": "block"}}>
          Name of Product $Price Of Product Category of Product
        </span>
      </Link>
      <img src={itemTemp2} alt='itemTemp2' className='item5-container' />
      <Link to='/tempItemPage1' activeStyle>
        <span className='item5-description' style={{"display": "block"}}>
          Name of Product $Price Of Product Category of Product
        </span>
      </Link>
      <img src={arrowRight} alt='arrowRight1' className='arrow-right-a' />
    </>
  )
};

export default Arrivals;