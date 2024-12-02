import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 bg-gray-50 dark:bg-navy-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              2M+ Curated Digital Products
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Explore the best premium themes and plugins available for sale. 
              Our unique collection is hand-curated by experts. Find and buy the 
              perfect premium theme today.
            </p>
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
          </div>
          <div className="relative animate-fadeInRight">
            <img
              src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=1200"
              alt="Digital Products Preview"
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-10 -left-10 bg-purple-600 text-white p-6 rounded-lg transform hover:scale-110 transition-transform duration-200">
              <div className="text-4xl font-bold">22k+</div>
              <div>Themes & Plugins</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="flex flex-wrap justify-center gap-8 animate-fadeInUp">
          {['WordPress', 'Ruby', 'HTML', 'Figma', 'React', 'Vue'].map((tech) => (
            <div 
              key={tech} 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors hover:scale-110 duration-200"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}