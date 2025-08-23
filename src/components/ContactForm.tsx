
'use client';

import React, { useState } from 'react';
import { submitContactForm } from '@/app/actions';
import { useLanguage } from '@/context/LanguageContext';

interface ContactFormProps {
  propertyName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ propertyName }) => {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const content = {
    en: {
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      email: 'Email (Optional)',
      message: 'Your Message (Optional)',
      submit: 'Submit',
      submitting: 'Submitting...',
      success: 'Thank you for your submission!',
      error: 'Something went wrong',
    },
    te: {
      fullName: 'పూర్తి పేరు',
      phoneNumber: 'ఫోన్ నంబర్',
      email: 'ఇమెయిల్ (ఐచ్ఛికం)',
      message: 'మీ సందేశం (ఐచ్ఛికం)',
      submit: 'సమర్పించు',
      submitting: 'సమర్పిస్తోంది...',
      success: 'మీ సమర్పణకు ధన్యవాదాలు!',
      error: 'ఏదో తప్పు జరిగింది',
    },
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append('propertyUrl', window.location.href);
    if (propertyName) {
      formData.append('propertyName', propertyName);
    }

    const result = await submitContactForm(formData);

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || content[language].error);
    }
  };

  if (submitted) {
    return <p className="text-green-500">{content[language].success}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{content[language].fullName}</label>
        <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{content[language].phoneNumber}</label>
        <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{content[language].email}</label>
        <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{content[language].message}</label>
        <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>
      <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
        {loading ? content[language].submitting : content[language].submit}
      </button>
    </form>
  );
};

export default ContactForm;
