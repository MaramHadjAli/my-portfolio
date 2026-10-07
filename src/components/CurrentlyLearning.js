import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import stickerCat from '../assets/stickers/bow-cat.png';
import stickerCoder from '../assets/stickers/coder-girl.png';
import myDream from '../assets/learning/my-dream.png';
import cosmos from '../assets/learning/cosmos.png';
import washiFlat from '../assets/learning/washi-flat.png';
import kindNote from '../assets/learning/kind-note.png';
import butterfly from '../assets/learning/butterfly.png';
import stampBloom from '../assets/learning/stamp-bloom.png';
import moonSeal from '../assets/learning/moon-seal.png';

const tracks = [
  {
    kicker: 'Now',
    title: 'Agentic AI',
    text: 'I’m learning how to turn models into useful software: retrieval, tools, and agents, built on the Python and FastAPI work I already ship.',
    items: ['LLMs', 'LangChain', 'RAG', 'MCP'],
  },
  {
    kicker: 'Next',
    title: 'Cloud-native delivery',
    text: 'Docker and Linux are already part of how I work. The next step is running that same discipline on Kubernetes and AWS.',
    items: ['Kubernetes', 'AWS', 'CI/CD'],
  },
  {
    kicker: 'Alongside',
    title: 'Systems that scale',
    text: 'After Odoo ERP and full-stack projects, I’m studying system design so the products I build can grow past a single service.',
    items: ['System design', 'ERP workflows', 'Automation'],
  },
];

function CurrentlyLearning() {
  return (
    <motion.section
      className="learning-section"
      id="learning"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="learning-sheet">
        <img className="learn-tape learn-tape--tl" src={washiFlat} alt="" />
        <img className="learn-tape learn-tape--bl" src={washiFlat} alt="" />
        <img className="learn-tape learn-tape--br" src={washiFlat} alt="" />

        <div className="learn-cluster learn-cluster--tl">
          <img className="learn-bit learn-bit--cat" src={stickerCat} alt="" />
        </div>

        <div className="learn-cluster learn-cluster--tr">
          <img className="learn-bit learn-bit--coder" src={stickerCoder} alt="" />
          <img className="learn-bit learn-bit--bloom" src={stampBloom} alt="" />
        </div>

        

        <div className="learn-cluster learn-cluster--bc">
          <img className="learn-bit learn-bit--cosmos" src={cosmos} alt="" />
          <img className="learn-bit learn-bit--dream" src={myDream} alt="" />
          <img className="learn-bit learn-bit--butterfly" src={butterfly} alt="" />
        </div>

        <p className="learn-note learn-note--ai">
          <span>*still learning this*</span>
          <svg viewBox="0 0 96 32" aria-hidden="true">
            <path d="M6 10 C 34 6, 62 18, 88 16" />
            <path d="M76 8 L90 16 L78 24" />
          </svg>
        </p>
        <p className="learn-note learn-note--erp">
          <svg viewBox="0 0 96 32" aria-hidden="true">
            <path d="M90 10 C 62 6, 34 18, 8 16" />
            <path d="M20 8 L6 16 L18 24" />
          </svg>
          <span>*the ERP side*</span>
        </p>

        <p className="learning-kicker">Notes from the desk</p>
        <h2 className="learning-title">What I’m studying now</h2>
        <p className="learning-lead">
          The stack I already use is Python, FastAPI, React, Angular, Spring Boot, Odoo, PostgreSQL, and Docker.
          This page is the layer I’m adding on top.
        </p>

        <div className="learning-tracks">
          {tracks.map((track, index) => (
            <motion.article
              key={track.title}
              className="learning-track"
              initial={{ opacity: 1, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              {index === 0 && (
                <img className="learn-bit learn-bit--kind" src={kindNote} alt="" />
              )}
              {index === 2 && (
                <img className="learn-bit learn-bit--seal" src={moonSeal} alt="" />
              )}
              <span className="learning-track__kicker">{track.kicker}</span>
              <h3>{track.title}</h3>
              <p>{track.text}</p>
              <ul>
                {track.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default CurrentlyLearning;
