import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img 
        src="https://stockandaccountbook.com/logo.png" 
        alt="Stock And Account Book" 
        className="w-10 h-10"
      />
      <span className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
        Stock And Account Book
      </span>
    </div>
  );
}