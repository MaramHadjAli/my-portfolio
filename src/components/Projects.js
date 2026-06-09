import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function Projects() {
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

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </motion.section>
  );
}

export default Projects;
