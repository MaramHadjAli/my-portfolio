import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // assuming your styles are in App.css
import { motion } from 'framer-motion';

function Home() {
    const navigate = useNavigate();
    return (
        <motion.section className="hero" id="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.7}}>
        <h1 className="title">Maram's Galaxy</h1>
        <p className="subtitle">Frontend Developer | Dreamer | Explorer</p>
        <button className="cta-button pulse shimmer-text" data-text="Explore"
        onClick={() => navigate ('/about')}
        ></button>
        </motion.section>
    );
}

export default Home;
