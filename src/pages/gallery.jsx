import { useState } from 'react';
import Lightbox from './Lightbox';
import Header from '../components/Header';
import Bottom from '../components/bottom';

function App() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const imageIds = [
        "11xUC0bqBtuBkNegWpHaEwLT8uI4t-iK7",
        "14W9P1WAN3cbkxXYXMzS6iMJVYpB3YApR",
        "1FX5uLWQjsB_WXJ7ED4m-7pa23SHIPgxt",
        "1GFyEho0_BhaNLIKqZ_6F-B1QVfDoHBMB",
        "1HtgpYgMvMWSlCTAgDbYouBxfPtIa5yJZ",
        "1K2DHxdH0rDGRB13Qjvn2xklw3k7otfiM",
        "1KKFiv3STDJQrVVU6kkdasAhbEoHpqW1M",
        "1Lo9Fu7Lcm94YmbzcYK8SHtHKGLdNDwZ3",
        "1_E0BCx9sdWNn9By3zpyfQdcDLN_F5d3E",
        "1aPpB_QsiKiDNAIoCamjgaXcTQ4TqdfDO",
        "1iPvZAsPxGRSTc37SmAufXvsCAT4cAqAx",
        "1kCvEQttKAq4PndlHRosrYr4vtHSeK03i",
        "1mFZV-IHnspg6NW8aWPvXs33koeDgaZZL",
        "1on-vjubNiE8bO_zIWcdQ3SHLFbg10VW5",
        "1pSS1jm3wq0FMHO6X9WD2vjycFLh9pfjE",
        "1q78z7pCU1CzdKZx6MFksAAWbbCJSGr22",
        "1q8u4p_4FydvgRvYQAmjc-qbF8soxlSlU",
        "1x7yjFp1Um6kPsWjEFyWlRgoumLmyLnRP",
        "1zZJbCnZYVAXC573agvwg83tZrKjE9W8a"
    ];


    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setIsLightboxOpen(true);
    };

    const images = imageIds.map(
  id => `https://drive.google.com/thumbnail?id=${id}&sz=w2000`
);


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
                    {imageIds.map((id, index) => (
                        <div
                            key={id}
                            className="image-item"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`}
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