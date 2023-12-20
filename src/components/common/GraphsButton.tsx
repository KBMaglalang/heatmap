import React from 'react';
import Link from 'next/link';
import { ChartBarSquareIcon } from '@heroicons/react/24/outline';

export default function GraphsButton() {
  return (
    <Link href={'/user'}>
      <button className="font-regular mr-5 mt-4 inline-flex items-center rounded border-0 bg-brand-interface px-3 py-1 font-brand-montserrat text-base text-white hover:bg-indigo-600 focus:outline-none md:mt-0">
        Graphs
        <ChartBarSquareIcon className="ml-1 h-4 w-4" />
      </button>
    </Link>
  );
}
