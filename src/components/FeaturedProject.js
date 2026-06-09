import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../App.css';

import { featuredProjectId, projects } from '../data/projects';
import ImageModal from './ImageModal';

function FeaturedProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredProject =
    projects.find((p) => p.id === featuredProjectId) || projects[0];

  return (
    <>
    <motion.section
      className="featured-project-section"
      id="featured"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="space-title featured-title">⭐ Featured Project</h2>

      <motion.div 
        className="featured-project-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="featured-image-wrapper">
          <motion.img 
            src={featuredProject.image} 
            alt={featuredProject.title}
            className="featured-image"
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: 'zoom-in' }}
            whileHover={{ scale: 1.05 }}
          />
        </div>

        <div className="featured-content">
          <h3 className="featured-project-title">{featuredProject.title}</h3>
          <p className="featured-description">
            {featuredProject.description}
          </p>

          <div className="featured-tech">
            {featuredProject.technologies.map((tech, idx) => (
              <motion.span 
                key={idx} 
                className="featured-tech-badge"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="featured-buttons">
            <motion.a 
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-button github-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            {featuredProject.demo && (
              <motion.a 
                href={featuredProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-button live-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.section>
      <ImageModal 
        src={featuredProject.image} 
        alt={featuredProject.title} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default FeaturedProject;
