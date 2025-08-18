
import React from 'react';
import { Property } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/properties/${property.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform hover:scale-105">
        <div className="relative h-48 w-full">
          <Image
            src={property.image_urls?.[0] || '/placeholder.jpg'}
            alt={`Image of ${property.project_name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold">{property.project_name}</h3>
          <p className="text-gray-600">{property.location}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold">{property.price ? `${property.price} Lakhs` : 'Price on request'}</p>
            <p className="text-sm text-gray-500">{property.area_sq_yards ? `${property.area_sq_yards} sq. yards` : ''}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
