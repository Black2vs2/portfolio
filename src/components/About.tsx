import { useTranslation } from 'react-i18next';
import { skills } from '../data/portfolio';
import { getTechConfig } from '../utils/techIcons';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-container bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="card p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-primary-500 pb-2">
                {skillCategory.category}
              </h3>
              <ul className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => {
                  const config = getTechConfig(skill);
                  return (
                    <li key={skillIndex} className="flex items-center text-gray-700">
                      {config.icon ? (
                        <span className={`text-lg mr-2 ${config.color.split(' ')[1]}`}>
                          {config.icon}
                        </span>
                      ) : (
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      )}
                      <span className="font-medium">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
