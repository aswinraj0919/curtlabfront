import React,{ useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Bottom from '../components/bottom';
import ProductsHead from '../components/ProductsHead';

import './style.css';

export default function Blinds() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  const products = [
    { id: 1, name: 'Blackout Roller Blinds', content: 'Blackout Roller Blinds offer a sleek, modern solution for complete light control and privacy. Designed with high-quality blackout fabrics, they effectively block sunlight and UV rays, keeping interiors cool and comfortable. Their simple rolling mechanism makes them easy to operate, while the clean lines complement both residential and commercial spaces. Ideal for bedrooms, offices, and media rooms where darkness and energy efficiency are priorities.', image: '/images/product-8.jpg' },
    { id: 2, name: 'Panel Blinds', content: 'Panel Blinds feature wide fabric panels that slide smoothly across a track, creating a contemporary look suitable for large windows, sliding doors, and partitions. They are perfect for open-plan spaces, offering flexible light and privacy control. Available in various textures, patterns, and opacities, panel blinds add a sophisticated architectural element while enhancing the overall flow and balance of the interior design.', image: '/images/product-9.jpg' },
    { id: 3, name: 'Zebra Blinds', content: 'Zebra Blinds, also known as day-and-night blinds, combine alternating horizontal sheer and solid fabric stripes that can be adjusted to control light and privacy with precision. When aligned, they let soft light in; when overlapped, they offer complete privacy. These blinds are highly functional, stylish, and perfect for modern interiors where you want both brightness and seclusion at your fingertips.', image: '/images/product-10.jpg' },
    { id: 4, name: 'Wooden Blinds', content: 'Crafted from premium natural or faux wood, Wooden Blinds bring warmth, character, and timeless elegance to any space. Their adjustable slats allow precise control over light and privacy, while the rich wood tones create a cozy, refined atmosphere. Ideal for living rooms, offices, and classic interiors, they combine durability with natural beauty, adding an earthy, organic touch to contemporary décor.', image: '/images/product-11.jpg' },
    { id: 5, name: 'Sheer Roman Blinds', content: 'Sheer Roman Blinds blend the soft elegance of fabric curtains with the neat functionality of blinds. When raised, they fold gracefully into horizontal pleats; when lowered, they diffuse sunlight beautifully, filling rooms with a gentle glow. These blinds are perfect for creating a relaxed yet sophisticated environment, offering a balance between privacy, comfort, and style.', image: '/images/product-12.jpg' },
    { id: 6, name: 'Aluminium Venetian Blinds', content: 'Aluminium Venetian Blinds offer a practical and modern solution with adjustable horizontal slats for precise light control. Their sleek metallic finish complements minimalist, industrial, or office interiors. Lightweight, durable, and moisture-resistant, these blinds are ideal for kitchens, bathrooms, and commercial spaces where both performance and aesthetics matter.', image: '/images/product-12.jpg' },
    { id: 7, name: 'Vertical Blinds', content: 'Vertical Blinds are a versatile and elegant choice for large windows and sliding doors. Featuring vertical fabric or PVC slats that rotate to control light and privacy, they provide excellent flexibility and a clean, structured look. Perfect for offices, living rooms, and patio doors, vertical blinds add height and openness to interiors while offering smooth functionality and easy maintenance.', image: '/images/product-12.jpg' },
  ];


  const handleKnowMoreClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
    // Prevent scrolling when popup is open
    document.body.style.overflow = 'hidden';
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  // Close popup when clicking outside
  const handlePopupOutsideClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      handleClosePopup();
    }
  };

  // Add keyboard support (Escape key to close)
  React.useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && showPopup) {
        handleClosePopup();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [showPopup]);

  const handleBookNow = () => {
    // Scroll to contact section or open booking modal
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    handleClosePopup();
  };

  return (
    <div className="products-page">
      <Header />
      <ProductsHead />
      <section className="products-grid-section" aria-label="Product collections">
        <div className='about-content products'>
          <h1>Shop by Categories</h1>
          <div className='products-grid category'>
            <div className='category-item'>
              <div className='category-name'>
                <h2>Curtain's</h2>
                <Link
                  to="/products/curtains"
                  className={`product-link ${location.pathname === '/products/curtains' ? 'active' : ''}`}
                // onClick={closeMenu}
                >
                  <button className='btn btn-secondary product'>Book Now</button>
                </Link>
              </div>
              <img src="/images/Frame 69.png" alt="" />
            </div>
            <div className='category-item'>
              <div className='category-name'>
                <h2>Blind's</h2>
                <Link
                  to="/products/blinds"
                  className={`product-link ${location.pathname === '/products/blinds' ? 'active' : ''}`}
                // onClick={closeMenu}
                >
                  <button className='btn btn-secondary product'>Book Now</button>
                </Link>
              </div>
              <img src="/images/Frame 70.png" alt="" />
            </div>
          </div>
        </div>
        <div className="products-container">
          <div className="about-content products">
            <h1>Our  Products</h1>
          </div>
          <div className='select-Categories'>
            <Link
              to="/products"
              className={`product-link ${location.pathname === '/products' ? 'active' : ''}`}
            // onClick={closeMenu}
            >
              All Product’s
            </Link>
            <Link
              to="/products/curtains"
              className={`product-link ${location.pathname === '/products/curtains' ? 'active' : ''}`}
            // onClick={closeMenu}
            >
              Curtains
            </Link>
            <Link
              to="/products/blinds"
              className={`product-link ${location.pathname === '/products/blinds' ? 'active' : ''}`}
            // onClick={closeMenu}
            >
              Blinds
            </Link>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className='collection-items'>
                <img src={product.image} alt={product.name} />
                <div className="collection-content">
                  <h1>{product.name}</h1>
                  <p>{product.content.substring(0, 150)}...</p>
                  <div className='collection-btn'>
                    <button className='btn btn-secondary' onClick={handleBookNow}
                    >Book Now<svg width="15" height="20" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.283911" y1="4.5425" x2="17.8864" y2="4.5425" stroke="#253F4B" stroke-width="0.567822" stroke-linecap="round" />
                        <line x1="14.0293" y1="0.283936" x2="18.1704" y2="4.425" stroke="#253F4B" stroke-width="0.567822" stroke-linecap="round" />
                        <line x1="18.1704" y1="4.6603" x2="14.0293" y2="8.80137" stroke="#253F4B" stroke-width="0.567822" stroke-linecap="round" />
                      </svg></button>
                    <button
                      className='btn btn-primary'
                      onClick={() => handleKnowMoreClick(product)}
                    >
                      Know More<svg width="15" height="20" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.283911" y1="4.54263" x2="17.8864" y2="4.54263" stroke="white" stroke-width="0.567822" stroke-linecap="round" />
                        <line x1="14.0293" y1="0.283936" x2="18.1704" y2="4.425" stroke="white" stroke-width="0.567822" stroke-linecap="round" />
                        <line x1="18.1704" y1="4.66018" x2="14.0293" y2="8.80124" stroke="white" stroke-width="0.567822" stroke-linecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showPopup && selectedProduct && (
        <div
          className="popup-overlay"
          onClick={handlePopupOutsideClick}
          aria-hidden={!showPopup}
        >
          <div className=" products-grid product-popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">
            <div className="popup-content">
              <div className="popup-image-container">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="popup-image"
                />
              </div>
              <div className="popup-details">
                <h1 id="popup-title">{selectedProduct.name}</h1>

                <p>{selectedProduct.content}</p>
                <div className="popup-actions">
                  <button className='btn btn-primary' onClick={handleBookNow}
                  >Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <Bottom />


    </div>
  );
}