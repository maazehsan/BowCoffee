import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.jpeg';

const Hero = () => {
  const headlineWords = "Crafted With Purpose.".split(" ");

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-content">
          <motion.h1 
            className="hero-headline"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word, i) => (
              <motion.span 
                key={i}
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <div className="hero-divider">
            <span className="arrow-motif">←</span>
            <span></span>
          </div>

          <motion.p 
            className="hero-subline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Every cup tells a story. Come find yours.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <button className="btn-primary">Explore Menu</button>
            <button className="btn-outline">Our Story</button>
          </motion.div>
        </div>
      </div>
      <div className="hero-right">
        <motion.img 
          src={heroImg} 
          alt="Coffee in a cup" 
          className="hero-img"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default Hero;
