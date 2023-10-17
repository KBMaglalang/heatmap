"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { toast } from "react-hot-toast";

export default function UserProfileDeleteSection() {
  const { data: session } = useSession();

  /**
  Deletes a user account from the Firestore database and signs out the user.
  @returns {Promise<void>} - A promise that resolves when the account is deleted and the user is signed out. */
  const handleDeleteAccount = async () => {
    toast.success("Account deleted");
    await deleteDoc(doc(db, "users", session?.user?.email!));
    signOut({ callbackUrl: `${window.location.origin}/` });
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
        <h1 className="sm:text-3xl text-2xl font-medium  mb-2 text-brand-black font-brand-montserrat">
          Delete Account
        </h1>
      </div>
      <div className="flex flex-row justify-between items-center mt-2 w-full ">
        <span className="mr-4 text-xl font-brand-montserrat font-regular">
          Are you sure you want to delete your account? This process is non
          reversable
        </span>

        <button
          className="bg-red-500 rounded-lg text-white py-2 px-4 font-brand-montserrat font-regular"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
