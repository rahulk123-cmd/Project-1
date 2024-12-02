import React from 'react';
import { Users, Star, Zap } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      Icon: Users,
      title: "50k+ Customers",
      description: "Join our growing community of satisfied customers worldwide"
    },
    {
      Icon: Star,
      title: "Premium Quality",
      description: "Hand-picked, quality-assured digital products for professionals"
    },
    {
      Icon: Zap,
      title: "Instant Access",
      description: "Download your purchases instantly after payment confirmation"
    }
  ];

  return (
    <div className="bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}