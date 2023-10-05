import React from "react";
import Link from "next/link";

import { COMPANY_NAME } from "@/constants/staticText";

// components
import HeaderUserLogin from "./features/HeaderUserLogin";

function Header() {
  return (
    <header className="text-brand-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">{COMPANY_NAME}</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-brand-black">
            Home
          </Link>
          <Link href={"/about"} className="mr-5 hover:text-brand-black">
            About
          </Link>
          <Link href={"/contact"} className="mr-5 hover:text-brand-black">
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
