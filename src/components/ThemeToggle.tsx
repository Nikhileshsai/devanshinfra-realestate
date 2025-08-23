
'use client';

import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const content = {
    en: {
      dark: 'Dark',
      light: 'Light',
      mode: 'Mode',
    },
    te: {
      dark: 'డార్క్',
      light: 'లైట్',
      mode: 'మోడ్',
    },
  };

  return (
    <button 
      onClick={toggleTheme}
      className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300"
    >
      {theme === 'light' ? content[language].dark : content[language].light} {content[language].mode}
    </button>
  );
};

export default ThemeToggle;
