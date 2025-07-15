import React from 'react';
import './Footer.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='sous-conteneur-footer'>
        <div className="top">
            <FaFacebookSquare className='social-icon'/>
            <FaTiktok className='social-icon'/>
            <FaWhatsappSquare className='social-icon'/>
        </div>
        <div className="bottom">© 2025 WifiZone All right reserved Dreamtech-cm.com</div>
    </div>
  )
}

export default Footer
