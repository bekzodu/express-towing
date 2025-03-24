import React from 'react';
import bekxodLogo from '../assets/bekxod-short-logo.svg';
import '../styles/Footer.css';

const Footer = () => {
  const handleLinkClick = (e) => {
    // Get href from the clicked element
    const href = e.currentTarget.getAttribute('href');
    // Smooth scroll functionality
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="footer-logo-icon">🛻</span>
          <div className="footer-logo-text">
            <span className="footer-logo-express">EXPRESSWAY</span>
            <span className="footer-logo-towing">TOWING</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#testimonials" onClick={handleLinkClick}>Testimonials</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>

        <div className="footer-credit">
          <span>developed by</span>
          <a 
            href="https://bekxod.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bekxod-link"
          >
            bekxod.com
            <img src={bekxodLogo} alt="Bekxod Logo" className="bekxod-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 