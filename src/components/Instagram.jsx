import React from 'react';
import { motion } from 'framer-motion';
import insta1 from '../assets/insta1.jpeg';
import insta2 from '../assets/insta2.jpeg';
import insta3 from '../assets/insta3.jpeg';
import insta4 from '../assets/insta4.jpeg';

const InstaIcon = ({ size = 24, color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Instagram = () => {
  const posts = [
    insta1,
    insta2,
    insta3,
    insta4
  ];

  return (
    <section id="instagram" className="instagram">
      <h2 className="insta-heading playfair">Follow The Ritual</h2>
      <a href="https://www.instagram.com/bowcafe_" className="insta-subline">@bowcafe_</a>

      <motion.div 
        className="insta-grid"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {posts.map((src, i) => (
          <motion.div 
            key={i} 
            className="insta-item"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } }
            }}
          >
            <img src={src} alt={`Instagram Post ${i}`} className="insta-img" />
            <div className="insta-overlay">
              <InstaIcon size={40} color="white" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <a href="https://www.instagram.com/bowcafe_" className="btn-white-outline">Follow us on Instagram</a>
    </section>
  );
};

export default Instagram;
