import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Placeholder for actual logo */}
        <h2 className="playfair" style={{ color: 'var(--bow-cream)', fontSize: '2rem' }}>BowCoffee</h2>
      </div>

      <div className="footer-divider">
        <span className="arrow-motif">←</span>
      </div>

      <div className="footer-content">
        <div className="footer-col">
          <h4>About Bow</h4>
          <p>An artisan café rooted in quality and community. Where every detail is crafted with purpose.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#story">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#matcha">Matcha</a>
          <a href="#gallery">Gallery</a>
        </div>
        <div className="footer-col">
          <h4>Visit Us</h4>
          <p>Riyadh, Saudi Arabia</p>
          <p>Sat–Thu: 6:30 AM–12:45 PM<br/>Fri: 1:00 PM–1:45 AM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Bow Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
