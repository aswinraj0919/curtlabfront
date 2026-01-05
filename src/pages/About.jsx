import React from 'react';
import Header from '../components/Header';
import Bottom from '../components/bottom';
import Arrow from '../components/arrow'
import './style.css';

export default function About() {
  const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };


  return (
    <div className="about-page">
      <Header />

      {/* Hero Section */}
      <section className="about-hero" aria-label="About CurtLab hero section">
        <div className="hero-background">
          <img
            src="/images/hero-bg-1.jpg"
            alt="Elegant curtains in a beautifully designed room showcasing CurtLab's work"
            className="hero-bg-image"
            loading="eager"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="about-hero-content">
          <div className="about-badge" aria-label="CurtLab since 2025">
            <div className="badge-line"></div>
            <div className="badge-text">
              <h3>CurtLab</h3>
              <p>From 2025</p>
            </div>
          </div>

          <h1 className="about-title">
            <span>About</span>
            <span className="title-large">CurtLab</span>
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

      <section className='about-section'>
        <div className='about-grid'>
          <h2>Designed for Every Window</h2>
          <div className="about-content first">
            <p>CurtLab is your one-stop solution for curtains, created to make window styling simple, reliable, and effortless. From the first consultation to final installation, we take care of every detail—so you don’t have to. Every curtain we deliver is thoughtfully designed and fully made to fit your space, your needs, and your lifestyle.
              <span>Powered by Andona Interiors LLC, Abu Dhabi, CurtLab brings professional expertise and design-led thinking into homes that value comfort, quality, and understated elegance.</span></p>
            <img src="/images/andona-logo.jpg" alt="" />
          </div>

          <div className='about-content second'>
            <h1>Who We Are</h1>
            <p>CurtLab was built on a simple idea: choosing curtains shouldn’t feel complicated. We believe that great window solutions come from understanding how people live, not just how spaces look. That’s why we focus on clear choices, honest guidance, and a smooth end-to-end process. <span>Our team works closely with you to understand your space, light requirements, and personal style. From precise measurements to curated fabric selections, every step is handled with care to ensure a seamless experience and a beautiful result.</span></p>
          </div>

          <div className='about-content third'>
            <div className='whatWeDo'>
              <h1>What We Do</h1>
              <p>We offer custom-made curtain solutions designed to suit modern living. Whether you’re looking for sheer elegance, complete privacy, or layered functionality, we guide you through the process with clarity and confidence.</p>
              <div className='ourService'>
                <h2>Our services include:</h2>
                <div className='points'>
                  <p><Arrow />Free consultation and expert guidance</p>
                  <p><Arrow />Professional on-site measurements</p>
                  <p><Arrow />Curated fabric and style selection</p>
                  <p><Arrow />Quick, clean, and reliable installation</p>
                </div>
              </div>
              <p>By managing the entire journey in-house, we ensure consistency, quality, and peace of mind from start to finish.</p>
            </div>
            <img src="/images/whatwedo.jpg" alt="" />
          </div>

          <div className='about-content second'>
            <h1>Our Mission</h1>
            <h2>To make curtain styling easy, thoughtful, and accessible for everyone.</h2>
            <p>At CurtLab, our mission is to help people choose and style curtains that fit real life beautifully. We focus on simple choices, thoughtful design, and friendly service to create homes that feel warm, personal, and effortlessly put together. Every solution we offer is designed to balance comfort, functionality, and timeless style.</p>
          </div>

          <div className='about-content forth'>
            <h1>Our Vision</h1>
            <h2>To become the most trusted and approachable curtain brand.</h2>
            <p>We aim to redefine how people see curtains—not just as a finishing touch, but as a simple and powerful way to transform everyday spaces. By combining quality craftsmanship with an easy, transparent process, CurtLab strives to make beautiful window solutions a natural part of modern living.</p>
          </div>

          <div className='about-content third'>
            <div className='whyCurtLab'>
              <h1>Why CurtLab</h1>
              <p>Because we believe good design should feel easy. With CurtLab, you get more than curtains—you get a reliable partner dedicated to enhancing your space with care, precision, and simplicity.</p>
              <h2>Book a free consultation and let's style your windows, beautifully.</h2>
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
            <img src="/images/WhyCurtLab.jpg" alt="" />
          </div>

        </div>

      </section>

      <Bottom />

    </div>
  );
}