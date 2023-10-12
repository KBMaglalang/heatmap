import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { UserIcon } from "@heroicons/react/24/outline";

// components
import SignInButton from "../common/SignInButton";
import SignOutButton from "../common/SignOutButton";
import ProfileButton from "../common/ProfileButton";
import GraphsButton from "../common/GraphsButton";

export default async function HeaderUserLogin() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="md:ml-auto  md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
      {!session ? (
        <SignInButton />
      ) : (
        <>
          <GraphsButton />
          <ProfileButton />
          <SignOutButton />
        </>
      )}
    </nav>
  );
}
