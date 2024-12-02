import React from 'react';

type FooterSectionProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
};

export function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-gray-900 dark:text-white font-semibold mb-4 transition-colors duration-200">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}