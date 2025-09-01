'use client';

import React from 'react';
import { Blog } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for the "Read More" button

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { language } = useLanguage();

  const content = {
    en: {
      readMore: 'Read More',
    },
    te: {
      readMore: 'ఇంకా చదవండి',
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform hover:scale-105">
      {blog.image_url && (
        <div className="relative w-full aspect-[4/3] flex justify-center">
          <Image
            src={blog.image_url}
            alt={language === 'te' ? blog.blog_title_telugu : blog.blog_title}
            fill
            className="rounded-lg object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 dark:text-white">
          {language === 'te' ? blog.blog_title_telugu : blog.blog_title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          {new Date(blog.created_at).toLocaleDateString(language === 'en' ? 'en-US' : 'te-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-3 leading-relaxed">
          {language === 'te' ? blog.telugu_description : blog.english_description}
        </p>
        <Link href={`/blogs/${blog.id}`} className="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
          {content[language].readMore}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
