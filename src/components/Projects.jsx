import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ id }) => {
  const projectsList = [
    {
      title: 'Oceanic Monitoring',
      img: '/images/oceanic.png',
      desc: 'Dynamic web application for wave monitoring and SIH alerts. Integrated INCOIS and Open-meteo APIs with Power BI analytics.',
      explanation: 'Designed to provide real-time oceanographic data alerts. The platform uses Next.js for SSR and MongoDB for archiving historical trend data.'
    },
    {
      title: 'AnimAI Identification',
      img: '/images/animai.png',
      desc: 'Web-based AI application identifying animal species from live camera input using CNN models.',
      explanation: 'Implemented a deep learning model using TensorFlow/CNN. The app features a live vision stream that classifies species instantly.'
    },
    {
      title: 'Veraxon Proctoring',
      img: '/images/veraxon.png',
      desc: 'Secure online exam proctoring system with Google Vision AI for real-time monitoring.',
      explanation: 'Built to ensure academic integrity. It monitors user behavior via webcam, detecting multiple faces or unauthorized objects.'
    }
  ];

  return (
    <section id={id}>
      <h2 className="section-title">Latest <span>Innovations</span></h2>
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="explanation">
                <strong>Detailed Explanation:</strong> {project.explanation}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
