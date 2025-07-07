import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
<div className='footer' id='footer'>
    <div className="footer-content">
        
        <div className="footer-content-left">
            <h1 style={{color:'tomato' }}>Cravingsss.</h1>
            <p>Cravingsss is your ultimate food ordering destination where hunger meets happiness. Discover a wide range of delicious dishes, from street food to gourmet meals, and get them delivered to your doorstep quickly and effortlessly.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt=""/>
            </div>
        </div>
        
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-789</li>
                <li>contact@Cravingsss.com</li>
            </ul>
        </div>
    </div>
<hr/>
<p className="footer-copyright">Copyright 2025 Cravingsss.com - All Right Reserved </p>
</div>
  )
}

export default Footer
