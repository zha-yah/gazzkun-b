/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from "react-router-dom";
import './Mylisting.css';
import arrowLeft from '../../../assets/arrowLeft.png';
import arrowRight from '../../../assets/arrowRight.png';
import itemTemp4 from '../../../assets/itemTemp-4.png';
import addIcon from '../../../assets/addIcon.png';
import editIcon from '../../../assets/editIcon.png';
import deleteIcon from '../../../assets/deleteIcon.png';

const Mylisting = () => {
  return (
    <> 
      <div className='title-itemlisting'>My Item Listing</div>
      <img src={arrowLeft} alt='arrowLeft' className='arrowLeft-itemlisting' />
      {/* item 1 */}
        <img src={itemTemp4} alt='itemTemp4' className='itemPicture-1'></img>
        <div className='itemDescrition-1'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-1'/>
        <Link to='/addOrEdit' activeStyle>
            <img src={addIcon} alt='addIcon' className='addIcon-1'/>  
            <img src={editIcon} alt='editIcon'className='editIcon-1'/>        
        </Link>
        
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-1'/>
      {/* item 2 */}
        <img src={itemTemp4} alt='itemTemp4' className='itemPicture-2'></img>
        <div className='itemDescrition-2'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-2'/>
        <Link to='/addOrEdit' activeStyle>
            <img src={addIcon} alt='addIcon' className='addIcon-2'/> 
            <img src={editIcon} alt='editIcon'className='editIcon-2'/>         
        </Link>
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-2'/>
      {/* item 3 */}
        <img src={itemTemp4} alt='itemTemp4' className='itemPicture-3'></img>
        <div className='itemDescrition-3'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-3'/>
        <Link to='/addOrEdit' activeStyle>
            <img src={addIcon} alt='addIcon' className='addIcon-3'/>
            <img src={editIcon} alt='editIcon'className='editIcon-3'/>          
        </Link>
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-3'/>
      {/* item 4 */}
        <img src={itemTemp4} alt='itemTemp4' className='itemPicture-4'></img>
        <div className='itemDescrition-4'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-4'/>
        <Link to='/addOrEdit' activeStyle>
            <img src={addIcon} alt='addIcon' className='addIcon-4'/>
            <img src={editIcon} alt='editIcon'className='editIcon-4'/>          
        </Link>
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-4'/>
      {/* item 5 */}
        <img src={itemTemp4} alt='itemTemp4' className='itemPicture-5'></img>
        <div className='itemDescrition-5'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-5'/>
        <Link to='/addOrEdit' activeStyle>
            <img src={addIcon} alt='addIcon' className='addIcon-5'/>
            <img src={editIcon} alt='editIcon'className='editIcon-5'/>          
        </Link>
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-5'/>
      <img src={arrowRight} alt='arrowRight' className='arrowRight-itemlisting' />
    </>
  )
};

export default Mylisting;