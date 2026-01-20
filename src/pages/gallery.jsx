import { useState } from 'react';
import Lightbox from './Lightbox';
import Header from '../components/Header';
import Bottom from '../components/bottom';

function App() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [
        '/images/product-1.jpg',
        '/images/product-2.jpg',
        '/images/product-3.jpg',
        '/images/product-4.jpg',
        '/images/product-5.jpg',
        '/images/product-6.jpg',
        '/images/product-7.jpg',
        '/images/product-8.jpg',
        '/images/product-9.jpg',
        '/images/product-10.jpg',
        '/images/product-11.jpg',
        '/images/product-12.jpg',
        '/images/product-13.jpg',
        '/images/product-14.jpg',
    ];

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <div>
            <Header />
            <div className="gallery">

                <div className="about-badge" aria-label="CurtLab since 2025">
                    <div className="badge-line"></div>
                    <div className="badge-text">
                        <h3>Crafted for Every Window</h3>
                        <p>A curated showcase of our custom curtains and blinds,
                            crafted to enhance light, comfort, and style in every space.</p>
                    </div>
                </div>
                <div className="image-grid">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="image-item"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                className="gallery-thumbnail"
                            />
                            <div className="image-overlay">Click to view</div>
                        </div>
                    ))}
                </div>

                {isLightboxOpen && (
                    <Lightbox
                        images={images}
                        initialIndex={selectedImageIndex}
                        onClose={() => setIsLightboxOpen(false)}
                    />
                )}
            </div>
            <Bottom />
        </div>
    );
}

export default App;