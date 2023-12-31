import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// components
import SignInButton from '../common/SignInButton';
import SignOutButton from '../common/SignOutButton';
import ProfileButton from '../common/ProfileButton';
import GraphsButton from '../common/GraphsButton';

export default async function HeaderUserLogin() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex  flex-wrap items-center justify-center text-base md:ml-auto md:py-1 md:pl-4">
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
