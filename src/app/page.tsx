
import { Property } from '@/types';
import { supabase } from '@/lib/supabase';
import HomePageContent from '@/components/HomePageContent';
import PageOverlay from '@/components/PageOverlay';

// This revalidates data on every request. In the future, consider implementing a webhook from the database for more efficient on-demand revalidation.
export const revalidate = 0;

const getFeaturedProperties = async (): Promise<Property[]> => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .limit(4);

  if (error) {
    console.error('Error fetching featured properties:', error);
    return [];
  }

  return data || [];
};

const HomePage = async () => {
  const featuredProperties = await getFeaturedProperties();

  return (
    <>
      <PageOverlay backgroundImage="/hero-bg.jpg" alpha={0.2} />
      <HomePageContent featuredProperties={featuredProperties} />
    </>
  );
};

export default HomePage;
