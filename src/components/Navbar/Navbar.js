import React, {useEffect} from 'react';
import './Navbar.css';
import logo from '../../assets/Logo GAZZ-Kun.png';
import searchIcon from '../../assets/searchIcon.png';
import shoppingCartIcon from '../../assets/shoppingCartIcon.png';

const Navbar = () => {
  return (
    <div className="topNav">
      <div className="longBar">
      <img src={logo} alt='Logo GAZZ-Kun' className='logoNavbar'/>
      <div className='logoName'>GAZZ-Kun!</div>
      <input type="text" placeholder="Search for items" className='searchBar'>
      </input>
      <img src={searchIcon} alt='searchIcon' className='searchIcon'/>
      <div className='signIn'>Sign In</div>
      <img src={shoppingCartIcon} alt='shoppingCartIcon' className='shoppingCartIcon'/>
      </div>
    </div>
  )
}

export default Navbar