import { useState, useEffect } from 'react';
import './style.css';

function Lightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => onClose?.(), 200); // Allow for fade-out animation
  };

  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay" onClick={handleClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={handleClose}>
          &times;
        </button>
        
        <button className="lightbox-nav prev" onClick={prevImage}>
          &#10094;
        </button>
        
        <div className="image-container">
          <img 
            src={images[currentIndex]} 
            alt={`Lightbox image ${currentIndex + 1}`}
            className="lightbox-image"
          />
          {images.length > 1 && (
            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
        
        <button className="lightbox-nav next" onClick={nextImage}>
          &#10095;
        </button>
        
        {images.length > 1 && (
          <div className="thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
