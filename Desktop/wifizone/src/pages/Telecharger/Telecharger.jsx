import React from 'react';
import './Telecharger.scss'; 
import imgTelecharger from '../../assets/images/home3.jpg'; 
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

const Telecharger = () => {
  return (
    <div className='conteneur-telecharger'>
        <div className="telecharger-image">
            <img src={imgTelecharger} alt="Télécharger l'application" />
        </div>
        <div className='sous-conteneur-telecharger'>
            <h2>Téléchargez notre application</h2>
            <p>Pour une expérience optimale, téléchargez notre application mobile et accédez à tous nos services en un clic.</p>
            <div className="telecharger-links">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <button className="store-btn">
                        <FaGooglePlay size={28} /> Telecharger sur Google Play
                    </button>
                </a>
                <a href="https://www.apple.com/fr/app-store/" target="_blank" rel="noopener noreferrer">
                    <button className="store-btn">
                        <FaAppStore size={28} /> Telecharger sur App Store
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Telecharger
