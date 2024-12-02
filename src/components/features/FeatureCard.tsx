import React from 'react';
import { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-navy-800 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="text-purple-500 mb-4">
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}