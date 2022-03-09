import React from 'react'
import './Featured.css';
import arrowLeft from '../../../assets/arrowLeft.png';
import arrowRight from '../../../assets/arrowRight.png';
import itemTemp from '../../../assets/itemTemp.png';

const Featured = () => {
  return (
    <>
      <div className='featured-container'/>
      <img src={arrowLeft} alt='arrowLeft' className='arrow-left-f'/>
      <img src={itemTemp} alt='itemTemp' className='box-1'/>
      <img src={itemTemp} alt='itemTemp' className='box-2'/>
      <img src={itemTemp} alt='itemTemp' className='box-3'/>
      <img src={arrowRight} alt='arrowRight' className='arrow-right-f'/>
    </>
  )
}

export default Featured