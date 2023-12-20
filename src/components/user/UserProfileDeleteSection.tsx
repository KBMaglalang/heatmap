'use client';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { deleteDoc, doc, collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

// components

// context or store

// constants and functions
import { db } from '../../../firebase';

export default function UserProfileDeleteSection() {
  const { data: session } = useSession();
  const [heatmaps] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email!, 'heatmaps'),
        orderBy('createdAt', 'desc')
      )
  );

  /**
  Deletes a user account from the Firestore database and signs out the user.
  @returns {Promise<void>} - A promise that resolves when the account is deleted and the user is signed out. */
  const handleDeleteAccount = async () => {
    // delete all heatmaps associated with the user
    await heatmaps?.docs?.map(async (heatmap) => {
      await deleteDoc(doc(db, 'users', session?.user?.email!, 'heatmaps', heatmap.id));
    });

    // delete the user document
    await deleteDoc(doc(db, 'users', session?.user?.email!));

    // sign out the user and return to the homepage
    signOut({ callbackUrl: `${window.location.origin}/` });
  };

  return (
    <div className="mb-12">
      <div className="mb-10 flex w-full flex-col flex-wrap items-start text-center">
        <h1 className="mb-2 font-brand-montserrat text-2xl  font-medium text-brand-black sm:text-3xl">
          Delete Account
        </h1>
      </div>
      <div className="mt-2 flex w-full flex-row items-center justify-between ">
        <span className="font-regular mr-4 font-brand-montserrat text-xl">
          Are you sure you want to delete your account? This process is non reversable
        </span>

        <button
          className="font-regular rounded-lg bg-red-500 px-4 py-2 font-brand-montserrat text-white"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
