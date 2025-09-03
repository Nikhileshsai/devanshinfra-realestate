
'use client';

import React from 'react';
import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface FeaturedPropertiesSectionProps {
  featuredContent: {
    en: { title: string; button: string };
    te: { title: string; button: string };
  };
  featuredProperties: Property[];
}

const FeaturedPropertiesSection: React.FC<FeaturedPropertiesSectionProps> = ({ featuredContent, featuredProperties }) => {
  const { language } = useLanguage();

  return (
    <section className="bg-white/10 dark:bg-black/10 backdrop-blur-lg mx-auto max-w-7xl ">
      <div className="my-16 px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{featuredContent[language].title}</h2>
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
    </section>
  );
};

export default FeaturedPropertiesSection;
