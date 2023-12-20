import React from 'react';

// components
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';

type Props = {
  children: React.ReactNode;
};

function HomepageLayout({ children }: Props) {
  return (
    <div className="max-w-screen flex h-screen flex-col">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default HomepageLayout;
