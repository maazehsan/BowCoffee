import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Matcha from './components/Matcha';
import Gallery from './components/Gallery';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Matcha />
      <Gallery />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
