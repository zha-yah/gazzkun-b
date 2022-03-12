/* eslint-disable react/jsx-no-duplicate-props */
import React, {useEffect} from 'react';
import { NavLink as Link, NavLink, Route, Router, Routes } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/Logo GAZZ-Kun.png';
import searchIcon from '../../assets/searchIcon.png';
import shoppingCartIcon from '../../assets/shoppingCartIcon.png';
import Homepage from '../../pages/Homepage';
import UserPage from '../../pages/UserPage';

const Navbar = () => {
  return (
    <nav>
    <div className="topNav">
      <div className="longBar" >
        <NavLink to='/' activeStyle>
          <img src={logo} alt='Logo GAZZ-Kun' className='logoNavbar' />
          <span className="logoName" style={{"display": "block"}}>
          GAZZ-Kun!
          </span>
		    </NavLink>
        <input type="text" placeholder="Search for items" className='searchBar'>
        </input>
        <img src={searchIcon} alt='searchIcon' className='searchIcon' />
        <NavLink to='/UserPage' activeStyle>
          <span className="User" style={{"display": "block"}}>
          User
          </span>
		    </NavLink>
        <div className='SignIn'>Sign In</div>
        <img src={shoppingCartIcon} alt='shoppingCartIcon' className='shoppingCartIcon' />
      </div>
    </div>
    </nav>
  )
}

export default Navbar