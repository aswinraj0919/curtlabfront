import React from 'react';
import Header from '../components/Header';
import Bottom from '../components/bottom';

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
                        <div className="about-badge" aria-label="CurtLab since 2025">
                            <div className="badge-line"></div>
                            <div className="badge-text">
                                <h3>CurtLab</h3>
                                <p>From 2025</p>
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

                <Bottom />
            </div>



        );
    };