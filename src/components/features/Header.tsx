import React from "react";
import Link from "next/link";

import { COMPANY_NAME } from "@/constants/staticText";

// components
import HeaderUserLogin from "./HeaderUserLogin";

function Header() {
  return (
    <header className="text-brand-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl font-brand-roboto ">
            {COMPANY_NAME}
          </span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link
            href={"/"}
            className="mr-5 hover:text-brand-black font-brand-montserrat"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="mr-5 hover:text-brand-black font-brand-montserrat"
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="mr-5 hover:text-brand-black font-brand-montserrat"
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