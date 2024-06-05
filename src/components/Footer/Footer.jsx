import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
            <h1 className='name'>Praveen</h1>
                <p>I am a Passionate frontend developer with a keen eye for design and a commitment to crafting seamless user experiences.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src ={user_icon} alt=''/>
                    <input type="email" placeholder='Enter Your Email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">Copyright © 2024 by Praveen Bimsara | All Rights Reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer