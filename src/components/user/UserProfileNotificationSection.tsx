"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

// components

// context or store

// constants and functions
import { db } from "../../../firebase";

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
        const userRef = doc(db, "users", session?.user?.email!);

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

    toast.success(`Notifications ${toggleState ? "On" : "Off"}`);

    setNotificationsToggle(toggleState);

    const userRef = doc(db, "users", session?.user?.email!);
    await updateDoc(userRef, {
      notification: toggleState,
    });
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
        <h1 className="sm:text-3xl text-2xl font-medium  mb-2 text-brand-black font-brand-montserrat">
          Notifications
        </h1>
      </div>

      <div className="flex flex-row justify-between items-center mt-2 w-full">
        <span className="mr-4 text-xl font-brand-montserrat font-regular">
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
