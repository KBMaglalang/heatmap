import React from 'react';
import Link from 'next/link';

// components
import HeaderUserLogin from './HeaderUserLogin';

// constants and functions
import { COMPANY_NAME } from '@/constants/staticText';

function Header() {
  return (
    <header className="body-font text-brand-black">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link
          data-test="header-logo"
          href="/"
          className="title-font mb-4 flex items-center font-medium text-blue-900 md:mb-0"
        >
          <span className="ml-3 font-brand-roboto text-xl ">{COMPANY_NAME}</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-4	md:mr-auto md:border-l md:border-gray-400 md:py-1 md:pl-4">
          <Link
            data-test="header-home"
            href={'/'}
            className="mr-5 font-brand-montserrat hover:text-brand-black"
          >
            Home
          </Link>
          <Link
            data-test="header-about"
            href={'/about'}
            className="mr-5 font-brand-montserrat hover:text-brand-black"
          >
            About
          </Link>
          <Link
            data-test="header-contact"
            href={'/contact'}
            className="mr-5 font-brand-montserrat hover:text-brand-black"
          >
            Contact
          </Link>
        </nav>

        {/* user sign in sign out button */}
        <HeaderUserLogin />
      </div>
    </header>
  );
}

export default Header;
