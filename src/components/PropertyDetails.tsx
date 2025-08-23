
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

  const content = {
    en: {
      location: 'Location',
      keySpecifications: 'Key Specifications',
      price: 'Price',
      pricePerSqYard: 'Price per sq. yard',
      area: 'Area',
      amenities: 'Amenities',
      investmentFeatures: 'Investment Features',
      connectivityInfo: 'Connectivity Info',
      contactUs: 'Contact Us',
      whatsapp: 'WhatsApp Us',
    },
    te: {
      location: 'స్థానం',
      keySpecifications: 'ముఖ్య లక్షణాలు',
      price: 'ధర',
      pricePerSqYard: 'గజానికి ధర',
      area: 'విస్తీర్ణం',
      amenities: 'సౌకర్యాలు',
      investmentFeatures: 'పెట్టుబడి ఫీచర్లు',
      connectivityInfo: 'కనెక్టివిటీ సమాచారం',
      contactUs: 'మమ్మల్ని సంప్రదించండి',
      whatsapp: 'వాట్సాప్ చేయండి',
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in dark:text-white">
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
            <h1 className="text-3xl font-bold">{language === 'en' ? property.project_name : property.project_name_te || property.project_name}</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{language === 'en' ? property.description : property.description_te || property.description}</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-2xl font-bold mb-4">{content[language].keySpecifications}</h3>
            <ul className="text-gray-700 dark:text-gray-300">
              <li>{content[language].price}: {property.price} {language === 'en' ? 'Lakhs' : 'లక్షలు'}</li>
              <li>{content[language].pricePerSqYard}: {property.price_per_sq_yard}</li>
              <li>{content[language].location}: {language === 'en' ? property.location : property.location_te || property.location}</li>
              <li>{content[language].area}: {property.area_sq_yards} {language === 'en' ? 'sq. yards' : 'చ. గజాలు'}</li>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-2xl font-bold mb-4">{content[language].amenities}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
              {(language === 'en' ? property.amenities : property.amenities_te || property.amenities)?.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-2xl font-bold mb-4">{content[language].investmentFeatures}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
              {(language === 'en' ? property.investment_features : property.investment_features_te || property.investment_features)?.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-2xl font-bold mb-4">{content[language].connectivityInfo}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
              {(language === 'en' ? property.connectivity_info : property.connectivity_info_te || property.connectivity_info)?.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>

          {property.google_maps_embed && (
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-2xl font-bold mb-4">{content[language].location}</h3>
              <div dangerouslySetInnerHTML={{ __html: property.google_maps_embed }} />
            </div>
          )}

        </div>

        <div className="md:col-span-1 space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">{content[language].contactUs}</h3>
            <ContactForm propertyName={language === 'en' ? property.project_name : property.project_name_te || property.project_name} />
          </div>

          <a 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          >
            {content[language].whatsapp}
          </a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white dark:bg-gray-800 p-2 rounded-lg max-w-3xl max-h-full overflow-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-800 dark:text-white text-2xl font-bold bg-white dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
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
