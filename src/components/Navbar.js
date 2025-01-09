import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Google DeepMind</div>
      
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          {/* Dropdown for About */}
          <li className="dropdown">
            <a href="#about">About</a>
            <div className="dropdown-content">
              <a href="#team">Team</a>
              <a href="#history">History</a>
              <a href="#mission">Mission</a>
            </div>
          </li>

          {/* Dropdown for Research and Technologies */}
          <li className="dropdown">
            <a href="#research-technologies">
              <span>Research</span> <span>Technologies</span>
            </a>
            <div className="dropdown-content">
              <a href="#ai">AI</a>
              <a href="#ml">Machine Learning</a>
              <a href="#neural-networks">Neural Networks</a>
            </div>
          </li>

          {/* Dropdown for Discover */}
          <li className="dropdown">
            <a href="#discover">Discover</a>
            <div className="dropdown-content">
              <a href="#projects">Projects</a>
              <a href="#papers">Research Papers</a>
              <a href="#events">Events</a>
            </div>
          </li>
        </ul>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="search-btn">🔍</button>
      </div>

      <div className="gemini-link">
        <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s" alt="Gemini" className="gemini-icon" />
        </a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
