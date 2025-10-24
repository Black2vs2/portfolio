import type { Project, Experience, Skill, SocialLink } from '../types';

export const CONFIG = {
  name: 'Luca Sartori',
  title: 'Software Development Engineer',
  email: 'luca.sartori.dev@gmail.com',
  githubUrl: 'https://github.com/black2vs2',
  linkedinUrl: 'https://www.linkedin.com/in/luca-sartori-33657820b/',
  resumeUrl: '/resume.pdf',
};

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['C#', 'TypeScript', 'JavaScript (ES6+)', 'Python', 'Java', 'C++', 'Lua'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'Ionic Angular', 'Vue.js', 'SAPUI5'],
  },
  {
    category: 'Backend',
    items: ['ASP.NET Core', 'Node.js', 'Express.js', 'Entity Framework Core'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      'Azure',
      'Google Cloud Platform',
      'Docker',
      'CI/CD (GitHub Workflows)',
      'Portainer',
      'Traefik',
    ],
  },
  {
    category: 'Authentication & Security',
    items: ['Google OAuth', 'Keycloak', 'JWT', 'OAuth 2.0'],
  },
  {
    category: 'Monitoring & Logging',
    items: ['Application Insights', 'Sentry', 'Serilog', 'Hangfire'],
  },
  {
    category: 'Core Competencies',
    items: [
      'Distributed Systems',
      'Microservices',
      'RESTful APIs',
      'Scalability & Performance Optimization',
      'Object-Oriented Design',
      'Design Patterns',
      'Agile/Scrum',
      'Automated Testing',
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Zupit',
    position: 'Full Stack Web Developer',
    duration: 'Oct 2022 - Present',
    description: ['experiences.zupit.description'],
    technologies: [
      'C#',
      'ASP.NET Core',
      'Node.js',
      'Python',
      'Angular',
      'Vue.js',
      'Ionic Angular',
      'Docker',
      'MySQL',
      'CI/CD',
      'YOLO',
      'TorchVision',
    ],
  },
  {
    id: '2',
    company: 'Eurointerim Spa',
    position: 'Backend Developer',
    duration: '2024 - Present',
    description: ['experiences.eurointerim.description'],
    technologies: [
      'C#',
      '.NET 9',
      'ASP.NET Core Web API',
      'MediatR (CQRS)',
      'SQL Server',
      'Entity Framework Core',
      'Hangfire',
      'Serilog',
      'JWT',
    ],
  },
  {
    id: '3',
    company: 'Derga Consulting',
    position: 'Full Stack Web Developer (SAP)',
    duration: 'Oct 2021 - Oct 2022',
    description: ['experiences.derga.description'],
    technologies: ['Node.js', 'SAPUI5', 'React', 'PostgreSQL', 'Docker', 'Git', 'Agile'],
  },
  {
    id: '4',
    company: 'CAREL Industries S.p.A.',
    position: 'Full Stack Web Developer',
    duration: 'Apr 2021 - Oct 2021',
    description: ['experiences.carel.description'],
    technologies: ['JavaScript', 'Java', 'Python', 'REST APIs'],
  },
];

export const openSourceProjects: Project[] = [];

export const privateProjects: Project[] = [
  {
    id: 'private-1',
    title: 'IoT Home Automation App',
    description: 'projectDescriptions.iotAutomation',
    technologies: ['React', 'JavaScript (ES6+)', 'Arduino', 'RESTful APIs'],
    isOpenSource: false,
  },
  {
    id: 'private-2',
    title: 'Industrial Control Dashboard',
    description: 'projectDescriptions.industrialDashboard',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    isOpenSource: false,
  },
  {
    id: 'private-3',
    title: 'WhatsApp Cloud API Backend',
    description: 'projectDescriptions.whatsappBackend',
    technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'Hangfire', 'Serilog'],
    isOpenSource: false,
  },
  {
    id: 'private-4',
    title: 'Tabletop Simulator Game',
    description: 'projectDescriptions.tabletopGame',
    technologies: ['C++', 'Lua', 'Tabletop Simulator'],
    isOpenSource: false,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: CONFIG.githubUrl,
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: CONFIG.linkedinUrl,
    icon: 'linkedin',
  },
];
