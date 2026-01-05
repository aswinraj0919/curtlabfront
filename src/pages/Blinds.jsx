import React from 'react';
import Header from '../components/Header';
import Bottom from '../components/bottom';
import ProductsHead from '../components/ProductsHead';

import './style.css';
import { Link, useLocation } from 'react-router-dom';

export default function Blinds() {
  
    const products = [
      { id: 1, name: 'Blackout Roller Blinds', content: 'Blackout Roller Blinds offer a sleek, modern solution for complete light control and privacy. Designed with high-quality blackout fabrics, they effectively block sunlight and UV rays, keeping interiors cool and comfortable. Their simple rolling mechanism makes them easy to operate, while the clean lines complement both residential and commercial spaces. Ideal for bedrooms, offices, and media rooms where darkness and energy efficiency are priorities.', image: '/images/product-8.jpg' },
      { id: 2, name: 'Panel Blinds', content: 'Panel Blinds feature wide fabric panels that slide smoothly across a track, creating a contemporary look suitable for large windows, sliding doors, and partitions. They are perfect for open-plan spaces, offering flexible light and privacy control. Available in various textures, patterns, and opacities, panel blinds add a sophisticated architectural element while enhancing the overall flow and balance of the interior design.', image: '/images/product-9.jpg' },
      { id: 3, name: 'Zebra Blinds', content: 'Zebra Blinds, also known as day-and-night blinds, combine alternating horizontal sheer and solid fabric stripes that can be adjusted to control light and privacy with precision. When aligned, they let soft light in; when overlapped, they offer complete privacy. These blinds are highly functional, stylish, and perfect for modern interiors where you want both brightness and seclusion at your fingertips.', image: '/images/product-10.jpg' },
      { id: 4, name: 'Wooden Blinds', content: 'Crafted from premium natural or faux wood, Wooden Blinds bring warmth, character, and timeless elegance to any space. Their adjustable slats allow precise control over light and privacy, while the rich wood tones create a cozy, refined atmosphere. Ideal for living rooms, offices, and classic interiors, they combine durability with natural beauty, adding an earthy, organic touch to contemporary décor.', image: '/images/product-11.jpg' },
      { id: 5, name: 'Sheer Roman Blinds', content: 'Sheer Roman Blinds blend the soft elegance of fabric curtains with the neat functionality of blinds. When raised, they fold gracefully into horizontal pleats; when lowered, they diffuse sunlight beautifully, filling rooms with a gentle glow. These blinds are perfect for creating a relaxed yet sophisticated environment, offering a balance between privacy, comfort, and style.', image: '/images/product-12.jpg' },
      { id: 6, name: 'Aluminium Venetian Blinds', content: 'Aluminium Venetian Blinds offer a practical and modern solution with adjustable horizontal slats for precise light control. Their sleek metallic finish complements minimalist, industrial, or office interiors. Lightweight, durable, and moisture-resistant, these blinds are ideal for kitchens, bathrooms, and commercial spaces where both performance and aesthetics matter.', image: '/images/product-12.jpg' },
      { id: 7, name: 'Vertical Blinds', content: 'Vertical Blinds are a versatile and elegant choice for large windows and sliding doors. Featuring vertical fabric or PVC slats that rotate to control light and privacy, they provide excellent flexibility and a clean, structured look. Perfect for offices, living rooms, and patio doors, vertical blinds add height and openness to interiors while offering smooth functionality and easy maintenance.', image: '/images/product-12.jpg' },
    ];


  const location = useLocation();

  const handleSubmitContact = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="products-page">
      <Header />
      <ProductsHead />

      {/* Products Grid Section */}
      <section className="products-grid-section" aria-label="Product collections">
        <div className='about-content products'>
          <h1>Shop by Categories</h1>
          <div className='products-grid category'>
            <div className='category-item'>
              <div className='category-name'>
                <h2>Curtain's</h2>
                <button className='btn btn-secondary'>Book Now</button>
              </div>
              <img src="/images/category-1.jpg" alt="" />
            </div>
            <div className='category-item'>
              <div className='category-name'>
                <h2>Curtain's</h2>
                <button className='btn btn-secondary'>Book Now</button>
              </div>
              <img src="/images/category-1.jpg" alt="" />
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
              <div className='collection-items'>
                <img src={product.image} />
                <div className="collection-content">
                  <h1>{product.name}</h1>
                  <p>{product.content}</p>
                  <div className='collection-btn'>
                    <button className='btn btn-secondary'>Book Now</button>
                    <button className='btn btn-primary'>Know More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Bottom />


    </div>
  );
}