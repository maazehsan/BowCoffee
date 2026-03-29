import React from 'react';
import { motion } from 'framer-motion';
import karakChaiImg from '../assets/karakChai.png';
import latteImg from '../assets/latte.png';
import hotChocolateImg from '../assets/hotChocolate.png';

const menuItems = [
  {
    id: 1,
    name: 'Karak Chai',
    price: 'SAR 18',
    desc: 'Spiced black tea with cardamom and milk.',
    image: karakChaiImg
  },
  {
    id: 2,
    name: 'Latte',
    price: 'SAR 18',
    desc: 'Smooth espresso balanced with steamed milk.',
    image: latteImg
  },
  {
    id: 3,
    name: 'Hot Chocolate',
    price: 'SAR 22',
    desc: 'Rich, single-origin melted chocolate.',
    image: hotChocolateImg
  }
];

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <h4 className="menu-label subheading">OUR MENU</h4>
      <h2 className="menu-heading playfair">Sip Something Special</h2>

      <motion.div 
        className="menu-grid"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {menuItems.map((item) => (
          <motion.div 
            key={item.id} 
            className="menu-card"
            variants={{
              hidden: { y: 50, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } }
            }}
          >
            <div className="menu-img-wrapper">
              <img src={item.image} alt={item.name} className="menu-img" />
              <div className="menu-overlay">
                <h3 className="playfair" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{item.name}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{item.desc}</p>
              </div>
            </div>
            <div className="menu-info">
              <h3 className="menu-title playfair">{item.name}</h3>
              <span className="menu-price">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Menu;
