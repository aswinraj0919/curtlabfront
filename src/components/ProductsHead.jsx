import React from 'react';
import '../pages/style.css';

export default function ProductsHead() {
  
    const handleBookNow = () => {
    // Scroll to contact section or open booking modal
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="products-page">

      {/* Hero Section */}
      <section className="products-hero" aria-label="Products hero section">
        <div className="hero-background">
          <img
            src="/images/about-bg-1.jpg"
            alt="Elegant curtains and window treatments in a modern home"
            className="hero-bg-image"
            loading="eager"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="products-hero-content">
          <div className="products-badge" aria-label="CurtLab Collections 2025">
            <div className="badge-line"></div>
            <div className="badge-text">
              <h3>CurtLab</h3>
              <p>Collections 2025</p>
            </div>
          </div>

          <h1 className="products-title">
            <span>Our Latest</span>
            <span className="title-large">Collections</span>
          </h1>

          <button
            className="btn-book"
            onClick={handleBookNow}
            aria-label="Book a consultation"
          >
            <span>Book Now</span>
            <svg width="26" height="13" viewBox="0 0 26 13" fill="none" aria-hidden="true">
              <line x1="0.5" y1="6.5" x2="25.5" y2="6.5" stroke="currentColor" strokeLinecap="round" />
              <line x1="20" y1="0.5" x2="25.9" y2="6.3" stroke="currentColor" strokeLinecap="round" />
              <line x1="25.9" y1="6.6" x2="20" y2="12.5" stroke="currentColor" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}