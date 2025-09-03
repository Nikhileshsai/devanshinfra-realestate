
'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface PageOverlayProps {
  backgroundImage: string;
  alpha?: number; // 0 to 1
}

const PageOverlay: React.FC<PageOverlayProps> = ({ backgroundImage, alpha = 0.6 }) => {
  const { theme } = useTheme();
  const overlayColorClass = theme === 'dark' ? 'bg-black' : 'bg-white';

  return (
    <div className="fixed inset-0 z-[-1]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div
        className={`absolute inset-0 ${overlayColorClass}`}
        style={{ opacity: alpha }}
      ></div>
    </div>
  );
};

export default PageOverlay;
