import React from 'react';
import './Userinfo.css';
import tempStore from '../../../assets/tempStore.png';

const Userinfo = () => {
  return (
    <>
      <img img src={tempStore} alt='tempStore' className='usericon'></img>
      <div className='username'>Bobowl's Official Hololive Merch</div>
      <div className='userDescription'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque leo sit amet nulla consectetur volutpat. Aliquam dapibus vitae turpis id faucibus.
      </div>
      <div className='storeAdress-title'>
        Store address:
      </div>
      <div className='storeAdress-content'>
        249 Kale Trail, Apt. 729, 07734, Avahaven, Wyoming, United States
      </div>
      <div className='deliveryAddress-title'>
        Delivery address:
      </div>
      <div className='deliveryAddress-content'>
        234 Haag Well, Apt. 673, 42951, Toniville, South Dakota, United States
      </div>
    </>
  )
};

export default Userinfo;