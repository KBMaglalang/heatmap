import React from "react";
import Link from "next/link";

import { COMPANY_NAME } from "@/constants/staticText";

// components
import HeaderUserLogin from "./features/HeaderUserLogin";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">{COMPANY_NAME}</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={"/about"} className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href={"/contact"} className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* <Link href={"/signup"}>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-5">
            Sign Up
            <UserIcon className="w-4 h-4 ml-1" />
          </button>
        </Link> */}

        {/* <Link href={"/signin"}>
          <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 text-white">
            Sign In
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </button>
        </Link> */}

        <HeaderUserLogin />
      </div>
    </header>
  );
}

export default Header;
