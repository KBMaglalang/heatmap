'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

// constants
import { HERO_TITLE, HERO_DESC } from '@/constants/staticText';

function HomepageHero() {
  return (
    <section id="hero" className="body-font text-brand-black">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        {/* hero text */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1
            data-test="hero-title"
            className="title-font mb-4 font-brand-roboto text-3xl  font-black text-brand-black sm:text-4xl"
          >
            {HERO_TITLE}
          </h1>
          <p className="font-regular mb-8 font-brand-montserrat leading-relaxed">{HERO_DESC}</p>

          {/* user buttons */}
          <div className="flex justify-center">
            <button
              data-test="hero-sign-up"
              onClick={() =>
                signIn('google', {
                  callbackUrl: `${window.location.origin}/user`,
                })
              }
              className="font-regular inline-flex rounded border-0 bg-brand-interface px-6 py-2 font-brand-montserrat text-lg text-white hover:bg-indigo-600 focus:outline-none"
            >
              Sign Up
            </button>
            <Link data-test="hero-learn-more" href={'/about'}>
              <button className="font-regular ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 font-brand-montserrat text-lg text-brand-black hover:bg-gray-200 focus:outline-none">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* hero image */}
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            src={'/assets/images/hero-2.jpg'}
            alt="hero"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="img-fluid rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default HomepageHero;
