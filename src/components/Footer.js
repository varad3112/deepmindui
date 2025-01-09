import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Google DeepMind</a>
        <a href="/responsibility">Responsibility & Safety</a>
        <a href="/research">Research</a>
        <a href="/technologies">Technologies</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
      </div>
      <div className="footer-social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
      <p>
        &copy; 2025 DeepMind. All rights reserved. | 
        <a href="/privacy" style={{ color: '#ccc', textDecoration: 'none' }}> Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
