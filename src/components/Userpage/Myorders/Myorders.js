import React from 'react';
import './Myorders.css';
import { Link } from "react-router-dom";
import arrowLeft from '../../../assets/arrowLeft.png';
import arrowRight from '../../../assets/arrowRight.png';
import itemTemp3 from '../../../assets/itemTemp-3.png';
import OtwIcon from '../../../assets/OtwIcon.png';
import PaidIcon from '../../../assets/PaidIcon.png';
import ReceivedIcon from '../../../assets/ReceivedIcon.png';
import ProcPayIcon from '../../../assets/ProcPayIcon.png';



const Myorders = () => {
  return (
    <> 
      <div className='title-myOrders'>My Orders</div>
      <img src={arrowLeft} alt='arrowLeft' className='arrowLeft-myOrders' />

      {/* item 1 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-1'></img>
        <Link to='/tempItemPage2' activeStyle>
          <div className='itemDescription-o-1'>Name of Product $Price of Product Category of Product</div>
        </Link>
        <div className='itemUtil-o-1'/>
        <Link to='/ItemStatus1' activeStyle>
          <img src={ReceivedIcon} alt='InfoIcon'className='statIcon-o-1'/>
        </Link>

      {/* item 2 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-2'></img>
        <Link to='/tempItemPage2' activeStyle>
          <div className='itemDescription-o-2'>Name of Product $Price of Product Category of Product</div>
        </Link>
        <div className='itemUtil-o-2'/>
        <Link to='/ItemStatus1' activeStyle>
          <img src={ReceivedIcon} alt='InfoIcon'className='statIcon-o-2'/>
        </Link>

      {/* item 3 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-3'></img>
        <Link to='/tempItemPage2' activeStyle>
          <div className='itemDescription-o-3'>Name of Product $Price of Product Category of Product</div>
        </Link>
        <div className='itemUtil-o-3'/>
        <Link to='/ItemStatus2' activeStyle>
          <img src={OtwIcon} alt='InfoIcon'className='statIcon-o-3'/>
        </Link>

      {/* item 4 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-4'></img>
        <Link to='/tempItemPage2' activeStyle>
          <div className='itemDescription-o-4'>Name of Product $Price of Product Category of Product</div>
        </Link>
        <div className='itemUtil-o-4'/>
        <Link to='/ItemStatus3' activeStyle>
          <img src={PaidIcon} alt='InfoIcon'className='statIcon-o-4'/>
        </Link>

      {/* item 5 */}
        <img src={itemTemp3} alt='itemTemp' className='itemPicture-o-5'></img>
        <Link to='/tempItemPage2' activeStyle>
          <div className='itemDescription-o-5'>Name of Product $Price of Product Category of Product</div>
        </Link>
        <div className='itemUtil-o-5'/>
        <Link to='/ItemStatus4' activeStyle>
          <img src={ProcPayIcon} alt='InfoIcon'className='statIcon-o-5'/>
        </Link>

      <img src={arrowRight} alt='arrowRight' className='arrowRight-myOrders' />
    </>
  )
};

export default Myorders;