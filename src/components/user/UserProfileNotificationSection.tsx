'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// components

// context or store

// constants and functions
import { db } from '../../../firebase';

export default function UserProfileNotificationSection() {
  const { data: session } = useSession();
  const [notificationsToggle, setNotificationsToggle] = useState(false);

  /**
  Fetches and sets the user's notification preference from the Firestore database.
  @returns {void} */
  useEffect(() => {
    if (session) {
      const fetchAndSetUserData = async () => {
        // Define a reference to the user document in Firestore
        const userRef = doc(db, 'users', session?.user?.email!);

        // Fetch the user document
        const userDoc = await getDoc(userRef);

        setNotificationsToggle(userDoc?.data()?.notification);
      };

      fetchAndSetUserData();
    }
  }, [session]);

  /**
  Toggles the user's notification preference and updates it in the Firestore database.
  @returns {Promise<void>} - A promise that resolves when the notification preference is updated. */
  const handleNotificationToggle = async () => {
    const toggleState = !notificationsToggle;

    toast.success(`Notifications ${toggleState ? 'On' : 'Off'}`);

    setNotificationsToggle(toggleState);

    const userRef = doc(db, 'users', session?.user?.email!);
    await updateDoc(userRef, {
      notification: toggleState,
    });
  };

  return (
    <div className="mb-12">
      <div className="mb-10 flex w-full flex-col flex-wrap items-start text-center">
        <h1 className="mb-2 font-brand-montserrat text-2xl  font-medium text-brand-black sm:text-3xl">
          Notifications
        </h1>
      </div>

      <div className="mt-2 flex w-full flex-row items-center justify-between">
        <span className="font-regular mr-4 font-brand-montserrat text-xl">
          Enable Notifications
        </span>

        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="toggle toggle-lg"
              checked={notificationsToggle}
              onChange={handleNotificationToggle}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
