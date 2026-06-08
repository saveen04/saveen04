import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ id }) => {
  const experiences = [
    {
      year: '2025',
      title: 'Full Stack Developer Intern',
      org: 'Algo Tutor & Better Tomorrow',
      desc: 'Focused on building secure MERN stack applications. Implemented JWT authentication, optimized database queries in MongoDB, and collaborated on high-performance API structures.'
    },
    {
      year: '2024 - Present',
      title: 'Competitive Programmer',
      org: 'Self-Driven',
      desc: 'Maintaining a strong focus on algorithmic problem solving. Achieved Bronze level on CodeChef and solved 200+ problems on LeetCode with a consistent rating of 1355.'
    }
  ];

  return (
    <section id={id}>
      <h2 className="section-title">Professional <span>Experience</span></h2>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span>{exp.year}</span>
            <h3>{exp.title}</h3>
            <p><strong>{exp.org}</strong></p>
            <p style={{ marginTop: '1rem' }}>{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
