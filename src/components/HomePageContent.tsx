
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

  const advantageContent = {
    en: {
      title: 'The Advantage of Investing in The City of Destiny',
      p1: 'Discover the unparalleled opportunities awaiting you in this vibrant coastal city. A unique blend of serene beaches and a burgeoning industrial landscape makes it one of the most sought-after destinations for real estate investment in India.',
      p2: 'With its strategic location, robust infrastructure, and a thriving economy, the city promises not just a home, but a lucrative asset that will appreciate over time. Experience a lifestyle that offers the best of both worlds.',
    },
    te: {
      title: 'డెస్టినీ నగరంలో పెట్టుబడి పెట్టడం వల్ల కలిగే ప్రయోజనం',
      p1: 'ఈ శక్తివంతమైన తీర నగరంలో మీకు ఎదురుచూస్తున్న అసమానమైన అవకాశాలను కనుగొనండి. ప్రశాంతమైన బీచ్‌లు మరియు అభివృద్ధి చెందుతున్న పారిశ్రామిక ప్రకృతి దృశ్యం యొక్క ప్రత్యేక సమ్మేళనం భారతదేశంలో రియల్ ఎస్టేట్ పెట్టుబడికి అత్యంత ఇష్టపడే గమ్యస్థానాలలో ఒకటిగా నిలిచింది.',
      p2: 'దాని వ్యూహాత్మక స్థానం, బలమైన మౌలిక సదుపాయాలు మరియు అభివృద్ధి చెందుతున్న ఆర్థిక వ్యవస్థతో, నగరం ఇంటిని మాత్రమే కాకుండా, కాలక్రమేణా ప్రశంసించబడే లాభదాయకమైన ఆస్తిని వాగ్దానం చేస్తుంది. రెండు ప్రపంచాలలో ఉత్తమమైన జీవనశైలిని అనుభవించండి.',
    },
  };

  return (
    <main className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Dream Property with Us</h1>
          <p className="text-lg md:text-xl mb-8">Where coastal charm meets urban growth.</p>
          <Link href="/properties" className="bg-indigo-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
            Explore Our Listings
          </Link>
        </div>
      </div>

      {/* The Advantage Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/advantage-image.jpg"
                alt="The Vizag Advantage"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{advantageContent[language].title}</h2>
              <p className="text-gray-600 mb-4">
                {advantageContent[language].p1}
              </p>
              <p className="text-gray-600 mb-6">
                {advantageContent[language].p2}
              </p>
              <Link href="#" className="text-indigo-600 font-semibold hover:underline">
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Premier Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/properties" className="bg-indigo-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
              View All Properties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePageContent;
