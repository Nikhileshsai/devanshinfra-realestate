
import React from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types';
import { supabase } from '@/lib/supabase';

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
