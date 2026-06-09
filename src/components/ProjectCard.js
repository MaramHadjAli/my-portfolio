import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ImageModal from './ImageModal';

function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const technologies = Array.isArray(project.technologies) ? project.technologies : [];

  return (
    <>
    <motion.div
      className={`project-card${project.highlights?.length ? ' project-card--highlight' : ''}`}
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px #6be3ff, 0 0 30px #9c27b0' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="project-card-image-wrapper">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="project-card-image"
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: 'zoom-in', width: '100%', borderRadius: '8px', marginBottom: '15px', objectFit: 'cover' }}
          whileHover={{ scale: 1.03 }}
        />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {technologies.length > 0 && (
        <div className="project-tech-section">
          <span className="tech-label">Technologies:</span>
          <div className="project-tech-badges">
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                className="project-tech-badge"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      <div className="project-actions">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn github-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> GitHub
          </motion.a>
        )}

        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn demo-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        )}

        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project 🚀 →
          </motion.a>
        )}
      </div>
    </motion.div>
      <ImageModal 
        src={project.image} 
        alt={project.title} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default ProjectCard;
