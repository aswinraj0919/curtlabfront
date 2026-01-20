import React, { useState, useEffect } from 'react';
import './style.css';

const NotFoundPage = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [suggestedHomeUrl, setSuggestedHomeUrl] = useState('');

  // Simulate subdomain detection - in a real app, you'd get this from window.location
  useEffect(() => {
    // Get the current URL
    const url = window.location.hostname;
    setCurrentUrl(url);
    
    // Check if we're on a subdomain
    const parts = url.split('.');
    
    // For localhost or IP addresses, just use the current URL as home
    if (parts.length <= 2 || parts.includes('localhost') || /\d+\.\d+\.\d+\.\d+/.test(url)) {
      setSuggestedHomeUrl('/');
    } else {
      // For subdomains, suggest the main domain
      // This assumes format: subdomain.example.com
      const mainDomain = parts.slice(-2).join('.'); // Get last two parts
      setSuggestedHomeUrl(`https://${mainDomain}`);
    }
  }, []);

  const handleGoHome = () => {
    // In a real app, you would use React Router or similar for navigation
    // For this example, we'll simulate navigation
    window.location.href = suggestedHomeUrl;
  };

  const handleGoBack = () => {
    window.history.back();
  };

  // Check if we're on a subdomain
  const isSubdomain = () => {
    if (!currentUrl) return false;
    
    const parts = currentUrl.split('.');
    // A subdomain has at least 3 parts and isn't localhost or an IP address
    return parts.length >= 3 && 
           !parts.includes('localhost') && 
           !/\d+\.\d+\.\d+\.\d+/.test(currentUrl);
  };

  return (
    <div className="not-found-container">
      <div className="error-header">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
      
      <div className="error-content">
        <div className="error-visual">
          <div className="error-number">404</div>
          <div className="error-illustration">
            <div className="lost-illustration">
              <div className="compass">
                <div className="compass-needle"></div>
              </div>
              <div className="map">
                <div className="map-mark"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="error-details">
          <div className="error-message">
            <h2>We can't find that page</h2>
            <p>
              You might have typed the wrong address, or the page may have moved.
              {isSubdomain() && (
                <>
                  <br />
                  <strong>You're currently on a subdomain:</strong> {currentUrl}
                </>
              )}
            </p>
            
            <div className="url-display">
              <div className="url-label">Requested URL:</div>
              <div className="url-value">{window.location.href}</div>
            </div>
            
            <div className="suggestions">
              <h3>Here are some helpful links:</h3>
              <div className="action-buttons">
                <button className=" notfound-btn btn-primary" onClick={handleGoHome}>
                  <i className="fas fa-home"></i> Go to Home Page
                </button>
                <button className="notfound-btn btn-secondary" onClick={handleGoBack}>
                  <i className="fas fa-arrow-left"></i> Go Back
                </button>
                <a href="/contact" className="btn-tertiary">
                  <i className="fas fa-envelope"></i> Contact Support
                </a>
              </div>
              
              {isSubdomain() && (
                <div className="subdomain-note">
                  <i className="fas fa-info-circle"></i>
                  <p>
                    It looks like you're trying to access a subdomain. 
                    The main website is available at: <strong>{suggestedHomeUrl.replace('https://', '')}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;