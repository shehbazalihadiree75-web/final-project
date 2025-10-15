import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Thalay Broq Events</h3>
            <p>Promoting the rich cultural heritage and tourism of Skardu and Ghanche through memorable events and festivals.</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#booking">Book Tickets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>📞 0342-0668922 / 0355-4294764</li>
              <li>✉️ shehbazalihadiree75@gmail.com</li>
              <li>✉️ Rsyed3466@gmail.com</li>
              <li>📍 Skardu, Gilgit-Baltistan</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 Thalay Broq Event & Festival Management. Developed by Shehbaz Ali & Syed Rizwan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;