import React from 'react';
import type { Metadata } from 'next';

// components
import NewButton from '@/components/heatmaps/NewButton';
import GraphsList from '@/components/heatmaps/GraphsList';

// context or stores

// constants and functions
import { COMPANY_META_DESCRIPTION, COMPANY_NAME } from '@/constants/staticText';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Graphs`,
  description: COMPANY_META_DESCRIPTION,
};

export default function UserPage() {
  return (
    <main className="h-full">
      {/* heat map lists */}
      <GraphsList />

      {/* button */}
      <div className="fixed bottom-4 right-4 z-50 rounded p-2 text-white md:bottom-16 md:right-16">
        <NewButton />
      </div>
    </main>
  );
}
