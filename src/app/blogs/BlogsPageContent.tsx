'use client';

import React from 'react';
import { Blog } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import BlogCard from '@/components/BlogCard'; // Import BlogCard

const BlogsPageContent = ({ blogs }: { blogs: Blog[] }) => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white"> {/* Main page title */}
        {language === 'en' ? 'Our Latest Blogs' : 'మా తాజా బ్లాగులు'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Grid layout */}
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} isFirst={index === 0} /> // Use BlogCard component
        ))}
      </div>
    </div>
  );
};

export default BlogsPageContent;
