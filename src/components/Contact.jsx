import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ id }) => {
  return (
    <section id={id}>
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="contact-text">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        <div className="info-grid">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>saveen.jr2006@gmail.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+91 9042829339</p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Coimbatore, India</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
