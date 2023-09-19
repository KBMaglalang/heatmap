import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import SignInButton from "../common/SignInButton";
import SignOutButton from "../common/SignOutButton";

export default async function HeaderUserLogin() {
  const session = await getServerSession(authOptions);

  return <>{!session ? <SignInButton /> : <SignOutButton />}</>;
}
