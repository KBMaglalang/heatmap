"use client";

import React, { useState } from "react";

export default function UserProfileAccountSettingsSection() {
  const [name, setName] = useState("");

  const handleUpdateName = (e: any) => {
    setName(e.target.value);
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

          <input
            type="text"
            className="w-1/3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-brand-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-brand-montserrat font-regular"
            placeholder="Name"
            value={name}
            onChange={handleUpdateName}
          />
        </div>
      </div>
    </div>
  );
}
