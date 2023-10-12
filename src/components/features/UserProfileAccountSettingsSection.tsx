"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

import { db } from "../../../firebase";

export default function UserProfileAccountSettingsSection() {
  const { data: session } = useSession();
  const [name, setName] = useState("");

  useEffect(() => {
    if (session) {
      const fetchAndSetUserData = async () => {
        // Define a reference to the user document in Firestore
        const userRef = doc(db, "users", session?.user?.email!);

        // Fetch the user document
        const userDoc = await getDoc(userRef);

        setName(userDoc?.data()?.name);
      };

      fetchAndSetUserData();
    }
  }, [session]);

  const handleUpdateName = async () => {
    const userRef = doc(db, "users", session?.user?.email!);

    await updateDoc(userRef, {
      name: name.trim(),
    });

    toast.success("Name updated");
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
        <h1 className="sm:text-3xl text-2xl font-medium  mb-2 text-brand-black font-brand-montserrat">
          Account Settings
        </h1>
      </div>

      <div>
        {/* name */}
        <div className="flex flex-row justify-between items-center mt-2 w-full">
          <span className="mr-4 text-xl font-brand-montserrat font-regular">
            Full Name
          </span>

          {/* input field */}
          <div className="flex flex-row w-1/3">
            <input
              type="text"
              className=" flex-1 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-brand-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-brand-montserrat font-regular"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button
              className="inline-flex items-center bg-brand-interface border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 mr-5 text-white font-brand-montserrat font-regular"
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
