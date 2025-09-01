'use client';

import React from 'react';
import { Blog } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

interface BlogDetailsContentProps {
  blog: Blog;
}

const BlogDetailsContent: React.FC<BlogDetailsContentProps> = ({ blog }) => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in dark:text-white">
      <div className="max-w-prose mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {language === 'te' ? blog.blog_title_telugu : blog.blog_title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
          {new Date(blog.created_at).toLocaleDateString(language === 'en' ? 'en-US' : 'te-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        {blog.image_url && (
          <div className="relative w-full aspect-[16/9] mb-8">
            <Image
              src={blog.image_url}
              alt={language === 'te' ? blog.blog_title_telugu : blog.blog_title}
              fill
              className="rounded-lg object-cover"
              sizes="100vw" // Full width on all screens for a single blog post
              priority // Mark as priority for LCP
            />
          </div>
        )}

        <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
          <p>{language === 'te' ? blog.telugu_description : blog.english_description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContent;
