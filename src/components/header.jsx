import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container header-container">
        <a href="#" className="logo">Skardu<span>Events</span></a>
        <div className="mobile-menu" onClick={toggleMenu}>
          ☰
        </div>
        <nav>
          <ul className={isMenuOpen ? 'show' : ''}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#events" onClick={() => setIsMenuOpen(false)}>Events</a></li>
            <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
            <li><a href="#booking" onClick={() => setIsMenuOpen(false)}>Book Tickets</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;