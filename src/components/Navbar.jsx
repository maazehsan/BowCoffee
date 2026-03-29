import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <img src={logo} alt="Bow Coffee Logo" style={{ height: '48px' }} />
        </div>

        <div className="nav-links">
          <a href="#story">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#matcha">Matcha</a>
          <a href="#gallery">Gallery</a>
          <a href="#instagram">Instagram</a>
        </div>

        <div className="nav-cta">
          <button className="cta-button">Visit Us</button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <button 
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none' }} 
              onClick={() => setIsOpen(false)}
            >
              <X size={28} color="var(--bow-espresso)" />
            </button>
            <a href="#story" onClick={() => setIsOpen(false)}>Our Story</a>
            <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#matcha" onClick={() => setIsOpen(false)}>Matcha</a>
            <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#instagram" onClick={() => setIsOpen(false)}>Instagram</a>
            <button className="cta-button">Visit Us</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
