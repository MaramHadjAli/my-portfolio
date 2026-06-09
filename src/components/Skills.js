import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import planet1 from '../assets/images/planets/image-from-rawpixel-id-6731107-png.png';
import planet2 from '../assets/images/planets/image-from-rawpixel-id-6293603-png.png';
import planet3 from '../assets/images/planets/image-from-rawpixel-id-16838542-png.png';
import { projects } from '../data/projects';
import ImageModal from './ImageModal';

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

function Skills() {
  const [selectedImage, setSelectedImage] = useState(null);

  const mainStack = [
    { name: 'React', color: '#61dafb' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'Git', color: '#f1502f' },
    { name: 'Firebase', color: '#ffa726' }
  ];

  const otherSkills = [
    { name: 'Node.js', color: '#68a063' },
    { name: 'MongoDB', color: '#13aa52' },
    { name: 'C++', color: '#00599c' },
    { name: 'Flutter', color: '#02569b' },
    { name: 'CSS', color: '#1572b6' },
    { name: 'HTML', color: '#e34c26' },
    { name: 'REST API', color: '#009688' },
    { name: 'Responsive Design', color: '#9c27b0' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <>
    <motion.section
      className="skills-section"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="space-title skills-title">🛠️ Skills</h2>

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
            onClick={() => setSelectedImage(p)}
            style={{ cursor: 'zoom-in' }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Stack */}
      <div className="main-stack-container">
        <h3 className="main-stack-title">⭐ Main Stack</h3>
        <motion.div 
          className="skills-grid main-stack-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {mainStack.map((skill, idx) => (
            <motion.div
              key={idx}
              className="skill-badge main-stack-badge"
              variants={skillVariants}
              style={{ borderColor: skill.color }}
              whileHover={{ 
                scale: 1.15,
                boxShadow: `0 0 20px ${skill.color}80, 0 0 30px #9c27b0`,
                backgroundColor: `${skill.color}20`
              }}
            >
              <span style={{ color: skill.color, fontWeight: 'bold' }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Other Skills */}
      <div className="other-skills-container">
        <h3 className="other-skills-title">Other Technologies</h3>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {otherSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="skill-badge"
              variants={skillVariants}
              style={{ borderColor: skill.color }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: `0 0 15px ${skill.color}60`
              }}
            >
              <span style={{ color: skill.color }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
      <ImageModal 
        src={selectedImage?.image} 
        alt={selectedImage?.title} 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </>
  );
}

export default Skills;
