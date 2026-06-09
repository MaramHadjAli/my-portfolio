import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';
import maram from '../assets/images/maram.jpg';

function About() {
  const navigate = useNavigate();

  return (
    <motion.section className="about" id="about" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.7}}>
      <div className="about-content">
        <img
          src={maram}
          alt="Portrait of Maram"
          className="about-img"
        />
        <div className="about-text">
          <h2 className="space-title">🌌 About Me</h2>
          <p>
            Computer Engineering student passionate about web and mobile development. I enjoy building scalable and user-friendly applications using React, TypeScript and modern development technologies.
            <br /><br />
            Through academic and personal projects, I have developed strong problem-solving, software engineering and frontend development skills.
            <br /><br />
            Currently seeking internship opportunities where I can contribute, learn and grow as a software engineer.
          </p>

          <div className="projects-cta">
            <p>Explore my projects and experience to see what I've built!</p>
            <button
              className="projects-button"
              onClick={() => navigate('/projects')}
            >
              Let’s go!
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
