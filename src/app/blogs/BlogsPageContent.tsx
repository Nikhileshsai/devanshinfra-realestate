'use client';

import React from 'react';
import { Blog } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

const BlogsPageContent = ({ blogs }: { blogs: Blog[] }) => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {language === 'te' ? blog.blog_title_telugu : blog.blog_title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            {blog.image_url && (
              <div className="flex justify-center mb-6">
                <Image
                  src={blog.image_url}
                  alt={language === 'te' ? blog.blog_title_telugu : blog.blog_title}
                  width={500}
                  height={300}
                  className="rounded-lg object-contain"
                />
              </div>
            )}
            <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
              <p>{language === 'te' ? blog.telugu_description : blog.english_description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPageContent;
