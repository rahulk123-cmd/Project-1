import React from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/hero/Hero';
import { Features } from './components/sections/features/Features';
import { Categories } from './components/sections/categories/Categories';
import { FloatingIcons } from './components/sections/floating-icons/FloatingIcons';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Features />
        <Categories />
        <FloatingIcons />
      </Layout>
    </ThemeProvider>
  );
}

export default App;