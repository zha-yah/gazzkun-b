import React from 'react';
import './Arrivals.css';
import arrowLeft from '../../../assets/arrowLeft.png';
import arrowRight from '../../../assets/arrowRight.png';
import itemTemp2 from '../../../assets/itemTemp-2.png';

const Arrivals = () => (
  <>
    <div className='title'>New Arrivals</div>
    <img src={arrowLeft} alt='arrowLeft' className='arrow-left-a' />
    <img src={itemTemp2} alt='itemTemp2' className='item1-container' />
    <div className='item1-description'>Name of Product $Price Of Product Category of Product</div>
    <img src={itemTemp2} alt='itemTemp2' className='item2-container' />
    <div className='item2-description'>Name of Product $Price of Product Category of Product</div>
    <img src={itemTemp2} alt='itemTemp2' className='item3-container' />
    <div className='item3-description'>Name of Product $Price of Product Category of Product</div>
    <img src={itemTemp2} alt='itemTemp2' className='item4-container' />
    <div className='item4-description'>Name of Product $Price of Product Category of Product</div>
    <img src={itemTemp2} alt='itemTemp2' className='item5-container' />
    <div className='item5-description'>Name of Product $Price of Product Category of Product</div>
    <img src={arrowRight} alt='arrowRight1' className='arrow-right-a' />
  </>
);

export default Arrivals;