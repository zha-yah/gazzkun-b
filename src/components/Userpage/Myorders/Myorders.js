import React from 'react';
import './Myorders.css';
import arrowLeft from '../../../assets/arrowLeft.png';
import arrowRight from '../../../assets/arrowRight.png';
import itemTemp3 from '../../../assets/itemTemp-3.png';
import addIcon from '../../../assets/addIcon.png';
import editIcon from '../../../assets/editIcon.png';
import deleteIcon from '../../../assets/deleteIcon.png';

const Myorders = () => {
  return (
    <> 
      <div className='title-myOrders'>My Orders</div>
      <img src={arrowLeft} alt='arrowLeft' className='arrowLeft-myOrders' />
      {/* item 1 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-1'></img>
        <div className='itemDescription-o-1'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-o-1'/>
        <img src={editIcon} alt='editIcon'className='editIcon-o-1'/>
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-o-1'/>
      {/* item 2 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-2'></img>
        <div className='itemDescription-o-2'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-o-2'/>
        <img src={editIcon} alt='editIcon'className='editIcon-o-2'/>
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-o-2'/>
      {/* item 3 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-3'></img>
        <div className='itemDescription-o-3'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-o-3'/>
        <img src={editIcon} alt='editIcon'className='editIcon-o-3'/>
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-o-3'/>
      {/* item 4 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-4'></img>
        <div className='itemDescription-o-4'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-o-4'/>
        <img src={editIcon} alt='editIcon'className='editIcon-o-4'/>
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-o-4'/>
      {/* item 5 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-5'></img>
        <div className='itemDescription-o-5'>Name of Product $Price of Product Category of Product</div>
        <div className='itemUtil-o-5'/>
        <img src={editIcon} alt='editIcon'className='editIcon-o-5'/>
        <img src={deleteIcon} alt='deleteIcon'className='deleteIcon-o-5'/>
      <img src={arrowRight} alt='arrowRight' className='arrowRight-myOrders' />
    </>
  )
};

export default Myorders;