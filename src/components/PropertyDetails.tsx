
'use client';

import React, { useState } from 'react';
import { Property } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const { language } = useLanguage();
  const [mainImage, setMainImage] = useState<string>(property.image_urls?.[0] || '/placeholder.jpg');
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div>
            <div className="relative h-96 w-full mb-4 cursor-pointer" onClick={() => setShowModal(true)}>
              <Image
                src={mainImage}
                alt={`Image of ${property.project_name}`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {property.image_urls?.map((url, index) => (
                <div 
                  key={index} 
                  className={`relative h-24 w-24 flex-shrink-0 transform hover:scale-110 transition-transform duration-300 cursor-pointer ${mainImage === url ? 'border-2 border-indigo-500' : ''}`}
                  onClick={() => setMainImage(url)}
                >
                  <Image
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-bold">{language === 'en' ? property.project_name : property.project_name_te}</h1>
            <p className="mt-4">{language === 'en' ? property.description : property.description_te}</p>
          </div>

          {property.google_maps_embed && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <div dangerouslySetInnerHTML={{ __html: property.google_maps_embed }} />
            </div>
          )}
        </div>

        <div className="md:col-span-1 space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Key Specifications</h3>
            <ul>
              <li>Price: {property.price} Lakhs</li>
              <li>Price per sq. yard: {property.price_per_sq_yard}</li>
              <li>Location: {property.location}</li>
              <li>Area: {property.area_sq_yards} sq. yards</li>
            </ul>
          </div>

          <div>
            <details className="mb-4 transition-all duration-300">
              <summary className="text-xl font-bold cursor-pointer">Amenities</summary>
              <ul className="list-disc list-inside mt-2">
                {property.amenities?.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </details>
            <details className="mb-4 transition-all duration-300">
              <summary className="text-xl font-bold cursor-pointer">Investment Features</summary>
              <ul className="list-disc list-inside mt-2">
                {property.investment_features?.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </details>
            <details className="transition-all duration-300">
              <summary className="text-xl font-bold cursor-pointer">Connectivity Info</summary>
              <ul className="list-disc list-inside mt-2">
                {property.connectivity_info?.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </details>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ContactForm />
          </div>

          <a 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-2 rounded-lg max-w-3xl max-h-full overflow-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-800 text-2xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
            <Image
              src={mainImage}
              alt="Enlarged view"
              width={800}
              height={600}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
