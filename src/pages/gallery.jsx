import { useState } from 'react';
import Lightbox from './Lightbox';
import Header from '../components/Header';
import Bottom from '../components/bottom';

function App() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [
        'public/images/product-1.jpg',
        'public/images/product-2.jpg',
        'public/images/product-3.jpg',
        'public/images/product-4.jpg',
        'public/images/product-5.jpg',
        'public/images/product-6.jpg',
        'public/images/product-7.jpg',
        'public/images/product-8.jpg',
        'public/images/product-9.jpg',
        'public/images/product-10.jpg',
        'public/images/product-11.jpg',
        'public/images/product-12.jpg',
        'public/images/product-13.jpg',
        'public/images/product-14.jpg',

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