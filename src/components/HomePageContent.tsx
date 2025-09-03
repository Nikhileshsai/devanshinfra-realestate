
'use client';

import React from 'react';
import { Property } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import PropertyTypeCards from './PropertyTypeCards';
import HeroSection from './HeroSection';
import FeaturedPropertiesSection from './FeaturedPropertiesSection';

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
      <HeroSection heroContent={heroContent} />

      <div className="my-36 px-12">
        <PropertyTypeCards />
      </div>

      <FeaturedPropertiesSection featuredContent={featuredContent} featuredProperties={featuredProperties} />
    </main>
  );
};

export default HomePageContent;
