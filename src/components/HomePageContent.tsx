
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface HomePageContentProps {
  featuredProperties: Property[];
}

const HomePageContent: React.FC<HomePageContentProps> = ({ featuredProperties }) => {
  const { language } = useLanguage();

  const heroContent = {
    en: {
      title: 'Discover Your Dream Property with Us',
      subtitle: 'Where coastal charm meets urban growth.',
      button: 'Explore Our Listings',
    },
    te: {
      title: 'మాతో మీ కలల ఆస్తిని కనుగొనండి',
      subtitle: 'తీరప్రాంత అందం పట్టణ అభివృద్ధితో కలిసే చోట.',
      button: 'మా జాబితాలను అన్వేషించండి',
    },
  };

  const featuredContent = {
    en: {
      title: 'Our Premier Listings',
      button: 'View All Properties',
    },
    te: {
      title: 'మా ప్రీమియర్ జాబితాలు',
      button: 'అన్ని ఆస్తులను చూడండి',
    },
  };

  return (
    <main className="animate-fade-in">
      <div className="relative bg-gray-900 bg-fixed">
        <div 
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60"
        ></div>

        <div className="relative">
          {/* Hero Section */}
          <div className="h-[75vh] md:h-screen flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{heroContent[language].title}</h1>
            <p className="text-lg md:text-xl mb-8">{heroContent[language].subtitle}</p>
            <Link href="/properties" className="bg-indigo-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
              {heroContent[language].button}
            </Link>
          </div>

          {/* Featured Properties Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-lg shadow-lg rounded-lg p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">{featuredContent[language].title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featuredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Link href="/properties" className="bg-indigo-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                    {featuredContent[language].button}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HomePageContent;
