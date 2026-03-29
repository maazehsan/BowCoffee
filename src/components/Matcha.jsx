import React from 'react';
import { motion } from 'framer-motion';
import matchaImg from '../assets/matcha.jpeg';

const Matcha = () => {
  return (
    <section id="matcha" className="matcha">
      <div className="matcha-left">
        <div className="matcha-blob-1"></div>
        <div className="matcha-blob-2"></div>
        <motion.div 
          className="matcha-content"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="matcha-badge">NOW SERVING</span>
          <h2 className="matcha-heading playfair">Go Green.</h2>
          <p className="matcha-subline">
            Pure ceremonial matcha, crafted cold or hot — your ritual, your way.
          </p>
          <button className="btn-matcha">Try Matcha</button>
        </motion.div>
      </div>
      <div className="matcha-right">
        <motion.img 
          src={matchaImg}
          alt="Matcha drink" 
          className="matcha-img"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </section>
  );
};

export default Matcha;
