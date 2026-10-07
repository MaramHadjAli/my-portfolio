import React, { useEffect, useRef, useState } from 'react';
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
        <div className="skill-roadmap-card__icon">
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
  const canvasRef = useRef(null);
  const drawRef = useRef(null);
  const [geometry, setGeometry] = useState({ d: '', w: 1, h: 1, length: 1 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const measure = () => {
      const dots = canvas.querySelectorAll('.skills-roadmap-node__dot');
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const origin = canvas.getBoundingClientRect();
      const points = Array.from(dots).map((dot) => {
        const rect = dot.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - origin.left - canvas.clientLeft,
          y: rect.top + rect.height / 2 - origin.top - canvas.clientTop,
        };
      });

      if (points.length < 2 || width === 0) return;

      const knots = [points[0]];
      for (let i = 1; i < points.length; i += 1) {
        const prev = points[i - 1];
        const curr = points[i];
        const bow = (i % 2 === 0 ? -1 : 1) * 92;
        knots.push({
          x: (prev.x + curr.x) / 2 + bow,
          y: (prev.y + curr.y) / 2,
        });
        knots.push(curr);
      }

      const rounded = (value) => Math.round(value * 10) / 10;
      let d = `M ${rounded(knots[0].x)} ${rounded(knots[0].y)}`;
      for (let i = 0; i < knots.length - 1; i += 1) {
        const p0 = knots[i - 1] || knots[i];
        const p1 = knots[i];
        const p2 = knots[i + 1];
        const p3 = knots[i + 2] || p2;
        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;
        d += ` C ${rounded(cp1x)} ${rounded(cp1y)}, ${rounded(cp2x)} ${rounded(cp2y)}, ${rounded(p2.x)} ${rounded(p2.y)}`;
      }

      setGeometry((current) => ({ ...current, d, w: width, h: height }));
    };

    const onScroll = () => {
      if (reduce) {
        setProgress(1);
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const start = window.innerHeight * 0.78;
      const distance = Math.max(rect.height * 0.78, 1);
      const traveled = start - rect.top;
      setProgress(Math.min(1, Math.max(0, traveled / distance)));
    };

    measure();
    onScroll();

    let frame = 0;
    let last = -1;
    const tick = () => {
      const rect = canvas.getBoundingClientRect();
      const start = window.innerHeight * 0.78;
      const distance = Math.max(rect.height * 0.78, 1);
      const next = reduce
        ? 1
        : Math.min(1, Math.max(0, (start - rect.top) / distance));
      if (Math.abs(next - last) > 0.008) {
        last = next;
        setProgress(next);
      }
      frame = window.requestAnimationFrame(tick);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(canvas);
    frame = window.requestAnimationFrame(tick);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    if (!drawRef.current || !geometry.d) return;
    const length = drawRef.current.getTotalLength();
    setGeometry((current) => (
      current.length === length ? current : { ...current, length }
    ));
  }, [geometry.d, geometry.w, geometry.h]);

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

        <div className="skills-roadmap-canvas" ref={canvasRef}>
          <svg
            className="skills-roadmap-line"
            viewBox={`0 0 ${geometry.w} ${geometry.h}`}
            preserveAspectRatio="none"
            role="presentation"
            aria-hidden="true"
          >
            <path
              d={geometry.d}
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={drawRef}
              className="skills-roadmap-line__draw"
              d={geometry.d}
              fill="none"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={geometry.length}
              strokeDashoffset={geometry.length * (1 - progress)}
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
