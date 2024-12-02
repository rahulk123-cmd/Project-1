import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Categories() {
  const categories = [
    { icon: '💻', name: 'WordPress', count: '15,296' },
    { icon: '🔌', name: 'Plugin', count: '15,296' },
    { icon: '🌐', name: 'HTML', count: '15,296' },
    { icon: '📱', name: 'Mobile App', count: '15,296' },
    { icon: '⚡', name: 'JavaScript', count: '15,296' },
    { icon: '🔧', name: 'PHP Script', count: '15,296' },
    { icon: '💻', name: 'WordPress', count: '15,296' },
    { icon: '🔌', name: 'Plugin', count: '15,296' },
    { icon: '🌐', name: 'HTML', count: '15,296' },
    { icon: '📱', name: 'Mobile App', count: '15,296' },
    { icon: '⚡', name: 'JavaScript', count: '15,296' },
    { icon: '🔧', name: 'PHP Script', count: '15,296' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-navy-900 py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-200">
          Popular Categories
        </h2>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 bg-white dark:bg-navy-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-200">
                  {category.count}
                </p>
              </div>
            ))}
          </div>
          
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-navy-800 p-2 rounded-full shadow-lg transition-colors duration-200">
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-navy-800 p-2 rounded-full shadow-lg transition-colors duration-200">
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}