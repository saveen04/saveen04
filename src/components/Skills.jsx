import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ id }) => {
  const skillsList = [
    { icon: 'fab fa-react', title: 'Web Stack', desc: 'Next.js, React, Node.js, MongoDB' },
    { icon: 'fas fa-brain', title: 'AI & Vision', desc: 'CNN Model Training, Vision AI, Python' },
    { icon: 'fab fa-google', title: 'Mobile Dev', desc: 'Flutter, Firebase, Dart' },
    { icon: 'fas fa-code-branch', title: 'Core Concepts', desc: 'DSA, OOP, System Architecture' }
  ];

  return (
    <section id={id}>
      <h2 className="section-title">My <span>Expertise</span></h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ translateY: -12, scale: 1.03 }}
          >
            <i className={skill.icon}></i>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
