import React from 'react';
import { motion } from 'framer-motion';

const About = ({ id }) => {
  return (
    <section id={id} className="about">
      <h2 className="section-title">About <span>Me</span></h2>
      <div className="about-content">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, rotateY: 30 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ 
            perspective: 1000,
            rotateY: -10,
            rotateX: 5,
            transition: { duration: 0.4 }
          }}
        >
          <img src="/images/Me.jpg" alt="Profile" />
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>I am a B.E. Computer Science student at Sri Eshwar College of Engineering. My goal is to bridge the gap between complex AI algorithms and intuitive user interfaces.</p>
          <p>With hands-on experience in Full Stack development and a background in competitive programming, I bring a logical and innovative approach to every project.</p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/saveen04" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/saveen-kumar-12b65b284" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://leetcode.com/u/Saveen_jr/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="fas fa-terminal"></i> LeetCode
            </a>
            <a href="https://www.instagram.com/____.saveen.____" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
