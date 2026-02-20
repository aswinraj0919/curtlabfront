import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Bottom from '../components/bottom';
import './style.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const ref = useRef(null);
  const [height, setHeight] = useState('auto');
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (ref.current) {
      const contentHeight = ref.current.scrollHeight;
      setHeight(`${contentHeight + 100}px`);
    }
  }, []);


  const products = [
    { id: 1, name: 'Sheer Curtains', content: 'Sheer curtains are crafted from lightweight, translucent fabrics that gently filter sunlight, creating a calm and welcoming atmosphere. They soften natural light, offering daytime privacy without blocking your outdoor view. Ideal for living rooms, dining areas, and balconies, sheer curtains add elegance and movement to any space while complementing any interior style.', images: ['/images/product-1.jpg'] },
    { id: 2, name: 'Blackout Curtains', content: 'Blackout curtains are designed to completely block outside light and reduce noise, ensuring privacy and better sleep quality. Made with multi-layered or coated fabrics, they also provide insulation—keeping rooms cooler in summer and warmer in winter. Perfect for bedrooms, media rooms, and offices, they combine comfort, practicality, and a refined appearance.', images: ['/images/product-2.jpg'] },
    { id: 9, name: 'Panel Blinds', content: 'Panel Blinds feature wide fabric panels that slide smoothly across a track, creating a contemporary look suitable for large windows, sliding doors, and partitions. They are perfect for open-plan spaces, offering flexible light and privacy control. Available in various textures, patterns, and opacities, panel blinds add a sophisticated architectural element while enhancing the overall flow and balance of the interior design.', images: ['/images/product-9.jpg'] },
    { id: 10, name: 'Zebra Blinds', content: 'Zebra Blinds, also known as day-and-night blinds, combine alternating horizontal sheer and solid fabric stripes that can be adjusted to control light and privacy with precision. When aligned, they let soft light in; when overlapped, they offer complete privacy. These blinds are highly functional, stylish, and perfect for modern interiors where you want both brightness and seclusion at your fingertips.', images: ['/images/product-10.jpg'] },
    { id: 11, name: 'Wooden Blinds', content: 'Crafted from premium natural or faux wood, Wooden Blinds bring warmth, character, and timeless elegance to any space. Their adjustable slats allow precise control over light and privacy, while the rich wood tones create a cozy, refined atmosphere. Ideal for living rooms, offices, and classic interiors, they combine durability with natural beauty, adding an earthy, organic touch to contemporary décor.', images: ['/images/product-11.jpg'] },
  ];

  const scrollRef = useRef(null);

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

  const handlePopupOutsideClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      handleClosePopup();
    }
  };
  const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    handleClosePopup();
  };

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


  const [homeCurrentImageIndex, setHomeCurrentImageIndex] = useState(0);

  const homeImages = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHomeCurrentImageIndex((prevIndex) =>
        prevIndex === homeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [homeImages.length]);


  return (
    <div className={`home-page ${pageLoaded ? 'fade-in' : ''}`}>
      <Header />

      {/* Hero Section */}
      <section className="hero-section" aria-label="Hero section">
        <div className="hero-background">
          {homeImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index + 1}`}
              className={`main-bg-image ${index === homeCurrentImageIndex ? 'active' : ''}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-window">Simple <br />
              solution
              <br />for  every
              window.</span>
          </h1>

          <p className="hero-subtitle">
            Premium curtains, blinds, and drapery crafted for your home.
            Free consultation. Same-day appointments available.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleBookNow}>Book Free Consultation</button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className='collections-section'>
        <div className="about-content products">
          <h1>Our Products</h1>
        </div>
        <div className='collections-grid' ref={scrollRef}>
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
                          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        className="product-nav-btn next-btn"
                        onClick={(e) => handleNextImage(e, product.id)}
                        aria-label="Next image"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                <div className="collection-content home">
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
      </section>

      <div className="view-more">
        <Link
          to="/products"
        >
          <button className="btn btn-secondary view-more">View More</button>
        </Link>
      </div>

      {/* Why Us Section */}
      <section className="why-us-section" aria-label="Why choose us">
        <div className=" about-content products ">
          <h1>Why Us ?</h1>
        </div>
        <div className="section-container">

          <div className="why-us-grid">
            {/* Step 1 */}
            <div className="why-us-step">
              <div className="step-image-wrapper step-1">
                <div className="step-number-overlay">01
                  <div className="step-content">
                    <h3>Book Your Free <br /> Consultation</h3>
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
              <div className="step-image-wrapper step-2">
                <div className="step-number-overlay">02
                  <div className="step-content">
                    <h3>Get <br />Measured</h3>
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
                    <h3>Choose <br />Your Fabric</h3>
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
                    <h3>Quick <br /> Installation</h3>
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

            <svg width="237" height="5" viewBox="0 0 237 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="237" height="5" rx="2.5" fill="#CCCBC0" />
            </svg>

            <h1>Proudly Tailored in UAE</h1>

            <svg width="237" height="5" viewBox="0 0 237 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="237" height="5" rx="2.5" fill="#CCCBC0" />
            </svg>

            <button className='btn btn-secondary promo' onClick={handleBookNow}>Book your slot <svg width="15" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.283911" y1="4.5425" x2="17.8864" y2="4.5425" stroke="#253f4b" stroke-width="0.567822" stroke-linecap="round" />
              <line x1="14.0293" y1="0.283936" x2="18.1704" y2="4.425" stroke="#253f4b" stroke-width="0.567822" stroke-linecap="round" />
              <line x1="18.1704" y1="4.6603" x2="14.0293" y2="8.80137" stroke="#253f4b" stroke-width="0.567822" stroke-linecap="round" />
            </svg>
            </button>

          </div>
        </div>
      </section>

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
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      className="popup-nav-btn next-btn"
                      onClick={handleNextImage}
                      aria-label="Next image"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              </div>
            </div>
          </div>
        </div>
      )}

      <Bottom />
    </div>
  );
}