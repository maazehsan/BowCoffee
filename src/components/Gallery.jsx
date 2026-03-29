import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import interior1 from '../assets/interior1.jpeg';
import interior2 from '../assets/interior2.jpeg';
import exterior from '../assets/exterior.jpeg';
import interior3 from '../assets/interior3.jpeg';
import interior4 from '../assets/interior4.jpeg';
import interior5 from '../assets/interior5.jpeg';

const Gallery = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const images = [
    interior1,
    interior2,
    interior3,
    exterior,
    interior4,
    interior5
  ];

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery-heading playfair">Step Inside</h2>
      
      <div style={{ position: 'relative', maxWidth: '100%', margin: '0 auto' }}>
        {canScrollLeft && (
          <button 
            onClick={scrollLeft}
            style={{ 
              position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', 
              zIndex: 10, background: 'var(--bow-blue)', color: 'white', borderRadius: '50%', 
              padding: '0.8rem', display: 'flex', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        <div 
          ref={carouselRef}
          onScroll={checkScroll}
          style={{ 
            overflowX: 'auto', 
            overflowY: 'hidden', 
            padding: '1rem 0',
            scrollbarWidth: 'none', // Hide scrollbar Firefox
            msOverflowStyle: 'none', // Hide scrollbar IE/Edge
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth'
          }}
          className="hide-scrollbar"
        >
          <div style={{ display: 'flex', gap: '1.5rem', width: 'max-content' }}>
            {images.map((src, i) => (
              <motion.div 
                key={i} 
                className="gallery-item"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ 
                  width: 'calc(33.333vw - 2.5rem)', 
                  minWidth: '280px', 
                  maxWidth: '400px',
                  scrollSnapAlign: 'start' 
                }}
              >
                <img src={src} alt={`Interior ${i}`} className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', aspectRatio: '4/3' }} />
              </motion.div>
            ))}
          </div>
        </div>

        {canScrollRight && (
          <button 
            onClick={scrollRight}
            style={{ 
              position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', 
              zIndex: 10, background: 'var(--bow-blue)', color: 'white', borderRadius: '50%', 
              padding: '0.8rem', display: 'flex', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
