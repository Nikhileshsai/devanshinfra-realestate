
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const propertyTypes = [
  {
    en: {
      title: 'Apartment',
    },
    te: {
      title: 'అపార్ట్‌మెంట్',
    },
    image: '/apartment.jpg',
  },
  {
    en: {
      title: 'Plot',
    },
    te: {
      title: 'ప్లాట్',
    },
    image: '/plot.jpg',
  },
  {
    en: {
      title: 'Villa',
    },
    te: {
      title: 'విల్లా',
    },
    image: '/villa.jpg',
  },
  {
    en: {
      title: 'Agricultural Land',
    },
    te: {
      title: 'వ్యవసాయ భూమి',
    },
    image: '/agriculture-land.jpg',
  },
  {
    en: {
      title: 'Read our Blogs about realestate',
    },
    te: {
      title: 'రియల్ ఎస్టేట్ గురించి మా బ్లాగులను చదవండి',
    },
    image: '/advantage-image.jpg',
    link: '/blogs',
  },
];

const PropertyTypeCards = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-lg mx-auto max-w-7xl border border-gray-300 dark:border-gray-700">
      <div className="py-4 md:py-8 container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {propertyTypes.map((propertyType, index) => {
            const cardContent = (
              <div
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <Image
                    src={propertyType.image}
                    alt={propertyType[language].title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-90 transition-opacity duration-300"
                    quality={60}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {propertyType[language].title}
                  </h3>
                </div>
              </div>
            );

            if (propertyType.link) {
              return (
                <Link href={propertyType.link} key={index} legacyBehavior>
                  <a>{cardContent}</a>
                </Link>
              );
            }

            return <div key={index}>{cardContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeCards;
