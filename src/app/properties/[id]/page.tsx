
import React from 'react';
import { Property } from '@/types';
import { supabase } from '@/lib/supabase';
import PropertyDetails from '@/components/PropertyDetails';
import PageOverlay from '@/components/PageOverlay';

export async function generateStaticParams() {
  const { data: properties, error } = await supabase.from('properties').select('id');

  if (error) {
    console.error('Error fetching property ids:', error);
    return [];
  }

  return properties?.map((property) => ({
    id: property.id,
  })) || [];
}

const getProperty = async (id: string): Promise<Property | null> => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching property with id ${id}:`, error);
    return null;
  }

  return data;
};

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <PageOverlay backgroundImage="/hero-bg.jpg" alpha={0.5} />
      <PropertyDetails property={property} />
    </>
  );
};

export default PropertyDetailPage;
