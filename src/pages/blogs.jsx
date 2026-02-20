import React from 'react';
import Header from '../components/Header';
import Bottom from '../components/bottom';
import { Link, useLocation } from 'react-router-dom';


const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
};

export default function Blogs() {
    return (
        <div>
            <Header />
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
                    <div className="about-badge" aria-label="CurtLab since">
                        <div className="badge-line"></div>
                        <div className="badge-text">
                            <h3>CurtLab</h3>
                        </div>
                    </div>

                    <h1 className="about-title">
                        <span>About Our Works</span>
                        <span className="title-large"></span>
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
            <section>
                <div className='main-content'>
                    <div className='works-catogerey'>
                        <div className='frame-1'>
                            <button className='btn btn-secondary'>Home  Designs</button>
                            <button className='btn btn-secondary'>Office  Designs</button>
                        </div>
                        <button className='btn btn-secondary'>Apartment  Designs</button>
                    </div>
                    <div className='blog-grid'>
                        <div className='collection-items grid'>
                            <img src="/images/product-1.jpg" alt="" />
                            <div className='blog-content'>
                                <h2>The Abu Dhabi Home
                                    <Link to="/blogs/blog">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="16" stroke="#F1F0E5" stroke-width="2" />
                                            <path d="M14 9L22 17L14 25" stroke="#F1F0E5" stroke-width="2" stroke-linecap="round" />
                                        </svg></Link>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                        <div className='collection-items grid'>
                            <img src="/images/product-1.jpg" alt="" />
                            <div className='blog-content'>
                                <h2>The Abu Dhabi Home
                                    <Link to="/blogs/blog">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="16" stroke="#F1F0E5" stroke-width="2" />
                                            <path d="M14 9L22 17L14 25" stroke="#F1F0E5" stroke-width="2" stroke-linecap="round" />
                                        </svg></Link>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                        <div className='collection-items grid'>
                            <img src="/images/product-1.jpg" alt="" />
                            <div className='blog-content'>
                                <h2>The Abu Dhabi Home
                                    <Link to="/blogs/blog">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="16" stroke="#F1F0E5" stroke-width="2" />
                                            <path d="M14 9L22 17L14 25" stroke="#F1F0E5" stroke-width="2" stroke-linecap="round" />
                                        </svg></Link>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                        <div className='collection-items grid'>
                            <img src="/images/product-1.jpg" alt="" />
                            <div className='blog-content'>
                                <h2>The Abu Dhabi Home
                                    <Link to="/blogs/blog">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="16" stroke="#F1F0E5" stroke-width="2" />
                                            <path d="M14 9L22 17L14 25" stroke="#F1F0E5" stroke-width="2" stroke-linecap="round" />
                                        </svg></Link>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                        <div className='collection-items grid'>
                            <img src="/images/product-1.jpg" alt="" />
                            <div className='blog-content'>
                                <h2>The Abu Dhabi Home
                                    <Link to="/blogs/blog">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="16" stroke="#F1F0E5" stroke-width="2" />
                                            <path d="M14 9L22 17L14 25" stroke="#F1F0E5" stroke-width="2" stroke-linecap="round" />
                                        </svg></Link>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                        <div className='collection-items grid'>
                            <img src="/images/product-1.jpg" alt="" />
                            <div className='blog-content'>
                                <h2>The Abu Dhabi Home
                                    <Link to="/blogs/blog">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="16" stroke="#F1F0E5" stroke-width="2" />
                                            <path d="M14 9L22 17L14 25" stroke="#F1F0E5" stroke-width="2" stroke-linecap="round" />
                                        </svg></Link>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                        <div className='collection-items grid'>
                            <img src="/images/product-1.jpg" alt="" />
                            <div className='blog-content'>
                                <h2>The Abu Dhabi Home
                                    <Link to="/blogs/blog">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="16" stroke="#F1F0E5" stroke-width="2" />
                                            <path d="M14 9L22 17L14 25" stroke="#F1F0E5" stroke-width="2" stroke-linecap="round" />
                                        </svg></Link>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                        <div className='collection-items grid'>
                            <img src="/images/product-1.jpg" alt="" />
                            <div className='blog-content'>
                                <h2>The Abu Dhabi Home
                                    <Link to="/blogs/blog">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="16" stroke="#F1F0E5" stroke-width="2" />
                                            <path d="M14 9L22 17L14 25" stroke="#F1F0E5" stroke-width="2" stroke-linecap="round" />
                                        </svg></Link>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                        <div className='collection-items grid'>
                            <img src="/images/product-1.jpg" alt="" />
                            <div className='blog-content'>
                                <h2>The Abu Dhabi Home
                                    <Link to="/blogs/blog">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="16" stroke="#F1F0E5" stroke-width="2" />
                                            <path d="M14 9L22 17L14 25" stroke="#F1F0E5" stroke-width="2" stroke-linecap="round" />
                                        </svg></Link>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Bottom />
        </div>
    );
};