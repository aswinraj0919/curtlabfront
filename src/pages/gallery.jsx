import { useState } from 'react';
import Lightbox from './Lightbox';
import Header from '../components/Header';
import Bottom from '../components/bottom';

function App() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const imageIds = [
        "11EQb6S00dfr2P1NdhINxFzVkqj5GAmen",
        "13CNrdk_4jXYnafvng-30PExT1b_30wES",
        "13vuA23k6KkYPHVlxhxMQIZq02Qb-nqtK",
        "16p4xbrZn-1VyD6qLCMHNe0m0oElpUX-i",
        "18hJmUTla-V_Bf0pDrQi_POFlIIGWKvqo",
        "1A6mbQyoClO7GLLz4oAsfA_J4_wDgIRm0",
        "1QeRdXrMn0uWAMZtJssO_WA3A_c_2WDsh",
        "1Ua5Cx_UupgX2GZqoJYGIMOtRLyUJqxkp",
        "1aswy8SP-WnHAzr7iZUqEUgAbZtt1Ysya",
        "1bMf0AduCAOwG4XVaCQ_hmxIJ9vRpn0l_",
        "1bRt6biVmMp4S-qp0rzTAsxmY2FD8x-NJ",
        "1dG0jqd5wDadEj3tusQpxb4Fb51Z95a-Q",
        "1o4ebJGHwFcdmfJfD7uyx_9lvxFlfuDMR",
        "1qe6OnjIJvveBeeECVhZ9BjzMR2hgXa5v",
        "1vWCJ37cZ8ENg04Z1OrkQ9RLit57pAS75",
        "1yE1xD9ZKT3pVWQClANM7YBoNfuOUEO9r",
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
        "1x7yjFp1Um6kPsWjEFyWlRgoumLmyLnRP",
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