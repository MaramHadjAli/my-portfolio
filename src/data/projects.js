import incidentPlatformImage from '../assets/images/projects/incident-platform.png';
import expressDeliveryImage from '../assets/images/projects/suivi.png';
import omniaCharityImage from '../assets/images/projects/omnia-charity.png';
import quantumTwinImage from '../assets/images/projects/quantum-twin.png';
import portfolioImage from '../assets/images/projects/my-portfolio.jpg';
import perleMedicaleImage from '../assets/images/projects/perle-medicale.jpg';
import sentinelAiImage from '../assets/images/projects/sentinelia.png';
import pentestHubImage from '../assets/images/projects/pentesthub.png';

export const projects = [
  {
    id: 'sentinel-ai',
    title: 'SentinelAI',
    description:
      'PFE built with Hayder Ghribi. Scans a Git repository for SAST, secrets and CVEs, then explains each finding with a measured RAG over an OWASP Top 10:2025 and NVD corpus. Includes a React dashboard, PostgreSQL storage, and a GitHub Action that comments on pull requests.',
    image: sentinelAiImage,
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Chroma',
      'Docker',
      'GitHub Actions',
    ],
    github: 'https://github.com/Haider-Dev01/sentinelAI',
    demo: null,
    link: 'https://github.com/Haider-Dev01/sentinelAI',
    highlights: ['Python', 'React'],
  },
  {
    id: 'perle-medicale',
    title: 'Perle Médicale',
    description:
      'Production-oriented e-commerce platform for a Tunisian parapharmacy: catalogue, search, cart, orders, authentication and administration. Modular REST backend with PostgreSQL and Prisma, Redis caching, role-based access, and a responsive SEO-oriented Next.js frontend, with Docker and CI/CD.',
    image: perleMedicaleImage,
    technologies: [
      'Next.js',
      'TypeScript',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Docker',
      'GitHub Actions',
    ],
    github: 'https://github.com/Haider-Dev01/parapharmacie-web-',
    demo: null,
    link: 'https://github.com/Haider-Dev01/parapharmacie-web-',
    highlights: ['TypeScript'],
  },
  {
    id: 'express-delivery',
    title: 'ExpressDelivery',
    description:
      "A complete delivery management and real-time tracking solution featuring a Spring Boot backend connected to MySQL and a native Android mobile app for drivers and controllers. Includes real-time chat, emergency alerts, dashboards and secure JWT authentication.",
    image: expressDeliveryImage,
    technologies: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'WebSocket (STOMP)',
      'JWT',
      'MySQL',
      'Maven',
      'Android',
      'Java',
      'Gradle',
      'Retrofit',
      'OkHttp',
    ],
    github: 'https://github.com/MaramHadjAli/ExpressDelivery',
    demo: null,
    link: 'https://github.com/MaramHadjAli/ExpressDelivery',
    highlights: ['Spring Boot', 'Android'],
  },
  {
    id: 'omnia-charity-tracking',
    title: 'Omnia Charity Tracking',
    description:
      "Backend platform for managing charity aid distribution, family and visit tracking, and dashboard analytics. Built with NestJS and TypeScript, featuring role-based JWT authentication, AI-powered donation recommendations, heatmaps and data seeding scripts.",
    image: omniaCharityImage,
    technologies: [
      'NestJS',
      'TypeScript',
      'TypeORM',
      'JWT',
      'REST API',
      'Node.js',
    ],
    github: 'https://github.com/KhUssef/omnia-charity-tracking',
    demo: null,
    link: 'https://github.com/KhUssef/omnia-charity-tracking',
    highlights: ['TypeScript'],
  },
  {
    id: 'FixOps - plateforme-gestion-incidents',
    title: 'Incident Management Platform',
    description:
      "Technical incident and preventive maintenance management platform featuring ticketing, equipment/room tracking, an admin dashboard, and real-time notifications.",
    image: incidentPlatformImage,
    technologies: [
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'Flowbite',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'WebSocket',
      'JWT',
      'MySQL',
      'Maven',
      'Java 17',
    ],
    github: 'https://github.com/MaramHadjAli/plateforme-gestion-incidents',
    demo: null,
    link: 'https://github.com/MaramHadjAli/plateforme-gestion-incidents',
    highlights: ['TypeScript'],
  },
  {
    id: 'quantum-twin',
    title: 'Quantum Twin',
    description:
      "IoT digital twin system with a C-based TCP server, a Python/Node.js WebSocket bridge, and a real-time HTML dashboard. Enables remote hardware monitoring and control from a mobile browser via Termux.",
    image: quantumTwinImage,
    technologies: [
      'C',
      'Python',
      'Node.js',
      'WebSocket',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    github: 'https://github.com/nourbentaher/quantum_twin',
    demo: null,
    link: 'https://github.com/nourbentaher/quantum_twin',
    highlights: [],
  },
  {
    id: 'pentesthub-cybersecurity-automation-platform',
    title: 'PentestHub',
    description:
      'Cybersecurity automation platform for orchestrating penetration-testing workflows and managing security scans. Built with Python and FastAPI, containerized with Docker and Docker Compose, and backed by PostgreSQL and SQLAlchemy. Includes REST APIs, automated scanning integrations, real-time monitoring, audit logging, role-based authentication, scan management, and an interactive dashboard.',
    image: pentestHubImage,
    technologies: [
      'Python',
      'FastAPI',
      'Docker',
      'Docker Compose',
      'PostgreSQL',
      'SQLAlchemy',
      'Swagger API',
      'Linux',
    ],
    github: 'https://github.com/MaramHadjAli/pentesthub.git',
    demo: null,
    link: 'https://github.com/MaramHadjAli/pentesthub.git',
    highlights: ['Python'],
  },
  {
    id: 'my-portfolio',
    title: 'My Portfolio',
    description:
      "Personal developer portfolio with a space-themed design, smooth page transitions, animated project cards and a contact form. Built with React and Framer Motion.",
    image: portfolioImage,
    technologies: [
      'React',
      'React Router',
      'Framer Motion',
      'React Icons',
      'Create React App',
    ],
    github: 'https://github.com/MaramHadjAli/my-portfolio',
    demo: 'https://my-portfolio-chi-seven-47.vercel.app/',
    link: 'https://my-portfolio-chi-seven-47.vercel.app/',
    highlights: ['React'],
  },
];

export const featuredProjectId = 'perle-medicale';