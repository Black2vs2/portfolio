import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-scroll';
import { CONFIG } from '../data/portfolio';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300">
                <LazyLoadImage
                  src="assets/pic.png"
                  alt="Luca Sartori"
                  effect="blur"
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-2xl md:text-3xl mb-2 animate-pulse">
              {t('hero.greeting')}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-6">
            {CONFIG.name}
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mb-8">{CONFIG.title}</h2>

          {/* Bio */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {t('hero.bio')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="projects"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="btn-primary cursor-pointer"
            >
              {t('hero.viewWork')}
            </Link>
            <Link 
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="btn-secondary cursor-pointer"
            >
              {t('hero.getInTouch')}
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="inline-block text-gray-400 hover:text-primary-600 transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
