"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "../../../firebase";

export default function UserProfileNotificationSection() {
  const { data: session } = useSession();
  const [notificationsToggle, setNotificationsToggle] = useState(false);

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

  const handleNotificationToggle = async () => {
    setNotificationsToggle(!notificationsToggle);

    const userRef = doc(db, "users", session?.user?.email!);
    await updateDoc(userRef, {
      notification: !notificationsToggle,
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

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={notificationsToggle}
            className="sr-only peer"
            onChange={handleNotificationToggle}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

          <span className="ml-3 text-sm font-medium text-brand-black dark:text-gray-300">
            {notificationsToggle ? "On" : "Off"}
          </span>
        </label>
      </div>
    </div>
  );
}
