import { useTranslation } from 'react-i18next';
import { experiences } from '../data/portfolio';
import { getTechConfig } from '../utils/techIcons';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="section-container bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map(exp => (
            <div key={exp.id} className="card">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                    <p className="text-lg text-primary-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full text-sm font-bold border border-purple-200">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-6">
                  {exp.description[0].startsWith('experiences.')
                    ? (t(exp.description[0], { returnObjects: true }) as string[]).map(
                        (item: string, idx: number) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-primary-500 mr-3 flex-shrink-0">▹</span>
                            <span>{item}</span>
                          </li>
                        )
                      )
                    : exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-primary-500 mr-3 flex-shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => {
                    const config = getTechConfig(tech);
                    return (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold border flex items-center gap-1.5 ${config.color}`}
                      >
                        {config.icon && <span className="text-base">{config.icon}</span>}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
