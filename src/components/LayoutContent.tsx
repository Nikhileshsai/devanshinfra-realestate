
'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeToggle from '@/components/ThemeToggle';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  const navContent = {
    en: {
      home: 'Home',
      properties: 'Properties',
      blogs: 'Blogs',
      title: 'Real Estate',
    },
    te: {
      home: 'హోమ్',
      properties: 'ఆస్తులు',
      blogs: 'బ్లాగులు',
      title: 'రియల్ ఎస్టేట్',
    },
  };

  const footerContent = {
    en: {
      contact: 'Contact Us',
      office: 'Office Details',
      links: 'Quick Links',
      home: 'Home',
      properties: 'Properties',
      rights: 'All rights reserved.',
    },
    te: {
      contact: 'మమ్మల్ని సంప్రదించండి',
      office: 'కార్యాలయ వివరాలు',
      links: 'త్వరిత లింకులు',
      home: 'హోమ్',
      properties: 'ఆస్తులు',
      rights: 'అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
    },
  };

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-900 shadow-md py-4 px-8 flex justify-between items-center shrink-0 z-10">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <h1 className="text-2xl font-bold dark:text-white cursor-pointer">{navContent[language].title}</h1>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/properties" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{navContent[language].properties}</Link></li>
              <li><Link href="/blogs" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{navContent[language].blogs}</Link></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-grow overflow-y-auto no-scrollbar">
        {children}
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-4 shrink-0">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{footerContent[language].contact}</h3>
            <p>Email: devanshinfravizag@gmail.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{footerContent[language].office}</h3>
            <p>123 Real Estate Ave,</p>
            <p>City, State, 12345</p>
            <p>Country</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{footerContent[language].links}</h3>
            <ul>
              <li><Link href="/" className="hover:underline">{footerContent[language].home}</Link></li>
              <li><Link href="/properties" className="hover:underline">{footerContent[language].properties}</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {navContent[language].title}. {footerContent[language].rights}
        </div>
      </footer>
    </div>
  );
}
