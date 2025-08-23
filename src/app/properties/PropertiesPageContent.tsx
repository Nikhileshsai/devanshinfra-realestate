
'use client';

import React from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface PropertiesPageContentProps {
  properties: Property[];
}

const PropertiesPageContent: React.FC<PropertiesPageContentProps> = ({ properties }) => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Properties',
    },
    te: {
      title: 'మా ఆస్తులు',
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">{content[language].title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPageContent;
