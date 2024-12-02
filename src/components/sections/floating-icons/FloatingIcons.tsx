import React from 'react';
import { FloatingIcon } from './FloatingIcon';

export function FloatingIcons() {
  const icons = [
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg',
      alt: 'Shopify',
      className: 'top-[15%] left-[5%] sm:left-[15%]',
      delay: 0
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React',
      className: 'top-[20%] right-[5%] sm:right-[20%]',
      delay: 0.2
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
      alt: 'Slack',
      className: 'bottom-[30%] left-[10%] sm:left-[25%] hidden sm:block',
      delay: 0.4
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg',
      alt: 'Spotify',
      className: 'top-[35%] right-[15%] sm:right-[30%] hidden sm:block',
      delay: 0.6
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      alt: 'Figma',
      className: 'bottom-[25%] right-[10%] sm:right-[25%]',
      delay: 0.8
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      alt: 'VSCode',
      className: 'bottom-[20%] left-[15%] sm:left-[20%]',
      delay: 1
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      alt: 'GitHub',
      className: 'top-[25%] left-[20%] sm:left-[30%] hidden sm:block',
      delay: 1.2
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'TypeScript',
      className: 'bottom-[35%] right-[5%] sm:right-[15%] hidden sm:block',
      delay: 1.4
    }
  ];

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-50 dark:bg-navy-900 transition-colors duration-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative h-full">
        <div className="absolute inset-0">
          {icons.map((icon, index) => (
            <FloatingIcon key={index} {...icon} />
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/30 rounded-3xl blur-2xl animate-pulse" />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-3xl shadow-2xl bg-white dark:bg-navy-800 p-4 animate-float transition-colors duration-200"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}