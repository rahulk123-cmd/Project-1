import React from 'react';

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
    >
      {children}
    </button>
  );
}