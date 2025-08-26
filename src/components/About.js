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
            I'm Maram, a passionate software engineering student who loves building creative and inspiring digital experiences. 
            <br /><br />
            My goal is to grow into a full-stack developer and create creative projects.
          </p>

          <div className="projects-cta">
            <p>If you want to know more about me, take some time to have an eye on my projects!</p>
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
