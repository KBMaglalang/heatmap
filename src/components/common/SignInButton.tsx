"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    // <div onClick={() => signIn()}>
    <div
      onClick={() =>
        signIn("google", { callbackUrl: `${window.location.origin}/user` })
      }
    >
      <button className="inline-flex items-center bg-brand-interface border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 text-white">
        Sign In
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}
