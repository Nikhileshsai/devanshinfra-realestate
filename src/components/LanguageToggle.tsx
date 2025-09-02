
'use client';

import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      onClick={toggleLanguage}
      className="relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 bg-indigo-600">
      <span className={`absolute left-2 text-xs font-bold ${language === 'en' ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>EN</span>
      <span className={`absolute right-2 text-xs font-bold ${language === 'te' ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>TE</span>
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
          ${language === 'en' ? 'translate-x-8' : 'translate-x-0'}`}
      />
    </div>
  );
};

export default LanguageToggle;
