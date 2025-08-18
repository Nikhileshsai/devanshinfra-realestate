
'use client';

import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300"
    >
      {language === 'en' ? 'తెలుగు' : 'English'}
    </button>
  );
};

export default LanguageToggle;
