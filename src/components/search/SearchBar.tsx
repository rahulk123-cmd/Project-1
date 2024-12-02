import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative group">
      <input
        type="text"
        placeholder="Search theme, plugins & more..."
        className="w-full px-6 py-4 rounded-lg bg-white dark:bg-navy-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-purple-600 transition-all duration-200"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition-colors group-hover:scale-105 duration-200">
        <Search className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}