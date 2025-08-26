import React, { useState } from 'react';
import { motion } from 'framer-motion';
import planet1 from '../assets/images/planets/image-from-rawpixel-id-6731107-png.png';
import planet2 from '../assets/images/planets/image-from-rawpixel-id-6293603-png.png';
import planet3 from '../assets/images/planets/image-from-rawpixel-id-16838542-png.png';

import '../App.css';

const projects = [
  {
    id: 1,
    title: 'Web Application Prototype',
    description: 'A fully web app prototype built with Figma.',
    image: require('../assets/images/project1.png'),
    link: 'https://www.figma.com/design/9wRw5H5Mr0BWFYpYJ1C60k/Desktop-sign-up-and-login-pages-by-EditorM--Community-?node-id=106-116&t=RnJEDgOB9Jz5cDFt-1'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Showcasing my work with animations, smooth navigation, and space style.',
    image: require('../assets/images/project2.png'),
    link: 'https://github.com/yourusername/portfolio'
  },
  {
    id: 3,
    title: 'Garage Management\nApp',
    description: 'A robust garage management system with backend and frontend integration.',
    image: require('../assets/images/project3.png'),
    link: 'https://github.com/yourusername/garage-management'
  }
];

const planetImages = [planet1, planet2, planet3];

const fixedPositions = [
  { top: 10, left: 15 },
  { top: 25, left: 70 },
  { top: 50, left: 30 },
  { top: 65, left: 80 },
  { top: 75, left: 45 },
  { top: 40, left: 55 },
];

function getPlanetsWithFixedPositions() {
  return fixedPositions.map((pos, index) => ({
    image: planetImages[index % planetImages.length],
    top: pos.top + (Math.random() * 10 - 5),
    left: pos.left + (Math.random() * 10 - 5),
    size: Math.random() * 50 + 40,
  }));
}

const randomPlanets = getPlanetsWithFixedPositions();

function Projects() {
  const [zoomedProject, setZoomedProject] = useState(null);

  const toggleZoom = (id) => {
    if (zoomedProject === id) {
      setZoomedProject(null);
    } else {
      setZoomedProject(id);
    }
  };

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="space-title projects-title">My Projects</h2>

      {randomPlanets.map((planet, idx) => (
        <img
          key={idx}
          src={planet.image}
          alt="Planet"
          className="space-object"
          style={{
            position: 'absolute',
            top: `${planet.top}%`,
            left: `${planet.left}%`,
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            pointerEvents: 'none',
            opacity: 0.8,
            animation: `orbit ${15 + Math.random() * 10}s linear infinite`
          }}
        />
      ))}

      <div className="projects-gallery">
        {projects.map((p, i) => (
          <motion.img
            key={p.id}
            src={p.image}
            alt={p.title}
            className="floating-image"
            onClick={() => toggleZoom(p.id)}
            style={{ cursor: 'pointer' }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
              scale: zoomedProject === p.id ? 1.5 : 1,
              zIndex: zoomedProject === p.id ? 10 : 1,
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
              ease: 'easeInOut',
              scale: { duration: 0.3 },
            }}
          />
        ))}
      </div>

      <div className="projects-container">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #6be3ff, 0 0 30px #9c27b0' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project 🚀 →
            </a>
          </motion.div>
        ))}
      </div>

    </motion.section>
  );
}

export default Projects;
