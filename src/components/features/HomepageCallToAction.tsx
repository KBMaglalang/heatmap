'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

// constants
import { CTA_PITCH } from '@/constants/staticText';

function HomepageCallToAction() {
  return (
    <section className="body-font text-brand-black">
      <div className="container mx-auto px-5 py-24">
        <div className=" mx-auto flex flex-col items-center sm:flex-row sm:items-center">
          <h1 className="title-font  flex-grow font-brand-roboto text-2xl font-medium text-brand-black ">
            {CTA_PITCH}
          </h1>

          <button
            onClick={() =>
              signIn('google', {
                callbackUrl: `${window.location.origin}/user`,
              })
            }
            className="font-regular mt-10 flex-shrink-0 rounded border-0 bg-brand-interface px-8 py-2 font-brand-montserrat text-lg text-white hover:bg-indigo-600 focus:outline-none sm:mt-0"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomepageCallToAction;
