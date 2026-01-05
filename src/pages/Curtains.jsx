import React from 'react';
import Header from '../components/Header';
import Bottom from '../components/bottom';
import ProductsHead from '../components/ProductsHead';

import './style.css';
import { Link, useLocation } from 'react-router-dom';

export default function Curtains() {
  const products = [
    { id: 1, name: 'Sheer Curtains', content: 'Sheer curtains are crafted from lightweight, translucent fabrics that gently filter sunlight, creating a calm and welcoming atmosphere. They soften natural light, offering daytime privacy without blocking your outdoor view. Ideal for living rooms, dining areas, and balconies, sheer curtains add elegance and movement to any space while complementing any interior style.', image: '/images/product-1.jpg' },
    { id: 2, name: 'Blackout Curtains', content: 'Blackout curtains are designed to completely block outside light and reduce noise, ensuring privacy and better sleep quality. Made with multi-layered or coated fabrics, they also provide insulation—keeping rooms cooler in summer and warmer in winter. Perfect for bedrooms, media rooms, and offices, they combine comfort, practicality, and a refined appearance.', image: '/images/product-2.jpg' },
    { id: 3, name: 'Sheer & Blackout Curtains', content: 'The perfect duo for style and functionality — sheer and blackout curtains layered together allow you to adjust the light and privacy according to your mood and time of day. The sheer layer offers brightness and elegance during the day, while the blackout layer ensures complete darkness and privacy at night. This combination adds depth, luxury, and versatility to any room setting.', image: '/images/product-3.jpg' },
    { id: 4, name: 'Eyelet Curtains – Blackout', content: 'Eyelet blackout curtains are a modern and stylish choice featuring polished metal rings at the top for easy sliding and a neat, uniform drape. The blackout fabric blocks sunlight and offers privacy, making them ideal for bedrooms and offices. They are low-maintenance, elegant, and available in a wide range of colors and textures to match both contemporary and classic interiors.', image: '/images/product-4.jpg' },
    { id: 5, name: 'Eyelet Curtains – Sheer', content: 'These curtains blend simplicity with sophistication. The eyelet design allows for smooth, effortless movement along the rod, while the sheer fabric diffuses sunlight and adds a delicate charm. Eyelet sheer curtains are perfect for bright spaces like living areas or lounges, enhancing openness while maintaining a touch of grace and softness', image: '/images/product-5.jpg' },
    { id: 6, name: 'Wave Style Curtains – Blackout', content: 'Wave style blackout curtains feature a continuous, soft wave pattern that creates a clean and uniform look from ceiling to floor. The sleek design complements modern interiors, while the blackout material ensures total light control, thermal insulation, and noise reduction. These curtains are ideal for luxury residences, hotels, and offices where both aesthetics and performance matter.', image: '/images/product-6.jpg' },
    { id: 7, name: 'Wave Style Curtains – Sheer', content: 'Wave sheer curtains bring a sense of movement and harmony to any room with their perfectly aligned, ripple-like folds. They diffuse natural light beautifully and maintain a smooth, minimalist appearance. Ideal for large windows, glass partitions, and contemporary interiors, these curtains combine elegance and functionality to elevate any space with refined simplicity', image: '/images/product-7.jpg' },
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