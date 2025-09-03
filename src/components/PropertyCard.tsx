
import React from 'react';
import { Property } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface PropertyCardProps {
  property: Property;
  isFirst?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, isFirst }) => {
  const { language } = useLanguage();

  const content = {
    en: {
      lakhs: 'Lakhs',
      sqYards: 'sq. yards',
      priceOnRequest: 'Price on request',
    },
    te: {
      lakhs: 'లక్షలు',
      sqYards: 'చ. గజాలు',
      priceOnRequest: 'ధర అభ్యర్థనపై',
    },
  };

  return (
    <Link href={`/properties/${property.slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform hover:scale-105">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={property.image_urls?.[0] || '/placeholder.jpg'}
            alt={`Image of ${property.project_name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={isFirst}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold dark:text-white">{language === 'en' ? property.project_name : property.project_name_te || property.project_name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{language === 'en' ? property.location : property.location_te || property.location}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold dark:text-white">{property.price ? `${property.price} ${content[language].lakhs}` : content[language].priceOnRequest}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{property.area_sq_yards ? `${property.area_sq_yards} ${content[language].sqYards}` : ''}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
