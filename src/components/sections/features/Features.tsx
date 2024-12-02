import React from 'react';
import { Users, Star, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "50k+ Customers",
      description: "Join our growing community of satisfied customers worldwide"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Hand-picked, quality-assured digital products for professionals"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Access",
      description: "Download your purchases instantly after payment confirmation"
    }
  ];

  return (
    <div className="bg-white dark:bg-navy-800 py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-navy-900 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}