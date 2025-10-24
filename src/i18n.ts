import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import it from './locales/it.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      it: {
        translation: it,
      },
    },
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'navigator'],
      // Keys to lookup language from
      lookupLocalStorage: 'language',
      // Cache user language
      caches: ['localStorage'],
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Save language preference when changed
i18n.on('languageChanged', lng => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('language', lng);
  }
});

export default i18n;
