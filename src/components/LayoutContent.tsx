'use client';

import React, { useState } from 'react'; // Add useState
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeToggle from '@/components/ThemeToggle';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

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
    <>
      
      <div className="h-screen flex flex-col bg-transparent">
        <header className="bg-white/10 dark:bg-black/10 backdrop-blur-lg shadow-md py-4 px-4 flex justify-between items-center shrink-0 z-10 md:px-8"> {/* Adjusted px for mobile */}
          {/* Left group: Title + Hamburger */}
          <div className="flex items-center space-x-4 md:space-x-8"> {/* Adjusted space-x for mobile */}
            {/* Hamburger Icon - visible on small screens */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {/* Hamburger icon (3 lines) */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <Link href="/">
              <h1 className="text-xl font-bold dark:text-white cursor-pointer md:text-2xl">{navContent[language].title}</h1> {/* Adjusted text size for mobile */}
            </Link>
          </div>

          {/* Desktop Navigation - hidden on small screens */}
          <nav className="hidden md:block"> {/* Hidden on mobile, visible on desktop */}
            <ul className="flex space-x-4">
              <li><Link href="/properties" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{navContent[language].properties}</Link></li>
              <li><Link href="/blogs" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{navContent[language].blogs}</Link></li>
            </ul>
          </nav>

          {/* Desktop Toggles - hidden on small screens */}
          <div className="hidden md:flex items-center space-x-4"> {/* Hidden on mobile, visible on desktop */}
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white/10 dark:bg-black/10 backdrop-blur-lg z-50 flex flex-col md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            {/* Close icon (X) */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="flex flex-col space-y-6 text-2xl mt-16 w-full"> {/* Added padding and top margin */}
            <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="px-8 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{navContent[language].home}</Link></li>
            <li><Link href="/properties" onClick={() => setIsMenuOpen(false)} className="px-8 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{navContent[language].properties}</Link></li>
            <li><Link href="/blogs" onClick={() => setIsMenuOpen(false)} className="px-8 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{navContent[language].blogs}</Link></li>
          </ul>
          <div className="flex items-center space-x-6 mt-8 px-8 w-full"> {/* Added padding */}
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <main className="flex-grow overflow-y-auto no-scrollbar">
          {children}
        </main>
        <footer className="bg-white/10 dark:bg-black/10 backdrop-blur-lg text-gray-800 dark:text-white py-2 shrink-0">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xs md:text-xl font-bold mb-4">{footerContent[language].contact}</h3>
              <p className="text-xs md:text-base">Email: devanshinfravizag@gmail.com</p>
              <p className="text-xs md:text-base">Phone: +1 (123) 456-7890</p>
            </div>
            <div className="hidden md:block md:col-span-1">
              <h3 className="text-xs md:text-xl font-bold mb-4">{footerContent[language].office}</h3>
              <p className="text-xs md:text-base">123 Real Estate Ave,</p>
              <p className="text-xs md:text-base">City, State, 12345</p>
              <p className="text-xs md:text-base">Country</p>
            </div>
            <div className="hidden md:block md:col-span-1">
              <h3 className="text-xs md:text-xl font-bold mb-4">{footerContent[language].links}</h3>
              <ul>
                <li><Link href="/" className="text-xs md:text-base hover:underline">{footerContent[language].home}</Link></li>
                <li><Link href="/properties" className="text-xs md:text-base hover:underline">{footerContent[language].properties}</Link></li>
                <li><Link href="/blogs" className="text-xs md:text-base hover:underline">{navContent[language].blogs}</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-2 md:mt-4 text-xs md:text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {navContent[language].title}. {footerContent[language].rights}
          </div>
        </footer>
      </div>
    </>
  );
}