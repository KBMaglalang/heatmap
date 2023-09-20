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
    <>
      {!session ? (
        <SignInButton />
      ) : (
        <>
          <GraphsButton />
          <ProfileButton />
          <SignOutButton />
        </>
      )}
    </>
  );
}
