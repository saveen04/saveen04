import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ id }) => {
  return (
    <section id={id} className="home">
      <motion.div 
        className="content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4>Welcome to my Portfolio</h4>
        <h1>I'm <span>Saveen Kumar</span></h1>
        <p>A Multi-disciplinary Software Engineer specializing in MERN Stack, AI Vision, and Cross-Platform Mobile Applications. Building scalable solutions for the future.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#projects" className="btn">Explore Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </motion.div>
      <motion.div 
        className="image-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src="/images/Myself.png" alt="Saveen Kumar" />
      </motion.div>
    </section>
  );
};

export default Hero;
