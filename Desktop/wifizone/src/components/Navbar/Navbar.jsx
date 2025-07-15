import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return <div className='navbar'>
    <div className="laptop">
      <h2 className="logo">
        <Link to="/" className="link-logo">WifiZone</Link>
      </h2>
      <div className="navigation">
        <ul className="links-conteneur">
            <li className="link"><Link to="/etapes">comment ça marche ?</Link></li>
            <li className="link"><Link to="/telecharger">Téléchargez</Link></li>
            <li className="link"><Link to="/contact">Contactez-nous</Link></li>
        </ul>
        <FiMenu className='menu-icon'/>

      </div>
    </div>
    <div className="mobile"></div>
    </div>;
};

export default Navbar
