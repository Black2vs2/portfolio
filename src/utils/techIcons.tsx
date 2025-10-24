import {
  SiDotnet,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiLua,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiSap,
  SiTraefikproxy,
  SiGooglecloud,
  SiSentry,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { VscAzureDevops } from 'react-icons/vsc';

// Map technology names to their icons and colors
export const techConfig: Record<string, { icon: React.ReactNode; color: string }> = {
  // Languages
  'C#': {
    icon: <SiDotnet />,
    color: 'bg-purple-100 text-purple-700 border-purple-300',
  },
  TypeScript: {
    icon: <SiTypescript />,
    color: 'bg-blue-100 text-blue-700 border-blue-300',
  },
  JavaScript: {
    icon: <SiJavascript />,
    color: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  },
  'JavaScript (ES6+)': {
    icon: <SiJavascript />,
    color: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  },
  Java: { icon: <FaJava />, color: 'bg-red-100 text-red-700 border-red-300' },
  Python: {
    icon: <SiPython />,
    color: 'bg-blue-100 text-blue-600 border-blue-300',
  },
  'C++': {
    icon: <SiCplusplus />,
    color: 'bg-blue-100 text-blue-800 border-blue-300',
  },
  Lua: {
    icon: <SiLua />,
    color: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  },

  // Frontend
  React: {
    icon: <SiReact />,
    color: 'bg-cyan-100 text-cyan-700 border-cyan-300',
  },
  Angular: {
    icon: <SiAngular />,
    color: 'bg-red-100 text-red-600 border-red-300',
  },
  'Vue.js': {
    icon: <SiVuedotjs />,
    color: 'bg-green-100 text-green-700 border-green-300',
  },
  SAPUI5: {
    icon: <SiSap />,
    color: 'bg-blue-100 text-blue-700 border-blue-300',
  },
  'Ionic Angular': {
    icon: <SiAngular />,
    color: 'bg-blue-100 text-blue-600 border-blue-300',
  },

  // Backend
  'ASP.NET Core': {
    icon: <SiDotnet />,
    color: 'bg-purple-100 text-purple-700 border-purple-300',
  },
  'Node.js': {
    icon: <SiNodedotjs />,
    color: 'bg-green-100 text-green-700 border-green-300',
  },
  'Express.js': {
    icon: <SiExpress />,
    color: 'bg-gray-100 text-gray-700 border-gray-300',
  },
  '.NET 9': {
    icon: <SiDotnet />,
    color: 'bg-purple-100 text-purple-700 border-purple-300',
  },
  'ASP.NET Core Web API': {
    icon: <SiDotnet />,
    color: 'bg-purple-100 text-purple-700 border-purple-300',
  },

  // Databases
  MySQL: {
    icon: <SiMysql />,
    color: 'bg-blue-100 text-blue-700 border-blue-300',
  },
  PostgreSQL: {
    icon: <SiPostgresql />,
    color: 'bg-blue-100 text-blue-600 border-blue-300',
  },
  MongoDB: {
    icon: <SiMongodb />,
    color: 'bg-green-100 text-green-700 border-green-300',
  },
  'SQL Server': {
    icon: <img src="assets/sql-server.svg" alt="SQL Server" className="w-5 h-5" />,
    color: 'bg-red-100 text-red-700 border-red-300',
  },

  // DevOps & Tools
  Docker: {
    icon: <SiDocker />,
    color: 'bg-blue-100 text-blue-600 border-blue-300',
  },
  Git: {
    icon: <SiGit />,
    color: 'bg-orange-100 text-orange-700 border-orange-300',
  },
  GitHub: {
    icon: <SiGithub />,
    color: 'bg-gray-100 text-gray-700 border-gray-300',
  },
  'CI/CD': {
    icon: null,
    color: 'bg-green-100 text-green-700 border-green-300',
  },
  'CI/CD (GitHub Workflows)': {
    icon: <SiGithub />,
    color: 'bg-gray-100 text-gray-700 border-gray-300',
  },
  Portainer: {
    icon: <SiDocker />,
    color: 'bg-blue-100 text-blue-600 border-blue-300',
  },
  Traefik: {
    icon: <SiTraefikproxy />,
    color: 'bg-teal-100 text-teal-700 border-teal-300',
  },
  Hangfire: {
    icon: <img src="assets/hangfire.svg" alt="Hangfire" className="w-5 h-5" />,
    color: 'bg-orange-100 text-orange-700 border-orange-300',
  },
  Serilog: {
    icon: <img src="assets/serilog.png" alt="Serilog" className="w-5 h-5" />,
    color: 'bg-purple-100 text-purple-700 border-purple-300',
  },

  // Other
  'MediatR (CQRS)': {
    icon: null,
    color: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  },
  'Entity Framework Core': {
    icon: <SiDotnet />,
    color: 'bg-purple-100 text-purple-700 border-purple-300',
  },
  JWT: { icon: null, color: 'bg-pink-100 text-pink-700 border-pink-300' },
  'RESTful APIs': {
    icon: null,
    color: 'bg-teal-100 text-teal-700 border-teal-300',
  },
  'REST APIs': {
    icon: null,
    color: 'bg-teal-100 text-teal-700 border-teal-300',
  },
  Agile: { icon: null, color: 'bg-green-100 text-green-700 border-green-300' },
  Arduino: { icon: null, color: 'bg-teal-100 text-teal-700 border-teal-300' },
  'Tabletop Simulator': {
    icon: null,
    color: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  },

  // Cloud & Infrastructure
  Azure: {
    icon: <VscAzureDevops />,
    color: 'bg-blue-100 text-blue-600 border-blue-300',
  },
  'Google Cloud Platform': {
    icon: <SiGooglecloud />,
    color: 'bg-red-100 text-red-600 border-red-300',
  },

  // Authentication & Security
  'Google OAuth': {
    icon: null,
    color: 'bg-red-100 text-red-600 border-red-300',
  },
  Keycloak: {
    icon: null,
    color: 'bg-teal-100 text-teal-700 border-teal-300',
  },
  'OAuth 2.0': {
    icon: null,
    color: 'bg-green-100 text-green-700 border-green-300',
  },

  // Monitoring & Logging
  'Application Insights': {
    icon: <VscAzureDevops />,
    color: 'bg-blue-100 text-blue-600 border-blue-300',
  },
  Sentry: {
    icon: <SiSentry />,
    color: 'bg-purple-100 text-purple-700 border-purple-300',
  },
};

export const getTechConfig = (tech: string) => {
  return (
    techConfig[tech] || {
      icon: null,
      color: 'bg-gray-100 text-gray-700 border-gray-300',
    }
  );
};
