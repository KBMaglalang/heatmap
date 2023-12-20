'use client';

import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { signIn } from 'next-auth/react';

export default function SignInButton() {
  return (
    <div
      data-test="sign-in-button"
      onClick={() => signIn('google', { callbackUrl: `${window.location.origin}/user` })}
    >
      <button className="font-regular mt-4 inline-flex items-center rounded border-0 bg-brand-interface px-3 py-1 font-brand-montserrat text-base text-white hover:bg-indigo-600 focus:outline-none md:mt-0">
        Sign In
        <ArrowRightIcon className="ml-1 h-4 w-4" />
      </button>
    </div>
  );
}
