import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import pinkLaptop from '../assets/pink-laptop.png';
import '../App.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'R&D Full Stack Developer Intern',
      type: 'Internship @ Exocoms Group • June 2026 – Present',
      description: 'Developed full-stack features for enterprise applications using Python, JavaScript, XML, and PostgreSQL. Designed backend services, relational database models, and REST API integrations, customized Odoo-based solutions, and worked in Agile cycles with Git, GitHub, and Jira.',
      technologies: ['Python', 'JavaScript', 'PostgreSQL', 'Odoo', 'Git', 'Jira'],
      icon: FaLaptopCode,
      color: '#c94f7c'
    },
    {
      id: 2,
      title: 'Front-end & Mobile Developer Intern',
      type: 'Internship @ MCM Sol • August 2025',
      description: 'Contributed to the development of a mobile application based on Figma mockups using Angular and NativeScript. Implemented UI components, evaluated layout performance tradeoffs (StackLayout vs CollectionView vs ListView), and optimized the app for stability and performance.',
      technologies: ['Angular', 'NativeScript', 'TypeScript', 'GitHub'],
      icon: FaLaptopCode,
      color: '#dd0031'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 1, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className="experience-section"
      id="experience"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="space-title experience-title">
        <img src={pinkLaptop} alt="" className="experience-mark" />
        Experience & Projects
      </h2>
      
      <motion.div 
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp) => {
          const IconComponent = exp.icon;
          return (
            <motion.div
              key={exp.id}
              className="experience-card"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="exp-icon-container" style={{ color: exp.color }}>
                <IconComponent size={40} />
              </div>
              
              <div className="exp-content">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-type">{exp.type}</p>
                <p className="exp-description">{exp.description}</p>
                
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <motion.span 
                      key={idx} 
                      className="tech-badge"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default Experience;
