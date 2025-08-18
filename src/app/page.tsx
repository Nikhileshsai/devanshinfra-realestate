
import { Property } from '@/types';
import { supabase } from '@/lib/supabase';
import HomePageContent from '@/components/HomePageContent';

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

  return <HomePageContent featuredProperties={featuredProperties} />;
};

export default HomePage;
