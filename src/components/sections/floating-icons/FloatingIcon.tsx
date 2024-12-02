import React from 'react';

type FloatingIconProps = {
  src: string;
  alt: string;
  className: string;
  delay?: number;
};

export function FloatingIcon({ src, alt, className, delay = 0 }: FloatingIconProps) {
  const animationStyle = {
    animationDelay: `${delay}s`,
  };

  return (
    <div 
      className={`absolute ${className} animate-float transform hover:scale-110 transition-all duration-300`}
      style={animationStyle}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:bg-purple-500/30 transition-all duration-300" />
        <img 
          src={src} 
          alt={alt} 
          className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl shadow-lg bg-white dark:bg-navy-800 p-2 transition-colors duration-200"
        />
      </div>
    </div>
  );
}