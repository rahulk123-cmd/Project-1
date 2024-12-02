import React from 'react';
import { NavLink } from './NavLink';

export function NavLinks() {
  const links = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Downloads' },
    { href: '#', label: 'Pages' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <NavLink key={link.label} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}