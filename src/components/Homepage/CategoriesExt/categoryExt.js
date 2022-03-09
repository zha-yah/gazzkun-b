import React from 'react'
import './categoryExt.css';
import arrowLeft from '../../../assets/arrowLeft.png';
import arrowRight from '../../../assets/arrowRight.png';
import itemTemp3 from '../../../assets/itemTemp-3.png';

const categoryExt = () => {
  return (
    <>
    <div className='category-ext-container'/>
    <div className='category-title'>Anime</div>
    <img src={arrowLeft} alt='arrowLeft' className='arrow-left-c' />
    <img src={itemTemp3} alt='itemTemp3' className='cat-box-1' />
    <div className='cat-desc-1'>Name of Product $Price Of Product Category of Product</div>
    <img src={itemTemp3} alt='itemTemp3' className='cat-box-2' />
    <div className='cat-desc-2'>Name of Product $Price of Product Category of Product</div>
    <img src={itemTemp3} alt='itemTemp3' className='cat-box-3' />
    <div className='cat-desc-3'>Name of Product $Price of Product Category of Product</div>
    <img src={itemTemp3} alt='itemTemp3' className='cat-box-4' />
    <div className='cat-desc-4'>Name of Product $Price of Product Category of Product</div>
    <img src={itemTemp3} alt='itemTemp3' className='cat-box-5' />
    <div className='cat-desc-5'>Name of Product $Price of Product Category of Product</div>
    <img src={arrowRight} alt='arrowRight1' className='arrow-right-c'/>
    
    </>
  )
}

export default categoryExt