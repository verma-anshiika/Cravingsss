
import React, { useState } from 'react';
import'./Navbar.css'
import {assets} from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu]= useState("menu");
  const {getTotalCartAmount}= useContext(StoreContext);
{/* <img src={assets.logo} alt="LOGO" className="logo"/> */}
  return (
    <div className='navbar'>
  <Link to='/'> <h2 className='logo'>CRAVINGSSS.</h2> </Link>
  <ul className= "navbar-menu">
    <Link to='/'><li onClick={()=>setMenu("home")} className= {menu==="home"? "active":""} >home</li> </Link>
      <li onClick={()=>setMenu("menu")}  className= {menu==="menu"? "active":""}>menu</li>
      <li onClick={()=>setMenu("mobile no")} className= {menu==="mobile no"? "active":""}>mobile no</li>
      <li onClick={()=>setMenu("contact us")} className= {menu==="contact us"? "active":""}>contact us</li>
  </ul>
      <div className='navbar-right'>
      <img src={assets.search_icon} alt=""/>
        <div className='navbar-search-icon'>
      <Link to='/cart'><img src={assets.basket_icon} alt=""/> </Link> 
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
    </div>
    <button onClick={() => setShowLogin(true)}>sign in</button>

  </div>
  </div>
  )
}

export default Navbar
