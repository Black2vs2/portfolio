import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AIExpertise = () => {
  const { t } = useTranslation();

  const aiTools = [
    {
      name: 'Claude Code',
      icon: 'assets/claude.svg',
    },
    {
      name: 'GitHub Copilot',
      icon: 'assets/github-copilot.svg',
    },
    {
      name: 'Cursor',
      icon: 'assets/cursor.jpeg',
    },
    {
      name: 'Claude',
      icon: 'assets/claude.svg',
    },
    {
      name: 'ChatGPT',
      icon: 'assets/chatgpt.svg',
    },
  ];

  const aiProjects = [
    {
      title: t('ai.projects.mcp.title'),
      description: t('ai.projects.mcp.description'),
      icon: '🔧',
    },
    {
      title: t('ai.projects.vision.title'),
      description: t('ai.projects.vision.description'),
      icon: '👁️',
    },
  ];

  return (
    <section
      id="ai-expertise"
      className="section-container bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">🤖</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {t('ai.title')}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('ai.description')}</p>
        </div>

        {/* AI Tools Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {t('ai.toolsTitle')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {aiTools.map(tool => (
              <div
                key={tool.name}
                className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6 text-center">
                  <div className="flex justify-center items-center mb-4 h-20">
                    <LazyLoadImage
                      src={tool.icon}
                      alt={tool.name}
                      effect="blur"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {t('ai.projectsTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aiProjects.map(project => (
              <div
                key={project.title}
                className="card hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500"
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 max-w-2xl">
            <p className="text-lg text-gray-700 font-medium">{t('ai.cta')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExpertise;
