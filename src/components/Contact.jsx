import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-left"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="contact-label subheading">GET IN TOUCH</h4>
          <h2 className="contact-heading playfair">Find Your Next Cup.</h2>
          <p className="contact-desc">
            We'd love to hear from you. Drop by for a fresh batch, or reach out if you have any questions.
          </p>

          <div className="contact-info">
            <div className="info-block">
              <h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Location
              </h5>
              <p>4450 Anas Ibn Malik Rd, Al Malqa.<br />Al Falah, Near, Riyadh 13314</p>
              <p>Riyadh, Saudi Arabia</p>
            </div>
            
            <div className="info-block">
              <h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Hours
              </h5>
              <p>Sat–Thu: 6:30 AM–12:45 PM</p>
              <p>Fri: 1:00 PM–1:45 PM</p>
            </div> 

            <div className="info-block">
              <h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Contact
              </h5>
              <p>hello@bowcaffe.com</p>
              <p>+966 507 578110</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-right"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Replace this iframe src with your actual Google Maps embed link */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0044208185786!2d46.701155774427335!3d24.795302147863463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd8e60acf2a3%3A0xe848447c6407af9f!2sBow%20Specialty%20coffee!5e0!3m2!1sen!2ssa!4v1774793656713!5m2!1sen!2ssa" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '1rem' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Bow Coffee Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
