'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const BlogsPage = () => {
  const { language } = useLanguage();

  const blogContent = {
    en: {
      title: 'The Advantage of Investing in The City of Destiny',
      p1: 'Discover the unparalleled opportunities awaiting you in this vibrant coastal city. A unique blend of serene beaches and a burgeoning industrial landscape makes it one of the most sought-after destinations for real estate investment in India.',
      p2: 'With its strategic location, robust infrastructure, and a thriving economy, the city promises not just a home, but a lucrative asset that will appreciate over time. Experience a lifestyle that offers the best of both worlds.',
      p3: 'Further expanding on the advantages, the city has seen significant government investment in infrastructure projects, including new roads, a modern airport, and improved public transportation. This commitment to development ensures sustained growth and enhances the city\'s appeal for both residents and investors.',
      p4: 'Moreover, the presence of numerous educational institutions and healthcare facilities makes it an ideal place for families. The cultural richness and diverse community add to the city\'s charm, offering a high quality of life. Investing here means being part of a dynamic future.',
    },
    te: {
      title: 'డెస్టినీ నగరంలో పెట్టుబడి పెట్టడం వల్ల కలిగే ప్రయోజనం',
      p1: 'ఈ శక్తివంతమైన తీర నగరంలో మీకు ఎదురుచూస్తున్న అసమానమైన అవకాశాలను కనుగొనండి. ప్రశాంతమైన బీచ్‌లు మరియు అభివృద్ధి చెందుతున్న పారిశ్రామిక ప్రకృతి దృశ్యం యొక్క ప్రత్యేక సమ్మేళనం భారతదేశంలో రియల్ ఎస్టేట్ పెట్టుబడికి అత్యంత ఇష్టపడే గమ్యస్థానాలలో ఒకటిగా నిలిచింది.',
      p2: 'దాని వ్యూహాత్మక స్థానం, బలమైన మౌలిక సదుపాయాలు మరియు అభివృద్ధి చెందుతున్న ఆర్థిక వ్యవస్థతో, నగరం ఇంటిని మాత్రమే కాకుండా, కాలక్రమేణా ప్రశంసించబడే లాభదాయకమైన ఆస్తిని వాగ్దానం చేస్తుంది. రెండు ప్రపంచాలలో ఉత్తమమైన జీవనశైలిని అనుభవించండి.',
      p3: 'అదనంగా, కొత్త రోడ్లు, ఆధునిక విమానాశ్రయం మరియు మెరుగైన ప్రజా రవాణాతో సహా మౌలిక సదుపాయాల ప్రాజెక్టులలో నగరం గణనీయమైన ప్రభుత్వ పెట్టుబడులను చూసింది. అభివృద్ధికి ఈ నిబద్ధత నిరంతర వృద్ధిని నిర్ధారిస్తుంది మరియు నివాసితులు మరియు పెట్టుబడిదారులకు నగరం యొక్క ఆకర్షణను పెంచుతుంది.',
      p4: 'అంతేకాకుండా, అనేక విద్యా సంస్థలు మరియు ఆరోగ్య సంరక్షణ సౌకర్యాలు ఉండటం కుటుంబాలకు ఇది ఆదర్శవంతమైన ప్రదేశం. సాంస్కృతిక సంపద మరియు విభిన్న సమాజం నగరం యొక్క ఆకర్షణను పెంచుతుంది, అధిక జీవన నాణ్యతను అందిస్తుంది. ఇక్కడ పెట్టుబడి పెట్టడం అంటే డైనమిక్ భవిష్యత్తులో భాగం కావడమే.',
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-center">{blogContent[language].title}</h1>
        <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
          <p>{blogContent[language].p1}</p>
          <p>{blogContent[language].p2}</p>
          <p>{blogContent[language].p3}</p>
          <p>{blogContent[language].p4}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;