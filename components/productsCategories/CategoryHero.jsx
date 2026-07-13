'use client';

import React from 'react';
import Image from 'next/image';

const CategoryHero = ({
  desktopImage,
  mobileImage,
  altText = 'Category Hero',
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`relative w-full h-screen md:h-[90vh] overflow-hidden ${className}`}>
      {/* Desktop Image - Hidden on Mobile */}
      <div className="hidden md:flex md:items-center md:justify-center absolute inset-0 w-full h-full bg-gray-100">
        {desktopImage ? (
          <Image
            src={desktopImage}
            alt={altText}
            fill
            priority
            quality={90}
            className="w-full h-full object-contain object-center"
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <p className="text-white text-center text-lg">Hero Image Placeholder</p>
          </div>
        )}
      </div>

      {/* Mobile Image - Visible only on Mobile */}
      <div className="md:hidden absolute inset-0 w-full h-full">
        {mobileImage ? (
          <Image
            src={mobileImage}
            alt={altText}
            fill
            priority
            quality={85}
            className="w-full h-full object-cover object-center"
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <p className="text-white text-center text-lg">Hero Image Placeholder</p>
          </div>
        )}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Overlay (if title and subtitle are provided) */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            {title && (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-lg sm:text-xl md:text-2xl drop-shadow-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryHero;
