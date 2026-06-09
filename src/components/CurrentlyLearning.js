import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaDatabase, FaPalette, FaLaptopCode } from 'react-icons/fa';
import '../App.css';

function CurrentlyLearning() {
  const technologies = [
    { name: 'Advanced TypeScript', icon: FaLaptopCode, color: '#3178c6' },
    { name: 'React Query', icon: FaBrain, color: '#61dafb' },
    { name: 'Supabase', icon: FaDatabase, color: '#3ecf8e' },
    { name: 'Software Architecture', icon: FaGraduationCap, color: '#9c27b0' },
    { name: 'UI/UX Design', icon: FaPalette, color: '#ff6b6b' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.section
      className="learning-section"
      id="learning"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="space-title learning-title">📚 Currently Learning</h2>
      
      <p className="learning-description">
        Continuously improving my skills by learning modern technologies and best development practices.
      </p>

      <motion.div 
        className="learning-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {technologies.map((tech, idx) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={idx}
              className="learning-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                boxShadow: `0 0 20px ${tech.color}80, 0 0 30px #9c27b0`
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="learning-icon" style={{ color: tech.color }}>
                <IconComponent size={35} />
              </div>
              <p className="learning-tech-name">{tech.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default CurrentlyLearning;
