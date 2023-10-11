"use client";

import React from "react";
import { toast } from "react-hot-toast";

export default function UserProfileDeleteSection() {
  const handleDeleteAccount = () => {
    toast.success("Account deleted");
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