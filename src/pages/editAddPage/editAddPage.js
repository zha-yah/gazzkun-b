import React from 'react';
import './editAddPage.css';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import plusIcon from '../../assets/addIcon.png';

const editAddPage = () => {
  return (
    <>
      <Navbar/>
      <div className='eap-image-bg'/>
      <div className='eap-pict1'/>
      <div className='eap-pict2'/>
      <div className='eap-pict3'/>
      <div className='eap-pict4'/>
      <img src={plusIcon} alt='plusIcon'className='eap-plusicon'/>
      <div className='eap-image-content'>Add/Edit Image</div>
      <div className='eap-name-bg-long'/>
      <div className='eap-name-bg'/>
      <div className='eap-name-content'>Add/Edit Name</div>
      <input type="text" placeholder="Enter Name" className='eap-name-bg-long-txt'>
      </input>
      <div className='eap-desc-bg'/>
      <div className='eap-desc-title-bg'/>
      <div className='eap-desc-title-txt'>Add/Edit Product Description</div>
      <textarea rows="5" cols="60" type="text" placeholder="Enter Product Description" className='eap-desc-txt'>
      </textarea>
      <div className='cate-1'/>
      <div className='cate-2'/>
      <div className='cate-3'/>
      <div className='cate-4'/>
      <div className='cate-5'/>
      <div className='cate-6'/>
      <div className='cate-7'/>
      <div className='cate-8'/>
      <div className='cate-9'/>
      <div className='cate-10'/>
      <div className='cate-11'/>
      <div className='cate-12'/>
      <div className='eap-anime1'>Fashion</div>
      <div className='eap-anime2'>Cosplay</div>
      <div className='eap-anime3'>Accesories</div>
      <div className='eap-anime4'>Figma</div>
      <div className='eap-anime5'>Nendoroid</div>
      <div className='eap-anime6'>PVC Figure</div>
      <div className='eap-anime7'>Model Kit</div>
      <div className='eap-anime8'>Plushies</div>
      <div className='eap-anime9'>EN Light Novel</div>
      <div className='eap-anime10'>EN Manga</div>
      <div className='eap-anime11'>JP Light Novel</div>
      <div className='eap-anime12'>JP Manga</div>
      <div className='eap-cate-bg'/>
      <div className='eap-cate-content'>Choose Category</div>
      <div className='eap-price-bg-long'/>
      <div className='eap-rp-bg'/>
      <div className='eap-rp-content'>Rp</div>
      <div className='eap-price-bg'/>
      <div className='eap-price-content'>Add/Edit Price</div>
      <input type="text" placeholder="Enter Price" className='eap-price-bg-long-txt'>
      </input>
      <div className='eap-discard-bg'/>
      <Link to='/UserPage' activeStyle>
        <div className='eap-discard-content'>Discard changes</div>
      </Link>
      <div className='eap-save-bg'/>
      <Link to='/UserPage' activeStyle>
        <div className='eap-save-content'>Save changes</div>
      </Link>
      <Footer/>
    </>
  );
};

export default editAddPage;