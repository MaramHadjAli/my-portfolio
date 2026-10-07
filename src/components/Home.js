import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import maramChibi from '../assets/images/maram-chibi.png';
import stickerGit from '../assets/stickers/git-it-girl.png';
import stickerComputer from '../assets/stickers/pixel-computer.png';
import LetterReveal from './LetterReveal';

function Home() {
    const navigate = useNavigate();

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/CV_MaramHadjAli.pdf`;
        link.download = 'CV_MaramHadjAli.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
      <LetterReveal>
        <motion.section className="hero" id="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.7}}>
        <img className="hero-sticker sticker-git" src={stickerGit} alt="" />
        <img className="hero-sticker sticker-computer" src={stickerComputer} alt="" />

        <div className="hero-sheet">
          <div className="hero-copy">
            <h1 className="title">
              <span className="title-gem" aria-hidden="true">♦</span>
              <span className="title-script">Maram</span>
              <span className="title-serif">Hadj Ali</span>
            </h1>
            <p className="subtitle">Computer Engineering Student | Software Engineering | Python • Linux • Full-Stack</p>
            <p className="internship-badge">Open to apprenticeship & internship opportunities</p>
            <div className="hero-buttons">
              <button
                type="button"
                className="cta-button"
                onClick={() => navigate('/about')}
              >
                Explore
              </button>
              <motion.button
                type="button"
                className="cv-button"
                onClick={handleDownloadCV}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload /> Download CV
              </motion.button>
            </div>
          </div>

          <div className="hero-avatar">
            <span className="hero-avatar__circle" aria-hidden="true" />
            <img className="hero-avatar__art" src={maramChibi} alt="Portrait of Maram" />
          </div>
        </div>
        </motion.section>
      </LetterReveal>
    );
}

export default Home;
