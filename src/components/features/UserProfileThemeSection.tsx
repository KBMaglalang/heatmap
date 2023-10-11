"use client";

import React, { useState } from "react";

export default function UserProfileThemeSection() {
  const [themeToggle, setThemeToggle] = useState(false);

  const handleLightDarkToggle = () => {
    // toast.success("Notifications updated");
    setThemeToggle(!themeToggle);
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
        <h1 className="sm:text-3xl text-2xl font-medium  mb-2 text-brand-black font-brand-montserrat">
          Theme
        </h1>
      </div>

      <div className="flex flex-row justify-between items-center my-2 w-full">
        <span className="mr-4 text-xl font-brand-montserrat font-regular">
          Light or Dark Mode
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={handleLightDarkToggle}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-brand-black dark:text-gray-300">
            {themeToggle ? "Dark" : "Light"}
          </span>
        </label>
      </div>
    </div>
  );
}