import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import {
  SiPython,
  SiDocker,
  SiPostgresql,
  SiJavascript,
  SiReact,
  SiSpringboot,
  SiGithub,
  SiOdoo,
  SiTensorflow,
  SiKubernetes,
  SiLangchain,
  SiNodedotjs,
  SiAwslambda,
} from 'react-icons/si';
import '../App.css';

const journeyNodes = [
  {
    stage: 'Foundation',
    title: 'Programming Foundations',
    icon: SiJavascript,
    accent: '#93c5fd',
    label: 'Logic • OOP • Problem Solving',
    level: 'Core',
    side: 'left',
  },
  {
    stage: 'Backend',
    title: 'Python & FastAPI',
    icon: SiPython,
    accent: '#a78bfa',
    label: 'AI • Automation • Backend APIs',
    level: 'Advanced',
    side: 'right',
  },
  {
    stage: 'Enterprise',
    title: 'Java & Spring Boot',
    icon: SiSpringboot,
    accent: '#86efac',
    label: 'REST APIs • Security • JPA',
    level: 'Advanced',
    side: 'left',
  },
  {
    stage: 'Frontend',
    title: 'React & UI Systems',
    icon: SiReact,
    accent: '#67e8f9',
    label: 'Modern UI • UX • Routing',
    level: 'Advanced',
    side: 'right',
  },
  {
    stage: 'Automation',
    title: 'Docker & Linux',
    icon: SiDocker,
    accent: '#60a5fa',
    label: 'Containerization • Delivery • Ops',
    level: 'Hands-on',
    side: 'left',
  },
  {
    stage: 'Data',
    title: 'PostgreSQL & SQLAlchemy',
    icon: SiPostgresql,
    accent: '#38bdf8',
    label: 'Relational Data • ORM • Queries',
    level: 'Hands-on',
    side: 'right',
  },
  {
    stage: 'Business',
    title: 'Odoo / ERP Engineering',
    icon: SiOdoo,
    accent: '#c4b5fd',
    label: 'Workflow Design • Production Support',
    level: 'Applied',
    side: 'left',
  },
  {
    stage: 'Collaboration',
    title: 'Git, GitHub & Delivery',
    icon: SiGithub,
    accent: '#e5e7eb',
    label: 'Version Control • Reviews • Teamwork',
    level: 'Daily',
    side: 'right',
  },
];

const currentLearning = [
  { title: 'LLMs', icon: SiTensorflow },
  { title: 'LangChain', icon: SiLangchain },
  { title: 'RAG', icon: SiPython },
  { title: 'MCP', icon: SiGithub },
  { title: 'Kubernetes', icon: SiKubernetes },
  { title: 'AWS', icon: SiAwslambda },
  { title: 'CI/CD', icon: SiGithub },
  { title: 'Automation', icon: SiNodedotjs },
];

const timelinePath =
  'M 105 40 C 210 40, 210 140, 320 140 S 430 240, 540 240 S 650 340, 760 340 S 870 440, 980 440';

function SkillCard({ node, index }) {
  const Icon = node.icon;

  return (
    <motion.article
      className={`skill-roadmap-card skill-roadmap-card--${node.side}`}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="skill-roadmap-card__header">
        <span
          className="skill-roadmap-card__stage"
          style={{ color: node.accent }}
        >
          {node.stage}
        </span>
        <span className="skill-roadmap-card__level">{node.level}</span>
      </div>

      <div className="skill-roadmap-card__body">
        <div
          className="skill-roadmap-card__icon"
          style={{ boxShadow: `0 0 0 1px ${node.accent}20, 0 16px 40px rgba(0,0,0,0.35)` }}
        >
          <Icon aria-hidden="true" />
        </div>

        <div className="skill-roadmap-card__content">
          <h3>{node.title}</h3>
          <p>{node.label}</p>
        </div>
      </div>

      <motion.div
        className="skill-roadmap-card__footer"
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        <span>Progression milestone</span>
        <FiArrowRight aria-hidden="true" />
      </motion.div>
    </motion.article>
  );
}

function LearningBranch() {
  return (
    <motion.section
      className="skills-learning-branch"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
    >
      <div className="skills-learning-branch__intro">
        <span className="skills-learning-branch__eyebrow">Current Journey</span>
        <h3>Extending the roadmap toward intelligent systems</h3>
        <p>
          I’m focusing on the next layer of software engineering: AI workflows,
          retrieval systems, orchestration and cloud-native infrastructure.
        </p>
      </div>

      <div className="skills-learning-branch__chips">
        {currentLearning.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="skills-learning-chip"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.04 }}
            >
              <Icon aria-hidden="true" />
              <span>{item.title}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

function Skills() {
  return (
    <motion.section
      className="skills-section skills-roadmap-section"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="skills-roadmap-shell">
        <motion.div
          className="skills-roadmap-heading"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-roadmap-kicker">Evolution</span>
          <h2 className="skills-roadmap-title">A journey, not a checklist</h2>
          <p className="skills-roadmap-summary">
            A visual path of how I’ve grown from programming foundations to
            backend systems, frontend interfaces, automation, data and
            collaboration.
          </p>
        </motion.div>

        <div className="skills-roadmap-legend" aria-hidden="true">
          <span>Foundation</span>
          <span>Backend</span>
          <span>Frontend</span>
          <span>DevOps</span>
          <span>Future Goals</span>
        </div>

        <div className="skills-roadmap-canvas">
          <svg
            className="skills-roadmap-line"
            viewBox="0 0 1080 520"
            role="presentation"
            aria-hidden="true"
          >
            <motion.path
              d={timelinePath}
              fill="none"
              stroke="rgba(148, 163, 184, 0.55)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1600"
              strokeDashoffset="1600"
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            />
            <motion.path
              d={timelinePath}
              fill="none"
              stroke="rgba(96, 165, 250, 0.75)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1600"
              strokeDashoffset="1600"
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.15 }}
            />
          </svg>

          <div className="skills-roadmap-nodes">
            {journeyNodes.map((node, index) => (
              <motion.div
                key={node.title}
                className={`skills-roadmap-node skills-roadmap-node--${node.side}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.32 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <SkillCard node={node} index={index} />
                <motion.div
                  className="skills-roadmap-node__dot"
                  style={{
                    background: node.accent,
                    boxShadow: `0 0 0 10px ${node.accent}14, 0 0 30px ${node.accent}70`,
                  }}
                  whileHover={{ scale: 1.08 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="skills-roadmap-next"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="skills-roadmap-next__label">Next destination</span>
            <div className="skills-roadmap-next__line">
              <span>LLMs</span>
              <span>LangChain</span>
              <span>RAG</span>
              <span>MCP</span>
              <span>Kubernetes</span>
              <span>AWS</span>
            </div>
          </motion.div>
        </div>

        <LearningBranch />
      </div>
    </motion.section>
  );
}

export default Skills;
