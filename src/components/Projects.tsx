import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { openSourceProjects, privateProjects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'opensource' | 'private'>('all');
  const { t } = useTranslation();

  const allProjects = [...openSourceProjects, ...privateProjects];

  const getFilteredProjects = () => {
    switch (activeTab) {
      case 'opensource':
        return openSourceProjects;
      case 'private':
        return privateProjects;
      default:
        return allProjects;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="section-container bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('projects.description')}</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-md font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-primary-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('projects.all')} ({allProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('opensource')}
              className={`px-6 py-2 rounded-md font-semibold transition-all cursor-pointer ${
                activeTab === 'opensource'
                  ? 'bg-white text-primary-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('projects.opensource')} ({openSourceProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('private')}
              className={`px-6 py-2 rounded-md font-semibold transition-all cursor-pointer ${
                activeTab === 'private'
                  ? 'bg-white text-primary-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('projects.private')} ({privateProjects.length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">{t('projects.noProjects')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
