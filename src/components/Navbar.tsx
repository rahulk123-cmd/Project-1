import React, { useState } from 'react';
import { ShoppingCart, Moon, Sun, Globe } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { useThemeContext } from './ThemeProvider';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm z-50 px-6 py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Stock And Account Book</div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Downloads</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Pages</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button 
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Create Account
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
            <Globe className="w-4 h-4" />
            <span>Eng</span>
          </button>
          <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
    </nav>
  );
}