/* eslint-disable react/jsx-no-duplicate-props */
import React, {useEffect} from 'react'
import { NavLink as Link, NavLink, Route, Router, Routes } from "react-router-dom";
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
    <NavLink to='/tempItemPage2' activeStyle>
      <span className='cat-desc-1' style={{"display": "block"}}>
        Name of Product $Price Of Product Category of Product
      </span>
		</NavLink>
    <img src={itemTemp3} alt='itemTemp3' className='cat-box-2' />
    <NavLink to='/tempItemPage2' activeStyle>
      <span className='cat-desc-2' style={{"display": "block"}}>
        Name of Product $Price Of Product Category of Product
      </span>
		</NavLink>
    <img src={itemTemp3} alt='itemTemp3' className='cat-box-3' />
    <NavLink to='/tempItemPage2' activeStyle>
      <span className='cat-desc-3' style={{"display": "block"}}>
        Name of Product $Price Of Product Category of Product
      </span>
		</NavLink>
    <img src={itemTemp3} alt='itemTemp3' className='cat-box-4' />
    <NavLink to='/tempItemPage2' activeStyle>
      <span className='cat-desc-4' style={{"display": "block"}}>
        Name of Product $Price Of Product Category of Product
      </span>
		</NavLink>
    <img src={itemTemp3} alt='itemTemp3' className='cat-box-5' />
    <NavLink to='/tempItemPage2' activeStyle>
      <span className='cat-desc-5' style={{"display": "block"}}>
        Name of Product $Price Of Product Category of Product
      </span>
		</NavLink>
    <img src={arrowRight} alt='arrowRight1' className='arrow-right-c'/>
    
    </>
  )
}

export default categoryExt