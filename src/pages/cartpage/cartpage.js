import React from 'react';
import './cartpage.css';
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import deleteIcon from '../../assets/deleteIcon.png';
import addIcon from '../../assets/addIcon.png';
import DecreaseIcon from '../../assets/minusIcon.png';
import ItemT1 from '../../assets/itemTemp-2-1x1.png';
import ItemT2 from '../../assets/itemTemp-3-1x1.png';
import ItemT3 from '../../assets/itemTemp-4.png';

const cartpage = () => {
  return (
    <>
    <Navbar/>
    <div className='car-cart-title'>My Cart</div>

    {/* item 1 */}
    <div className='car-item1-bg'/>
    <img src={ItemT1} alt='ItemT1' className='car-item1-pic'/>
    <Link to='/tempItemPage1' activeStyle>
      <div className='car-name1-txt'>Name of Product</div>
    </Link>
    <div className='car-price1-txt'>$Price of Product</div>
    <div className='car-qty1-txt'> Item Quantity </div>
    <img src={deleteIcon} alt='deleteIcon' className='car-dele-icon1'/>
    <img src={addIcon} alt='addIcon' className='car-add-icon1'/>
    <img src={DecreaseIcon} alt='DecreaseIcon' className='car-minus-icon1'/>

    {/* item 2 */}
    <div className='car-item2-bg'/>
    <img src={ItemT2} alt='ItemT2' className='car-item2-pic'/>
    <Link to='/tempItemPage2' activeStyle>
      <div className='car-name2-txt'>Name of Product</div>
    </Link>
    <div className='car-price2-txt'>$Price of Product</div>
    <div className='car-qty2-txt'> Item Quantity </div>
    <img src={deleteIcon} alt='deleteIcon' className='car-dele-icon2'/>
    <img src={addIcon} alt='addIcon' className='car-add-icon2'/>
    <img src={DecreaseIcon} alt='DecreaseIcon' className='car-minus-icon2'/>

    {/* item 3 */}
    <div className='car-item3-bg'/>
    <img src={ItemT3} alt='ItemT3' className='car-item3-pic'/>
    <div className='car-name3-txt'>Name of Product</div>
    <div className='car-price3-txt'>$Price of Product</div>
    <div className='car-qty3-txt'> Item Quantity </div>
    <img src={deleteIcon} alt='deleteIcon' className='car-dele-icon3'/>
    <img src={addIcon} alt='addIcon' className='car-add-icon3'/>
    <img src={DecreaseIcon} alt='DecreaseIcon' className='car-minus-icon3'/>

    <div className='car-price-bg-long'/>
    <div className='car-rp-bg'/>
    <div className='car-price-bg'/>
    <div className='car-rp-txt'>Rp</div>
    <div className='car-price-txt'>Total Price</div>
    <div className='car-num-txt'>169.000</div>
    <div className='car-chckout-bg'/>
    <Link to='/checkout' activeStyle>
      <div className='car-chckout-txt'>Proceed to Checkout</div>
    </Link>
    <Footer/>
    </>
  );
};

export default cartpage;