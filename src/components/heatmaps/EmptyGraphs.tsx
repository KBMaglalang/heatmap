import React from 'react';

// components
import NewButton from './NewButton';

export default function EmptyGraphs() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="title-font mb-20 text-center font-brand-roboto text-2xl font-medium text-brand-black sm:text-3xl">
        Create Graphs To Get Started!
      </h1>
      <NewButton />
    </div>
  );
}
