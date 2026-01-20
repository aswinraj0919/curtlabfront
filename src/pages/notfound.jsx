import React, { useState, useEffect } from 'react';
import Logo from '../components/logo'
import './style.css';
import { Link, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <div className="error-header">
                <h1>404 - Page Not Found</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
            </div>

            <div className="error-content">
                <Logo />
                <div className="suggestions">
                    <h2>We can't find that page</h2>
                    <h3>Here are some helpful links:</h3>
                    <div className="action-buttons">
                        <Link to="/">
                        <button className="btn btn-primary">
                            <i className="fas fa-home"></i> Go to Home Page
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;