
import React from 'react';
import { Property } from '@/types';
import { supabase } from '@/lib/supabase';
import PropertiesPageContent from './PropertiesPageContent';

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

  return <PropertiesPageContent properties={properties} />;
};

export default PropertiesPage;
