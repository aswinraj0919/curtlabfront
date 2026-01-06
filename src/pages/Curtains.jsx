import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import Bottom from '../components/bottom';
import ProductsHead from '../components/ProductsHead';
import './style.css';
import { Link, useLocation } from 'react-router-dom';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const ref = useRef(null);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    if (ref.current) {
      const contentHeight = ref.current.scrollHeight;
      setHeight(`${contentHeight + 100}px`);
    }
  }, []);

  const products = [
    { id: 1, name: 'Sheer Curtains', content: 'Sheer curtains are crafted from lightweight, translucent fabrics that gently filter sunlight, creating a calm and welcoming atmosphere. They soften natural light, offering daytime privacy without blocking your outdoor view. Ideal for living rooms, dining areas, and balconies, sheer curtains add elegance and movement to any space while complementing any interior style.', images: ['/images/product-1.jpg'] },
    { id: 2, name: 'Blackout Curtains', content: 'Blackout curtains are designed to completely block outside light and reduce noise, ensuring privacy and better sleep quality. Made with multi-layered or coated fabrics, they also provide insulation—keeping rooms cooler in summer and warmer in winter. Perfect for bedrooms, media rooms, and offices, they combine comfort, practicality, and a refined appearance.', images: ['/images/product-2.jpg'] },
    { id: 3, name: 'Sheer & Blackout Curtains', content: 'The perfect duo for style and functionality — sheer and blackout curtains layered together allow you to adjust the light and privacy according to your mood and time of day. The sheer layer offers brightness and elegance during the day, while the blackout layer ensures complete darkness and privacy at night. This combination adds depth, luxury, and versatility to any room setting.', images: ['/images/product-3.jpg'] },
    { id: 4, name: 'Eyelet Curtains – Blackout', content: 'Eyelet blackout curtains are a modern and stylish choice featuring polished metal rings at the top for easy sliding and a neat, uniform drape. The blackout fabric blocks sunlight and offers privacy, making them ideal for bedrooms and offices. They are low-maintenance, elegant, and available in a wide range of colors and textures to match both contemporary and classic interiors.', images: ['/images/product-4.jpg'] },
    { id: 5, name: 'Eyelet Curtains – Sheer', content: 'These curtains blend simplicity with sophistication. The eyelet design allows for smooth, effortless movement along the rod, while the sheer fabric diffuses sunlight and adds a delicate charm. Eyelet sheer curtains are perfect for bright spaces like living areas or lounges, enhancing openness while maintaining a touch of grace and softness', images: ['/images/product-5.jpg'] },
    { id: 6, name: 'Wave Style Curtains – Blackout', content: 'Wave style blackout curtains feature a continuous, soft wave pattern that creates a clean and uniform look from ceiling to floor. The sleek design complements modern interiors, while the blackout material ensures total light control, thermal insulation, and noise reduction. These curtains are ideal for luxury residences, hotels, and offices where both aesthetics and performance matter.', images: ['/images/product-6.jpg'] },
    { id: 7, name: 'Wave Style Curtains – Sheer', content: 'Wave sheer curtains bring a sense of movement and harmony to any room with their perfectly aligned, ripple-like folds. They diffuse natural light beautifully and maintain a smooth, minimalist appearance. Ideal for large windows, glass partitions, and contemporary interiors, these curtains combine elegance and functionality to elevate any space with refined simplicity', images: ['/images/product-7.jpg'] },
    ];

  const location = useLocation();

  const handleKnowMoreClick = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setShowPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const handleNextImage = (e, productId = null) => {
    e.stopPropagation();
    if (productId) {
      // For product grid
      const product = products.find(p => p.id === productId);
      if (product) {
        const currentIndex = hoveredProductId === productId ? currentImageIndex : 0;
        const nextIndex = (currentIndex + 1) % product.images.length;
        setCurrentImageIndex(nextIndex);
        setHoveredProductId(productId);
      }
    } else {
      // For popup
      if (selectedProduct) {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % selectedProduct.images.length
        );
      }
    }
  };

  const handlePrevImage = (e, productId = null) => {
    e.stopPropagation();
    if (productId) {
      // For product grid
      const product = products.find(p => p.id === productId);
      if (product) {
        const currentIndex = hoveredProductId === productId ? currentImageIndex : 0;
        const prevIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
        setCurrentImageIndex(prevIndex);
        setHoveredProductId(productId);
      }
    } else {
      // For popup
      if (selectedProduct) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
        );
      }
    }
  };



  const handlePopupOutsideClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      handleClosePopup();
    }
  };

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
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    handleClosePopup();
  };

  const handleProductImageClick = (e, product) => {
    e.stopPropagation();
    if (product.images.length > 1) {
      // If multiple images, cycle to next image
      const currentIndex = hoveredProductId === product.id ? currentImageIndex : 0;
      const nextIndex = (currentIndex + 1) % product.images.length;
      setCurrentImageIndex(nextIndex);
      setHoveredProductId(product.id);
    } else {
      // If single image, open popup
      handleKnowMoreClick(product);
    }
  };

  const getCurrentImageForProduct = (productId) => {
    if (hoveredProductId === productId) {
      const product = products.find(p => p.id === productId);
      return product ? product.images[currentImageIndex] : product.images[0];
    }
    return null;
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
            <h1>Our Products</h1>
          </div>
          <div className='select-Categories'>
            <Link
              to="/products"
              className={`product-link ${location.pathname === '/products' ? 'active' : ''}`}
            >
              All Product's
            </Link>
            <Link
              to="/products/curtains"
              className={`product-link ${location.pathname === '/products/curtains' ? 'active' : ''}`}
            >
              Curtains
            </Link>
            <Link
              to="/products/blinds"
              className={`product-link ${location.pathname === '/products/blinds' ? 'active' : ''}`}
            >
              Blinds
            </Link>
          </div>

          <div className="products-grid">
            {products.map((product) => {
              const currentImage = getCurrentImageForProduct(product.id) || product.images[0];
              
              return (
                <div key={product.id} className='collection-items'>
                  <div 
                    className="product-image-container"
                    onClick={(e) => handleProductImageClick(e, product)}
                  >
                    <img src={currentImage} alt={product.name} />
                    
                    {/* Navigation arrows on product image */}
                    {product.images.length > 1 && (
                      <>
                        <button 
                          className="product-nav-btn prev-btn" 
                          onClick={(e) => handlePrevImage(e, product.id)}
                          aria-label="Previous image"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button 
                          className="product-nav-btn next-btn" 
                          onClick={(e) => handleNextImage(e, product.id)}
                          aria-label="Next image"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Image counter for multiple images */}
                    {product.images.length > 1 && (
                      <div className="image-counter">
                        {hoveredProductId === product.id 
                          ? `${currentImageIndex + 1} / ${product.images.length}`
                          : `1 / ${product.images.length}`}
                      </div>
                    )}
                  </div>
                  <div className="collection-content">
                    <h1>{product.name}</h1>
                    <p>{product.content.substring(0, 150)}...</p>
                    <div className='collection-btn'>
                      <button className='btn btn-secondary' onClick={handleBookNow}>
                        Book Now
                        <svg width="15" height="20" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0.283911" y1="4.5425" x2="17.8864" y2="4.5425" stroke="#253F4B" stroke-width="0.567822" stroke-linecap="round" />
                          <line x1="14.0293" y1="0.283936" x2="18.1704" y2="4.425" stroke="#253F4B" stroke-width="0.567822" stroke-linecap="round" />
                          <line x1="18.1704" y1="4.6603" x2="14.0293" y2="8.80137" stroke="#253F4B" stroke-width="0.567822" stroke-linecap="round" />
                        </svg>
                      </button>
                      <button
                        className='btn btn-primary'
                        onClick={() => handleKnowMoreClick(product)}
                      >
                        Know More
                        <svg width="15" height="20" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0.283911" y1="4.54263" x2="17.8864" y2="4.54263" stroke="white" stroke-width="0.567822" stroke-linecap="round" />
                          <line x1="14.0293" y1="0.283936" x2="18.1704" y2="4.425" stroke="white" stroke-width="0.567822" stroke-linecap="round" />
                          <line x1="18.1704" y1="4.66018" x2="14.0293" y2="8.80124" stroke="white" stroke-width="0.567822" stroke-linecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popup with Image Carousel */}
{showPopup && selectedProduct && (
  <div
    className="popup-overlay"
    onClick={handlePopupOutsideClick}
    aria-hidden={!showPopup}
  >
    <div className="products-grid product-popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div className="popup-content">
        <div className="popup-image-container">
          <img
            src={selectedProduct.images[currentImageIndex]}
            alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
            className="popup-image"
          />
          
          {/* Navigation arrows for multiple images */}
          {selectedProduct.images.length > 1 && (
            <>
              <button 
                className="popup-nav-btn prev-btn" 
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="popup-nav-btn next-btn" 
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}

          {/* Image indicators/dots */}
          {selectedProduct.images.length > 1 && (
            <div className="popup-image-indicators">
              {selectedProduct.images.map((_, index) => (
                <button
                  key={index}
                  className={`popup-image-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="popup-details">
          <h1 id="popup-title" className="popup-product-name">{selectedProduct.name}</h1>
          <div className="popup-description">
            
            {selectedProduct.content.split(' >').map((sentence, index) => (
              <p key={index} className="popup-sentence">
                {sentence.trim()}
                {index < selectedProduct.content.split('').length - 1 ? '' : ''}
              </p>
            ))}
            <h3>Book Your Free Consultation Here</h3>
          </div>
          {/* <div className="popup-actions"> */}
            <button 
              className="btn btn-popup-book"
              onClick={handleBookNow}
            >
              Book Now
              <svg width="15" height="20" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.283911" y1="4.5425" x2="17.8864" y2="4.5425" stroke="#253F4B" stroke-width="0.567822" stroke-linecap="round" />
                <line x1="14.0293" y1="0.283936" x2="18.1704" y2="4.425" stroke="#253F4B" stroke-width="0.567822" stroke-linecap="round" />
                <line x1="18.1704" y1="4.6603" x2="14.0293" y2="8.80137" stroke="#253F4B" stroke-width="0.567822" stroke-linecap="round" />
              </svg>
            </button>
          {/* </div> */}
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