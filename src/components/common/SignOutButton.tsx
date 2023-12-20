'use client';

import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <div
      data-test="sign-out-button"
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/` })}
    >
      <button className="font-regular mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 font-brand-montserrat text-base text-brand-black hover:bg-gray-200 focus:outline-none md:mt-0">
        Sign Out
        <ArrowRightIcon className="ml-1 h-4 w-4" />
      </button>
    </div>
  );
}
