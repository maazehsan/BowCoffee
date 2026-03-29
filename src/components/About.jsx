import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpeg';

const About = () => {
  return (
    <section id="story" className="about">
      <motion.div 
        className="about-img-container"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="about-img-wrapper">
          <img 
            src={aboutImg} 
            alt="Interior of Bow Coffee" 
            className="about-img" 
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="about-content"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="about-heading playfair">More Than Coffee.</h2>
        <p className="about-text">
          Bow Coffee is a sanctuary for those who appreciate the finer details. 
          Nestled in the heart of Riyadh, we brew intentional, artisanal coffee 
          designed to pause time. Our space reflects the soul of a boutique—warm, 
          inviting, and deeply rooted in community. 
        </p>
        <div className="about-stats">
          <span className="arrow-motif">←</span> Handcrafted Drinks 
          <span className="arrow-motif">|</span> 
          <span className="arrow-motif">←</span> Cozy Interiors 
          <span className="arrow-motif">|</span> 
          <span className="arrow-motif">←</span> Daily Fresh Batches
        </div>
      </motion.div>
    </section>
  );
};

export default About;
