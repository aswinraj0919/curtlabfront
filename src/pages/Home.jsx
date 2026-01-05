import { useEffect, useRef } from "react";
import Header from '../components/Header';
import Bottom from '../components/bottom';

import './style.css';

export default function Home() {
   const products = [
    { id: 1, name: 'Sheer Curtains', content: 'Sheer curtains are crafted from lightweight, translucent fabrics that gently filter sunlight, creating a calm and welcoming atmosphere. They soften natural light, offering daytime privacy without blocking your outdoor view. Ideal for living rooms, dining areas, and balconies, sheer curtains add elegance and movement to any space while complementing any interior style.', image: '/images/product-1.jpg' },
    { id: 2, name: 'Blackout Curtains', content: 'Blackout curtains are designed to completely block outside light and reduce noise, ensuring privacy and better sleep quality. Made with multi-layered or coated fabrics, they also provide insulation—keeping rooms cooler in summer and warmer in winter. Perfect for bedrooms, media rooms, and offices, they combine comfort, practicality, and a refined appearance.', image: '/images/product-2.jpg' },
    { id: 3, name: 'Sheer & Blackout Curtains', content: 'The perfect duo for style and functionality — sheer and blackout curtains layered together allow you to adjust the light and privacy according to your mood and time of day. The sheer layer offers brightness and elegance during the day, while the blackout layer ensures complete darkness and privacy at night. This combination adds depth, luxury, and versatility to any room setting.', image: '/images/product-3.jpg' },
    { id: 4, name: 'Eyelet Curtains – Blackout', content: 'Eyelet blackout curtains are a modern and stylish choice featuring polished metal rings at the top for easy sliding and a neat, uniform drape. The blackout fabric blocks sunlight and offers privacy, making them ideal for bedrooms and offices. They are low-maintenance, elegant, and available in a wide range of colors and textures to match both contemporary and classic interiors.', image: '/images/product-4.jpg' },
    { id: 5, name: 'Eyelet Curtains – Sheer', content: 'These curtains blend simplicity with sophistication. The eyelet design allows for smooth, effortless movement along the rod, while the sheer fabric diffuses sunlight and adds a delicate charm. Eyelet sheer curtains are perfect for bright spaces like living areas or lounges, enhancing openness while maintaining a touch of grace and softness', image: '/images/product-5.jpg' },
    { id: 6, name: 'Wave Style Curtains – Blackout', content: 'Wave style blackout curtains feature a continuous, soft wave pattern that creates a clean and uniform look from ceiling to floor. The sleek design complements modern interiors, while the blackout material ensures total light control, thermal insulation, and noise reduction. These curtains are ideal for luxury residences, hotels, and offices where both aesthetics and performance matter.', image: '/images/product-6.jpg' },
    { id: 7, name: 'Wave Style Curtains – Sheer', content: 'Wave sheer curtains bring a sense of movement and harmony to any room with their perfectly aligned, ripple-like folds. They diffuse natural light beautifully and maintain a smooth, minimalist appearance. Ideal for large windows, glass partitions, and contemporary interiors, these curtains combine elegance and functionality to elevate any space with refined simplicity', image: '/images/product-7.jpg' },
    { id: 8, name: 'Blackout Roller Blinds', content: 'Blackout Roller Blinds offer a sleek, modern solution for complete light control and privacy. Designed with high-quality blackout fabrics, they effectively block sunlight and UV rays, keeping interiors cool and comfortable. Their simple rolling mechanism makes them easy to operate, while the clean lines complement both residential and commercial spaces. Ideal for bedrooms, offices, and media rooms where darkness and energy efficiency are priorities.', image: '/images/product-8.jpg' },
    { id: 9, name: 'Panel Blinds', content: 'Panel Blinds feature wide fabric panels that slide smoothly across a track, creating a contemporary look suitable for large windows, sliding doors, and partitions. They are perfect for open-plan spaces, offering flexible light and privacy control. Available in various textures, patterns, and opacities, panel blinds add a sophisticated architectural element while enhancing the overall flow and balance of the interior design.', image: '/images/product-9.jpg' },
    { id: 10, name: 'Zebra Blinds', content: 'Zebra Blinds, also known as day-and-night blinds, combine alternating horizontal sheer and solid fabric stripes that can be adjusted to control light and privacy with precision. When aligned, they let soft light in; when overlapped, they offer complete privacy. These blinds are highly functional, stylish, and perfect for modern interiors where you want both brightness and seclusion at your fingertips.', image: '/images/product-10.jpg' },
    { id: 11, name: 'Wooden Blinds', content: 'Crafted from premium natural or faux wood, Wooden Blinds bring warmth, character, and timeless elegance to any space. Their adjustable slats allow precise control over light and privacy, while the rich wood tones create a cozy, refined atmosphere. Ideal for living rooms, offices, and classic interiors, they combine durability with natural beauty, adding an earthy, organic touch to contemporary décor.', image: '/images/product-11.jpg' },
    { id: 12, name: 'Sheer Roman Blinds', content: 'Sheer Roman Blinds blend the soft elegance of fabric curtains with the neat functionality of blinds. When raised, they fold gracefully into horizontal pleats; when lowered, they diffuse sunlight beautifully, filling rooms with a gentle glow. These blinds are perfect for creating a relaxed yet sophisticated environment, offering a balance between privacy, comfort, and style.', image: '/images/product-12.jpg' },
    { id: 13, name: 'Aluminium Venetian Blinds', content: 'Aluminium Venetian Blinds offer a practical and modern solution with adjustable horizontal slats for precise light control. Their sleek metallic finish complements minimalist, industrial, or office interiors. Lightweight, durable, and moisture-resistant, these blinds are ideal for kitchens, bathrooms, and commercial spaces where both performance and aesthetics matter.', image: '/images/product-12.jpg' },
    { id: 14, name: 'Vertical Blinds', content: 'Vertical Blinds are a versatile and elegant choice for large windows and sliding doors. Featuring vertical fabric or PVC slats that rotate to control light and privacy, they provide excellent flexibility and a clean, structured look. Perfect for offices, living rooms, and patio doors, vertical blinds add height and openness to interiors while offering smooth functionality and easy maintenance.', image: '/images/product-12.jpg' },


  ];
   const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;

    const onWheel = (e) => {
      e.preventDefault();
      slider.scrollLeft += e.deltaY;
    };

    slider.addEventListener("wheel", onWheel);

    return () => {
      slider.removeEventListener("wheel", onWheel);
    };
  }, []);
  
  return (
    <div className="home-page">
      <Header />

      {/* Hero Section */}
      <section className="hero-section" aria-label="Hero section">
        <div className="hero-background">
          <img
            src="/images/hero-bg-1.jpg"
            alt="Beautiful window with curtains in a modern living room"
            className="hero-bg-image"
            loading="eager"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-simple">Simple</span>
            <span className="title-solutions">solutions for every</span>
            <span className="title-window">window.</span>
          </h1>

          <p className="hero-subtitle">
            Premium curtains, blinds, and drapery crafted for your home.
            <br />
            Free consultation. Same-day appointments available.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Book Free Consultation</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Collections Section */}


      <section className='collections-section'>
              <div className="about-content products">
        <h1>Our Products</h1>
      </div>
        <div className='collections-grid' ref={scrollRef}>
            {products.map((product) => (

          <div className='collection-items'>
            <img src={product.image}/>
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
      </section>

      {/* Why Us Section */}
      <section className="why-us-section" aria-label="Why choose us">
        <div className="section-container">
          <div className="why-us-header">
            <h2>Why Choose Us</h2>
          </div>

          <div className="why-us-grid">
            {/* Step 1 */}
            <div className="why-us-step">
              <div className="step-image-wrapper step-1">
                <div className="step-number-overlay">01
                  <div className="step-content">
                    <h3>Book Your Free Consultation</h3>
                    <p>Book a free, no-obligation consultation where our expert visits your space, understands your needs, and guides you through the best window solutions.</p>
                  </div></div>
                <img
                  src="/images/Frame 162.png"
                  alt="Consultation meeting with design expert"
                  loading="lazy"
                  className="step-image"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="why-us-step">
              <div className="step-image-wrapper">
                <div className="step-number-overlay">02
                  <div className="step-content">
                    <h3>Get Measured</h3>
                    <p>We take accurate, professional measurements to ensure your curtains or blinds fit perfectly and function flawlessly.</p>
                  </div>
                </div>
                <img
                  src="/images/why-us-2.jpg"
                  alt="Professional measuring window dimensions"
                  loading="lazy"
                  className="step-image"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="why-us-step">
              <div className="step-image-wrapper">
                <div className="step-number-overlay">03
                  <div className="step-content">
                    <h3>Choose Your Fabric</h3>
                    <p>Select from a curated range of premium fabrics, textures, and styles, with expert advice to match your interiors and preferences.</p>
                  </div>
                </div>
                <img
                  src="/images/why-us-3.jpg"
                  alt="Various fabric samples to choose from"
                  loading="lazy"
                  className="step-image"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="why-us-step">
              <div className="step-image-wrapper step-4">
                <div className="step-number-overlay">04
                  <div className="step-content">
                    <h3>Quick Installation</h3>
                    <p>Once ready, our team handles a smooth and timely installation, ensuring a clean finish and minimal disruption to your space.</p>
                  </div>
                </div>
                <img
                  src="/images/why-us-4.jpg"
                  alt="Professional installing curtains"
                  loading="lazy"
                  className="step-image"
                />
              </div>
            </div>
          </div>

          <div className='promo-banner'>
            <div className='promo-step-1'>
              <h1>“Proudly Tailored in UAE”</h1>
            </div>
            <div className='promo-step-2'>
              <h2>Book you’r slot now</h2>
              <button className='btn btn-secondary'>Book Now</button>
            </div>
          </div>

        </div>
      </section>

      
      <Bottom />

    </div>
  );
}