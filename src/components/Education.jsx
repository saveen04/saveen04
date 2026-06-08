import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ id }) => {
  const educationList = [
    {
      year: '2023 - 2027',
      title: 'B.E. Computer Science Engineering',
      desc: 'Sri Eshwar College of Engineering | CGPA: 6.8'
    },
    {
      year: '2021 - 2023',
      title: 'HSC (12th Grade)',
      desc: 'Kshatriya Vidhyasala EM School | Percentage: 65.2'
    },
    {
      year: '2020 - 2021',
      title: 'SSLC (10th Grade)',
      desc: 'Kshatriya Vidhyasala EM School | Percentage: 71.5%'
    }
  ];

  return (
    <section id={id}>
      <h2 className="section-title">Academic <span>Background</span></h2>
      <div className="timeline-container">
        {educationList.map((edu, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span>{edu.year}</span>
            <h3>{edu.title}</h3>
            <p>{edu.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
