
import React from 'react';
import { Property } from '@/types';
import { supabase } from '@/lib/supabase';
import PropertiesPageContent from './PropertiesPageContent';
import PageOverlay from '@/components/PageOverlay';

const getProperties = async (): Promise<Property[]> => {
  const { data, error } = await supabase
    .from('properties')
    .select('*');

  if (error) {
    console.error('Error fetching properties:', error);
    return [];
  }

  return data || [];
};

const PropertiesPage = async () => {
  const properties = await getProperties();

  return (
    <>
      <PageOverlay backgroundImage="/hero-bg.jpg" alpha={0.3} />
      <PropertiesPageContent properties={properties} />
    </>
  );
};

export default PropertiesPage;
