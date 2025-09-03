
'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface HeroSectionProps {
  heroContent: {
    en: { title: string; subtitle: string; button: string };
    te: { title: string; subtitle: string; button: string };
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroContent }) => {
  const { language } = useLanguage();

  return (
    <div className="relative h-[75vh] flex flex-col items-center justify-center text-white text-center px-4">
      <div className="absolute inset-0 "></div>
      <div className="relative">
        <div className='backdrop-blur-lg bg-white/10 dark:bg-black/10 p-8 rounded-lg'>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{heroContent[language].title}</h1>
          <p className="text-lg md:text-xl mb-8">{heroContent[language].subtitle}</p>
          <Link href="/properties" className="bg-indigo-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
            {heroContent[language].button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
