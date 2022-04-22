import React from 'react';
import './CheckoutPage.css';
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const CheckoutPage = () => {
  const [ValueAddr, setValueAddr] = React.useState('');
  const handleChangeAddr = (event) => {
    setValueAddr(event.target.value);
  };
  const [ValueShip, setValueShip] = React.useState('');
  const handleChangeShip = (event) => {
    setValueShip(event.target.value);
  };
  return (
    <>
      <Navbar/>
      <div className='chk-title'>Checkout details</div>

      {/*
        NOTICE.
        The implementations done below are all hard coded
      */}

      {/* Dropdown for address*/}
      <select value={ValueAddr} onChange={handleChangeAddr} className='chk-sel-addr-dropdown'>
        <option value="addrtemp" selected hidden></option>
        <option value="addr1">Jl. Bintaro Utama No. 4</option>
        <option value="addr2">Jl. Pamulang Raya No. 13</option>
        <option value="addr3">Jl. Margasatwa No. 45</option>
      </select>

      {/* Dropdown for address*/}
      <select value={ValueShip} onChange={handleChangeShip} className='chk-ship-dropdown'>
        <option value="shiptemp" selected hidden></option>
        <option value="30000">GoSend | Same day | Rp 30.000</option>
        <option value="10000">JNE | 2-4 days | Rp 10.000</option>
        <option value="5000">SendXYZ | 5-7 days | Rp 5.000</option>
      </select>
      
      <div className='chk-tot-price-bg-long'/>
      <div className='chk-tot-rp-bg'/>
      <div className='chk-tot-price-bg'/>
      <div className='chk-tot-rp-txt'>Rp</div>
      <div className='chk-tot-price-txt'>Total Price</div>
      <div className='chk-tot-num-txt'>{parseInt(ValueShip)+159000}</div>

      <div className='chk-deli-bg-long'/>
      <div className='chk-deli-rp-bg'/>
      <div className='chk-deli-bg'/>
      <div className='chk-deli-rp-txt'>Rp</div>
      <div className='chk-deli-price-txt'>Delivery</div>
      <div className='chk-deli-num-txt'>{ValueShip}</div>

      <div className='chk-price-bg-long'/>
      <div className='chk-rp-bg'/>
      <div className='chk-price-bg'/>
      <div className='chk-rp-txt'>Rp</div>
      <div className='chk-price-txt'>Price</div>
      <div className='chk-num-txt'>159000</div>

      <div className='chk-pay-bg'/>
      <div className='chk-pay-txt'>Proceed to Payment</div>
      <div className='chk-cart-bg'/>
      <Link to='/cart' activeStyle> 
        <div className='chk-cart-txt'>Return to Cart</div>
      </Link>

      <div className='chk-sel-addr-txt'>Select Address</div>
      <div className='chk-add-addr-txt'>Add New Address</div>
      <div className='chk-add-addr-bg'/>
      <input type="text" placeholder="ex. 123 Street Avaenue" className='chk-add-addr-type'>
      </input>
      <div className='chk-save-addr-bg'/>
      <div className='chk-save-addr-txt'>Save Address</div>
      <div className='chk-ship-txt'>Select Shipping Plan</div>

      <Footer/>
    </>
  );
};
export default CheckoutPage;