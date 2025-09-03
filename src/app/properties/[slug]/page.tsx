
import React from 'react';
import { Property } from '@/types';
import { supabase } from '@/lib/supabase';
import PropertyDetails from '@/components/PropertyDetails';
import PageOverlay from '@/components/PageOverlay';

export async function generateStaticParams() {
  const { data: properties, error } = await supabase.from('properties').select('slug');

  if (error) {
    console.error('Error fetching property slugs:', error);
    return [];
  }

  return properties?.map((property) => ({
    slug: property.slug,
  })) || [];
}

const getProperty = async (slug: string): Promise<Property | null> => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching property with slug ${slug}:`, error);
    return null;
  }

  return data;
};

const PropertyDetailPage = async ({ params }: { params: { slug: string } }) => {
  const property = await getProperty(params.slug);

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
