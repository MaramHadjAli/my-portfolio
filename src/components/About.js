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
            Computer Engineering student at the National Engineering School of Carthage (ENICarthage) with hands-on
            experience in software engineering, Linux environments and full-stack development. Currently contributing as an R&amp;D
            and Full-Stack Developer Intern at Exocoms Group, building production-ready applications using Odoo SH, Python and
            PostgreSQL. I focus on backend systems, infrastructure, and secure software engineering practices.
            <br /><br />
            I enjoy designing scalable APIs, containerized deployments and reliable data-driven services. I'm looking for
            long-term apprenticeship or internship opportunities in software engineering where I can keep learning and contribute
            to real-world systems.
          </p>

          <ul className="about-contact-list">
            <li><strong>Email:</strong> <a href="mailto:maram.hadjali@enicar.ucar.tn">maram.hadjali@enicar.ucar.tn</a></li>
            <li><strong>Phone:</strong> <a href="tel:+21625638885">+216 25 638 885</a></li>
            <li><strong>Location:</strong> Mahdia, Tunisia</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/MaramHadjAli" target="_blank" rel="noreferrer">github.com/MaramHadjAli</a></li>
          </ul>

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
