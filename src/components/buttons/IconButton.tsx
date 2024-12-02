import React from 'react';
import { LucideIcon } from 'lucide-react';

type IconButtonProps = {
  Icon: LucideIcon;
  onClick?: () => void;
  label?: string;
};

export function IconButton({ Icon, onClick, label }: IconButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
    >
      <Icon className="w-5 h-5" />
      {label && <span>{label}</span>}
    </button>
  );
}