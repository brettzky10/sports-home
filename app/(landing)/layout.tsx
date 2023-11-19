import Footer from './_components/footer';
import {Navbar} from '@/components/navbar';
import React from 'react';

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default HomePageLayout;