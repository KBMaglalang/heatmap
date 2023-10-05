"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <div onClick={() => signOut({ callbackUrl: `${window.location.origin}/` })}>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-brand-black font-brand-montserrat font-regular">
        Sign Out
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}
