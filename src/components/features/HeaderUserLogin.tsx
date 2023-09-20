import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { UserIcon } from "@heroicons/react/24/outline";

// components
import SignInButton from "../common/SignInButton";
import SignOutButton from "../common/SignOutButton";

export default async function HeaderUserLogin() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {!session ? (
        <SignInButton />
      ) : (
        <>
          <Link href={"/user"}>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-5">
              User
              <UserIcon className="w-4 h-4 ml-1" />
            </button>
          </Link>
          <SignOutButton />
        </>
      )}
    </>
  );
}
