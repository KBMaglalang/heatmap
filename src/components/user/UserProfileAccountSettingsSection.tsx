'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// constants or functions
import { db } from '../../../firebase';

export default function UserProfileAccountSettingsSection() {
  const { data: session } = useSession();
  const [name, setName] = useState('');

  /**
  Fetches and sets the user data from the Firestore database.
  @returns {void} */
  useEffect(() => {
    if (session) {
      const fetchAndSetUserData = async () => {
        // Define a reference to the user document in Firestore
        const userRef = doc(db, 'users', session?.user?.email!);

        // Fetch the user document
        const userDoc = await getDoc(userRef);

        setName(userDoc?.data()?.name);
      };

      fetchAndSetUserData();
    }
  }, [session]);

  /**
  Updates the name of a user in the Firestore database.
  @returns {Promise<void>} - A promise that resolves when the name is successfully updated.
  */
  const handleUpdateName = async () => {
    const userRef = doc(db, 'users', session?.user?.email!);

    await updateDoc(userRef, {
      name: name.trim(),
    });

    toast.success('Name updated');
  };

  return (
    <div className="mb-12">
      <div className="mb-10 flex w-full flex-col flex-wrap items-start text-center">
        <h1 className="mb-2 font-brand-montserrat text-2xl  font-medium text-brand-black sm:text-3xl">
          Account Settings
        </h1>
      </div>

      <div>
        {/* name */}
        <div className="mt-2 flex w-full flex-col md:flex-row md:items-center md:justify-between">
          <span className="font-regular mb-4 mr-4 font-brand-montserrat text-xl">Full Name</span>

          {/* input field */}
          <div className="flex w-full flex-row md:w-1/3 ">
            <input
              type="text"
              className=" font-regular flex-1 rounded-l border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 font-brand-montserrat text-base leading-8 text-brand-black outline-none transition-colors duration-200 ease-in-out focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button
              className="font-regular mr-5 mt-0 inline-flex items-center rounded-r border-0 bg-brand-interface px-3 py-1 text-center font-brand-montserrat text-base text-white hover:bg-indigo-600 focus:outline-none"
              onClick={handleUpdateName}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
