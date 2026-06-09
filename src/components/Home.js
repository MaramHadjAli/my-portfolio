import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

function Home() {
    const navigate = useNavigate();
    
    const handleDownloadCV = () => {
        window.open('/CV.pdf', '_blank', 'noopener,noreferrer');
    };
    
    return (
        <motion.section className="hero" id="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.7}}>
        <h1 className="title">Maram's Galaxy</h1>
        <p className="subtitle">Computer Engineering Student | Web Developer | Tech Enthusiast</p>
        <p className="internship-badge">🚀 Open to Internship Opportunities</p>
        <div className="hero-buttons">
            <button className="cta-button pulse shimmer-text" data-text="Explore"
            onClick={() => navigate ('/about')}
            ></button>
            <motion.button 
                className="cv-button"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FiDownload /> Download CV
            </motion.button>
        </div>
        </motion.section>
    );
}

export default Home;
