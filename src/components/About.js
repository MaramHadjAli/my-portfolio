import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Cpu,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Shield,
  Sparkles,
  SquareTerminal,
  Orbit,
  Radar,
  Satellite,
  Telescope,
  Star,
  Globe,
} from 'lucide-react';
import '../App.css';
import maram from '../assets/images/maram.jpg';

const orbitIcons = [
  { icon: Code2, label: 'Python' },
  { icon: BrainCircuit, label: 'AI' },
  { icon: Cpu, label: 'FastAPI' },
  { icon: GitBranch, label: 'Git' },
  { icon: SquareTerminal, label: 'Docker' },
  { icon: Orbit, label: 'React' },
  { icon: Radar, label: 'Spring Boot' },
];

const journeyMilestones = [
  {
    year: '2022',
    title: 'Started Engineering',
    description: 'Began my computer engineering journey and developed a strong software foundation.',
    icon: Globe,
  },
  {
    year: '2023',
    title: 'Discovered Web Development',
    description: 'Built my first interfaces and discovered the power of creating polished user experiences.',
    icon: Code2,
  },
  {
    year: '2024',
    title: 'Built Full Stack Applications',
    description: 'Worked with React, Angular, Spring Boot, and FastAPI on practical production-style systems.',
    icon: Rocket,
  },
  {
    year: '2025',
    title: 'Worked with Odoo ERP',
    description: 'Joined enterprise workflows, Python-based business logic, and Linux deployment environments.',
    icon: Shield,
  },
  {
    year: '2026',
    title: 'Exploring AI & LLMs',
    description: 'Focused on intelligent systems, automation, RAG, MCP, Kubernetes, and cloud-native direction.',
    icon: BrainCircuit,
  },
  {
    year: '∞',
    title: 'Next Destination',
    description: 'International software engineer building impactful products at global scale.',
    icon: Star,
  },
];

const missionItems = [
  {
    label: 'Building',
    value: 'AI-powered ERP solutions',
    icon: Cpu,
  },
  {
    label: 'Learning',
    value: 'MCP, LangChain, RAG, Kubernetes, AWS',
    icon: Telescope,
  },
  {
    label: 'Exploring',
    value: 'LLMs, Agentic AI, System Design',
    icon: Satellite,
  },
  {
    label: 'Goal',
    value: 'Impactful software used worldwide',
    icon: Sparkles,
  },
];

const statCards = [
  { icon: Globe, value: '15+', label: 'Projects Built' },
  { icon: Code2, value: '8+', label: 'Technologies' },
  { icon: Rocket, value: '3+', label: 'Years Learning' },
  { icon: Star, value: '∞', label: 'Curiosity' },
];

function AnimatedCounter({ value, inView }) {
  const [displayValue, setDisplayValue] = useState(value === '∞' ? '∞' : '0');

  useEffect(() => {
    if (!inView) {
      setDisplayValue(value === '∞' ? '∞' : '0');
      return;
    }

    if (value === '∞') {
      setDisplayValue('∞');
      return;
    }

    const numericValue = Number.parseInt(value, 10);
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;

    const timer = window.setInterval(() => {
      current += 1;
      const next = Math.round((numericValue / steps) * current);
      setDisplayValue(`${next}${value.includes('+') ? '+' : ''}`);
      if (current >= steps) {
        window.clearInterval(timer);
        setDisplayValue(value);
      }
    }, stepTime);

    return () => window.clearInterval(timer);
  }, [inView, value]);

  return <span>{displayValue}</span>;
}

function AnimatedStat({ stat, index }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const Icon = stat.icon;

  return (
    <motion.article
      ref={ref}
      className="about-stat-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className="about-stat-card__icon">
        <Icon aria-hidden="true" />
      </div>
      <div className="about-stat-card__value">
        <AnimatedCounter value={stat.value} inView={inView} />
      </div>
      <div className="about-stat-card__label">{stat.label}</div>
    </motion.article>
  );
}

function OrbitRing({ index, label, icon: Icon }) {
  const rotationDuration = 42 + index * 8;
  const initialAngle = (index * 360) / orbitIcons.length;

  return (
    <motion.div
      className="about-orbit-ring"
      style={{
        '--orbit-size': `${130 + index * 28}px`,
        '--orbit-duration': `${rotationDuration}s`,
        '--orbit-delay': `${-(index * 4)}s`,
        '--orbit-angle': `${initialAngle}deg`,
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: rotationDuration }}
      aria-hidden="true"
    >
      <motion.div
        className="about-orbit-icon"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: rotationDuration }}
      >
        <Icon aria-hidden="true" />
        <span>{label}</span>
      </motion.div>
    </motion.div>
  );
}

function About() {
  const navigate = useNavigate();
  const headingParts = ['Exploring Technology.', 'Building the Future.'];
  const [headingIndex, setHeadingIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeadingIndex((current) => (current + 1) % headingParts.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [headingParts.length]);

  const orbitItems = useMemo(() => orbitIcons, []);

  return (
    <motion.section
      className="about about-dashboard-section"
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="about-space-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="about-dashboard-grid">
        <motion.aside
          className="about-dashboard-left"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="about-planet-shell"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="about-planet-halo" />
            <div className="about-planet-aurora" />
            <div className="about-planet-orbits">
              {orbitItems.map((item, index) => (
                <OrbitRing key={item.label} index={index} label={item.label} icon={item.icon} />
              ))}
            </div>
            <motion.div
              className="about-planet"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            >
              <div className="about-planet__shine" />
              <img src={maram} alt="Portrait of Maram" className="about-planet__portrait" />
            </motion.div>
          </motion.div>

          <motion.div
            className="about-control-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div className="about-control-panel__status">
              <span className="about-control-panel__dot" />
              <span>Current Status</span>
            </div>
            <div className="about-control-panel__rows">
              <div><MapPin size={16} /> <span>Mahdia, Tunisia</span></div>
              <div><Mail size={16} /> <a href="mailto:maram.hadjali@enicar.ucar.tn">maram.hadjali@enicar.ucar.tn</a></div>
              <div><Phone size={16} /> <a href="tel:+21625638885">+216 25 638 885</a></div>
              <div><GitBranch size={16} /> <a href="https://github.com/MaramHadjAli" target="_blank" rel="noreferrer">github.com/MaramHadjAli</a></div>
            </div>
          </motion.div>
        </motion.aside>

        <motion.div
          className="about-dashboard-main"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.08 }}
        >
          <div className="about-hero-block">
            <span className="about-eyebrow">ABOUT ME</span>
            <motion.h2
              className="about-hero-title"
              key={headingIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {headingParts[headingIndex]}
            </motion.h2>
            <div className="about-hero-copy">
              <p>
                <strong>Who I Am</strong>
                <br />
                Computer Engineering student at ENICarthage with hands-on experience in software engineering,
                Linux environments, and full-stack development.
              </p>
              <p>
                <strong>What I Build</strong>
                <br />
                Production-ready applications with React, Angular, Spring Boot, FastAPI, Odoo SH, PostgreSQL,
                Docker, and secure backend systems.
              </p>
              <p>
                <strong>My Passion</strong>
                <br />
                I enjoy turning complex ideas into clean systems, automating workflows, and designing software
                that feels precise, elegant, and useful.
              </p>
              <p>
                <strong>My Goal</strong>
                <br />
                To grow into an international software engineer building impactful products used at scale.
              </p>
            </div>
          </div>

          <div className="about-solar-dashboard">
            <div className="about-solar-dashboard__header">
              <span>CURRENTLY</span>
              <div className="about-solar-dashboard__mini-orbit" aria-hidden="true">
                <Globe size={14} />
              </div>
            </div>

            <div className="about-solar-dashboard__body">
              {missionItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="about-mission-item"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  >
                    <div className="about-mission-item__icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span>{item.label}</span>
                      <p>{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
+
          <div className="about-stats-grid">
            {statCards.map((stat, index) => (
              <AnimatedStat key={stat.label} stat={stat} index={index} />
            ))}
          </div>

          <div className="about-journey-panel">
            <div className="about-journey-panel__header">
              <span>MY JOURNEY SO FAR</span>
            </div>
            <div className="about-journey-line" aria-hidden="true">
              {journeyMilestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <React.Fragment key={milestone.year}>
                    <motion.div
                      className="about-journey-node"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                      <div className="about-journey-node__planet">
                        <Icon size={15} />
                      </div>
                      <div className="about-journey-node__content">
                        <strong>{milestone.year}</strong>
                        <span>{milestone.title}</span>
                        <p>{milestone.description}</p>
                      </div>
                    </motion.div>
                    {index < journeyMilestones.length - 1 && (
                      <div className="about-journey-connector" aria-hidden="true" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <motion.div
            className="about-cta-shell"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <motion.button
              className="about-cta-button"
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
