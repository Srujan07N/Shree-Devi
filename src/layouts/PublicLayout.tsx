import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { FloatingActions } from '../components/common/FloatingActions';

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black transition-colors duration-200">
      <Navbar />
      <main className="flex-1 pt-[104px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};
