import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/logo'
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">

          <Link
            to="/"
            onClick={closeMenu}
          >
            <Logo/>
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/products"
            className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
          >
            Gallery / Inspirations
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </nav>

        <a className="phone-icon" href="tel:+971507315523">
          <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="45" height="45" rx="22.5" stroke="#302422" stroke-opacity="0.5" stroke-width="2" />
            <path d="M13.7363 12.8701C14.4452 12.2955 15.4201 11.933 16.7695 12.0117L19.584 16.793L19.6152 16.8457L19.6523 16.8945C19.779 17.0595 19.8161 17.1765 19.8262 17.251C19.8359 17.3233 19.8292 17.4177 19.7725 17.5527C19.6791 17.7708 19.4486 18.0586 18.9863 18.3955L18.9531 18.4189L18.9219 18.4463C18.8021 18.5494 18.6487 18.6618 18.4463 18.8086L18.4443 18.8105C18.1417 19.0313 17.6868 19.3589 17.3594 19.7451C17.0249 20.1399 16.649 20.8153 16.9502 21.624L16.9492 21.625L16.9551 21.6406V21.6396C16.9573 21.6455 16.9596 21.6514 16.9619 21.6572L17.7207 21.3662L17.0107 21.7578C17.8769 23.3279 18.8915 24.8656 20.2236 26.2783V26.2793C21.5647 27.7052 23.2259 28.9947 25.3564 30.0889L25.3652 30.0928L25.374 30.0977C25.77 30.2912 26.2005 30.3058 26.5898 30.1553L26.5908 30.1562C26.5957 30.1544 26.6006 30.1523 26.6055 30.1504L26.6045 30.1494C26.9998 29.995 27.3168 29.7086 27.5273 29.4971C27.7344 29.2889 27.9588 28.9942 28.1484 28.7383L28.1494 28.7393C28.5637 28.1918 28.9107 27.7463 29.2764 27.4814C29.4432 27.3606 29.5706 27.311 29.667 27.2959C29.7508 27.2828 29.8664 27.2865 30.04 27.3682H30.041C30.0446 27.3701 30.0486 27.3718 30.0527 27.374L34.5537 29.9746L34.5762 29.9893V29.9902C34.8065 30.1495 34.9549 30.3916 34.9912 30.7812L35 30.958C34.9978 31.4752 34.7989 32.1313 34.4629 32.7256C34.1112 33.3462 33.612 33.7946 32.999 34.1211L32.7295 34.2529L32.7236 34.2559C32.1811 34.5069 31.5743 34.6784 30.9395 34.8027L30.2959 34.9131C29.0348 35.0995 27.8503 34.9825 26.6123 34.6006C25.3912 34.2204 24.1275 33.5828 22.6963 32.6943L22.6035 32.6338L22.5938 32.6279L21.5664 31.9746C21.395 31.8625 21.2233 31.7489 21.0527 31.6309L20.5439 31.2646C18.1849 29.4725 15.787 26.9345 14.1309 24.1436L13.8096 23.582C12.4187 21.0523 11.7193 18.4251 12.1055 15.998C12.3187 14.673 12.8678 13.5701 13.7334 12.8721L13.7363 12.8701ZM34.6025 30.0029L34.6045 30.0049L34.5898 29.9961L34.6025 30.0029Z" stroke="#302422" stroke-opacity="0.5" stroke-width="2" />
          </svg>
        </a>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </header>
  );
}
