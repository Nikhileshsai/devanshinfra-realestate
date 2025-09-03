import React from 'react';
import { supabase } from '@/lib/supabase';
import BlogsPageContent from './BlogsPageContent';
import PageOverlay from '@/components/PageOverlay';
import { Blog } from '@/types';

const BlogsPage = async () => {
  const { data: blogs, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error);
    // Handle the error appropriately
    return <div>Error fetching blogs</div>;
  }

  return (
    <>
      <PageOverlay backgroundImage="/hero-bg.jpg" alpha={0.5} />
      <BlogsPageContent blogs={blogs as Blog[]} />
    </>
  );
};

export default BlogsPage;
