import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-900 transition-colors duration-200">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}