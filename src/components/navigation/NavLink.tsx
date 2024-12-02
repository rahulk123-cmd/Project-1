import React from 'react';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}