import React from 'react';
import { motion } from 'framer-motion';
import interior1 from '../assets/interior1.jpeg';
import interior2 from '../assets/interior2.jpeg';
import exterior from '../assets/exterior.jpeg';

const Gallery = () => {
  const images = [
    interior1,
    interior2,
    exterior
  ];

  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery-heading playfair">Step Inside</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <motion.div 
            key={i} 
            className="gallery-item"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src={src} alt={`Interior ${i}`} className="gallery-img" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
