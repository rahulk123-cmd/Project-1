import React from 'react';
import { Newsletter } from './Newsletter';
import { FooterSection } from './FooterSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = {
    title: 'Quick Links',
    links: [
      { text: 'Pages', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Contact', href: '#' },
      { text: 'How to use', href: '#' },
      { text: 'Roadmap', href: '#' },
    ],
  };

  const services = {
    title: 'Services',
    links: [
      { text: 'Image Generator', href: '#' },
      { text: 'Video Generator', href: '#' },
      { text: 'Text Generator', href: '#' },
      { text: 'Code Generator', href: '#' },
      { text: 'Education Feedback', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-navy-900 py-12 sm:py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="Logo"
                className="w-8 h-8"
              />
              <span className="text-gray-900 dark:text-white font-bold text-xl transition-colors duration-200">AIWave</span>
            </div>
            <Newsletter />
          </div>

          <FooterSection {...quickLinks} />
          <FooterSection {...services} />

          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 transition-colors duration-200">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-200">
                <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">8819 Ohio St. South Gate, North America, USA</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-200">
                <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <a href="mailto:example@domain.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm sm:text-base">
                  example@domain.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-200">
                <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <a href="tel:+1386-688-3295" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm sm:text-base">
                  +1 386-688-3295
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}