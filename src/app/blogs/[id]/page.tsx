import React from 'react';
import { supabase } from '@/lib/supabase';
import { Blog } from '@/types';
import { notFound } from 'next/navigation';
import BlogDetailsContent from '@/components/BlogDetailsContent';

// This function is for static site generation (SSG)
export async function generateStaticParams() {
  const { data: blogs, error } = await supabase.from('blogs').select('id');

  if (error) {
    console.error('Error fetching blog IDs for static params:', error);
    return [];
  }

  return blogs.map((blog) => ({
    id: blog.id.toString(), // Ensure ID is a string
  }));
}

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !blog) {
    console.error('Error fetching blog:', error);
    notFound(); // Show 404 page if blog not found
  }

  return <BlogDetailsContent blog={blog as Blog} />;
};

export default BlogPage;
