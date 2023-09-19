"use client";

import React from "react";
import { useSession } from "next-auth/react";

import SignInButton from "../common/SignInButton";
import SignOutButton from "../common/SignOutButton";

export default function HeaderUserLogin() {
  const { data: session } = useSession();

  return <>{!session ? <SignInButton /> : <SignOutButton />}</>;
}
