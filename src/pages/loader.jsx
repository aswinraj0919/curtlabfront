import { useEffect } from "react";
import './style.css';

export default function Loader() {

    // loderImg disappear after 5 sec
    
      useEffect(() => {
        const loaderImg = document.querySelector('.loaderImg');
    
        // Set transition first
        loaderImg.style.transition = 'opacity 1s ease';
    
        setTimeout(() => {
          // First fade out
          loaderImg.style.opacity = '0';
    
          // Then hide after transition completes
          setTimeout(() => {
            loaderImg.style.display = 'none';
          }, 500); // Match this with transition duration
        }, 5000);
    
        // Cleanup function
        return () => {
          // Clear timeouts if component unmounts
        };
      }, []); // Empty dependency array
    
    return (
        <div>
            <video className="loaderImg" src="/images/loader.mp4" autoPlay muted></video>
        </div>
    )
};