'use client';

import React, { useState } from 'react';
import { Property } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { MapPin, Bed, Bath, Car, Building, Zap, Star, Phone } from 'lucide-react';

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const { language } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

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

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setIsZoomed(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (property.image_urls?.length || 1));
    setIsZoomed(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + (property.image_urls?.length || 1)) % (property.image_urls?.length || 1));
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const renderFeature = (Icon: React.ElementType, text: string) => (
    <div className="flex items-center space-x-3">
      <Icon className="w-6 h-6 text-indigo-500" />
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{language === 'en' ? property.project_name : property.project_name_te || property.project_name}</h1>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{language === 'en' ? property.location : property.location_te || property.location}</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{language === 'en' ? property.description : property.description_te || property.description}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center"><Zap className="w-6 h-6 mr-3 text-indigo-500"/>{content[language].amenities}</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(language === 'en' ? property.amenities : property.amenities_te || property.amenities)?.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500"/>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="mb-8 flex gap-2 h-[300px] md:h-[500px]">
            <div className="w-2/3 h-full relative rounded-lg overflow-hidden cursor-pointer" onClick={() => openGallery(0)}>
              <Image
                src={property.image_urls?.[0] || '/placeholder.jpg'}
                alt={`Image 1 of ${property.project_name}`}
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="w-1/3 flex flex-col gap-2 h-full">
              <div className="w-full h-1/2 relative rounded-lg overflow-hidden cursor-pointer" onClick={() => openGallery(1)}>
                <Image
                  src={property.image_urls?.[1] || '/placeholder.jpg'}
                  alt={`Image 2 of ${property.project_name}`}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
              </div>
              <div className="w-full h-1/2 relative rounded-lg overflow-hidden cursor-pointer" onClick={() => openGallery(2)}>
                <Image
                  src={property.image_urls?.[2] || '/placeholder.jpg'}
                  alt={`Image 3 of ${property.project_name}`}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  <span>View More</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center"><Building className="w-6 h-6 mr-3 text-indigo-500"/>{content[language].keySpecifications}</h3>
              <div className="grid grid-cols-1 gap-6">
                {renderFeature(Bed, `${content[language].price}: ${property.price} ${language === 'en' ? 'Lakhs' : 'లక్షలు'})`)}
                {renderFeature(Bath, `${content[language].pricePerSqYard}: ${property.price_per_sq_yard}`)}
                {renderFeature(Car, `${content[language].area}: ${property.area_sq_yards} ${language === 'en' ? 'sq. yards' : 'చ. గజాలు'})`)}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center"><Star className="w-6 h-6 mr-3 text-indigo-500"/>{content[language].investmentFeatures}</h3>
              <ul className="grid grid-cols-1 gap-4">
                {(language === 'en' ? property.investment_features : property.investment_features_te || property.investment_features)?.map((item, index) => <li key={index} className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500"/>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center"><MapPin className="w-6 h-6 mr-3 text-indigo-500"/>{content[language].connectivityInfo}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(language === 'en' ? property.connectivity_info : property.connectivity_info_te || property.connectivity_info)?.map((item, index) => <li key={index} className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-500"/>{item}</li>)}
            </ul>
          </div>

          {property.google_maps_embed && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center"><MapPin className="w-6 h-6 mr-3 text-indigo-500"/>{content[language].location}</h3>
              <div className="map-container rounded-lg overflow-hidden">
                <div dangerouslySetInnerHTML={{ __html: property.google_maps_embed }} />
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center"><Phone className="w-8 h-8 mr-4 text-indigo-500"/>{content[language].contactUs}</h3>
            <ContactForm propertyName={language === 'en' ? property.project_name : property.project_name_te || property.project_name} />
          </div>
          <a 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            className="bg-green-500 text-white p-4 rounded-md shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2 w-full"
          >
            <span>{content[language].whatsapp}</span>
          </a>
        </div>
      </div>

      {galleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50" onClick={closeGallery}>
          <button onClick={(e) => { e.stopPropagation(); closeGallery(); }} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
          
          <div className={`relative w-full max-w-4xl max-h-screen`}>
            <Image
              src={property.image_urls?.[currentImageIndex] || '/placeholder.jpg'}
              alt={`Image ${currentImageIndex + 1} of ${property.project_name}`}
              width={1920} height={1080} // Aspect ratio of the image
              className={`object-contain w-full h-auto transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
              sizes="(max-width: 1024px) 100vw, 1024px"
              onClick={(e) => { e.stopPropagation(); toggleZoom(); }}
            />
          </div>

          <div className="absolute bottom-4 md:bottom-auto md:left-4 md:right-4 flex justify-center md:justify-between w-full px-4">
            {currentImageIndex > 0 && (
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="text-white text-3xl font-bold">&larr;</button>
            )}
            <div className="flex-grow"></div>
            {currentImageIndex < (property.image_urls?.length || 0) - 1 && (
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="text-white text-3xl font-bold">&rarr;</button>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default PropertyDetails;