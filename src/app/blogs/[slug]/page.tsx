import React from 'react';
import { supabase } from '@/lib/supabase';
import { Blog } from '@/types';
import { notFound } from 'next/navigation';
import BlogDetailsContent from '@/components/BlogDetailsContent';
import PageOverlay from '@/components/PageOverlay';

// This function is for static site generation (SSG)
export async function generateStaticParams() {
  const { data: blogs, error } = await supabase.from('blogs').select('slug');

  if (error) {
    console.error('Error fetching blog slugs for static params:', error);
    return [];
  }

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (error || !blog) {
    console.error('Error fetching blog:', error);
    notFound(); // Show 404 page if blog not found
  }

  return (
    <>
      <PageOverlay backgroundImage="/hero-bg.jpg" alpha={0.7} />
      <BlogDetailsContent blog={blog as Blog} />
    </>
  );
};

export default BlogPage;
