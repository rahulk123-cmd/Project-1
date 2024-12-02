import React from 'react';
import { LucideIcon } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  Icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
};

export function Button({ 
  children, 
  variant = 'primary', 
  Icon, 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200';
  
  const variants = {
    primary: 'bg-purple-600 text-white px-4 py-2 hover:bg-purple-700',
    secondary: 'bg-gray-200 dark:bg-navy-800 text-gray-900 dark:text-white px-4 py-2 hover:bg-gray-300 dark:hover:bg-navy-700',
    icon: 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}