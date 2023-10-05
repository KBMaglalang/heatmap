"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Select from "react-select";

const tempTimeZone = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];

export default function page() {
  const [themeToggle, setThemeToggle] = useState(false);
  const [notificationsToggle, setNotificationsToggle] = useState(false);
  const [name, setName] = useState("");

  const handleNotificationToggle = () => {
    // toast.success("Notifications updated");
    setNotificationsToggle(!notificationsToggle);
  };

  const handleLightDarkToggle = () => {
    // toast.success("Notifications updated");
    setThemeToggle(!themeToggle);
  };

  const handleTimezoneSelect = (e: any) => {};

  const handleUpdateName = (e: any) => {
    setName(e.target.value);
  };

  const handleDeleteAccount = () => {
    toast.success("Account deleted");
  };

  return (
    <main className="">
      <div className="container px-5 pt-24 mx-auto text-brand-black body-font ">
        <div className="mb-12">
          <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black">
              User and Account Settings
            </h1>
          </div>

          <div className="flex flex-col w-4/5 mx-auto mt-24">
            {/* light and dark theme */}
            <div className="mb-12">
              <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black">
                  Theme
                </h1>
              </div>

              <div className="flex flex-row justify-between items-center my-2 w-full">
                <span className="mr-4 text-xl ">Light or Dark Mode</span>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={handleLightDarkToggle}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-brand-black dark:text-gray-300">
                    {notificationsToggle ? "Dark" : "Light"}
                  </span>
                </label>
              </div>
            </div>

            {/* timezone settings */}
            <div className="mb-12">
              <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black">
                  Timezone
                </h1>
              </div>

              {/* timezone */}
              <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl ">Select Timezone</span>

                <Select
                  isSearchable
                  // defaultValue={model}
                  placeholder={"Timezone"}
                  options={tempTimeZone}
                  // isLoading={isLoading}
                  menuPosition="fixed"
                  className="mt-2 w-1/3 "
                  // styles={{
                  //   control: (baseStyles) => ({
                  //     ...baseStyles,
                  //     backgroundColor: "#212121",
                  //     borderColor: "#212121",
                  //   }),
                  //   option: (baseStyles) => ({
                  //     ...baseStyles,
                  //     backgroundColor: "#212121",
                  //     color: "#fff",
                  //   }),
                  //   input: (baseStyles) => ({
                  //     ...baseStyles,
                  //     color: "#fff",
                  //   }),
                  //   placeholder: (baseStyles) => ({
                  //     ...baseStyles,
                  //     color: "#fff",
                  //   }),
                  //   singleValue: (baseStyles) => ({
                  //     ...baseStyles,
                  //     color: "#fff",
                  //   }),
                  // }}
                  onChange={handleTimezoneSelect}
                />
              </div>
            </div>

            {/* notifications */}
            <div className="mb-12">
              <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black">
                  Notifications
                </h1>
              </div>
              <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl ">Enable Notifications</span>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={handleNotificationToggle}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                  <span className="ml-3 text-sm font-medium text-brand-black dark:text-gray-300">
                    {notificationsToggle ? "On" : "Off"}
                  </span>
                </label>
              </div>
            </div>

            {/* account settings */}
            <div className="mb-12">
              <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black">
                  Account Settings
                </h1>
              </div>

              <div>
                {/* name */}
                <div className="flex flex-row justify-between items-center mt-2 w-full">
                  <span className="mr-4 text-xl ">Full Name</span>

                  <input
                    type="text"
                    className="w-1/3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brand-interface focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-brand-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Name"
                    value={name}
                    onChange={handleUpdateName}
                  />
                </div>
              </div>
            </div>

            {/* delete account */}
            <div className="mb-12">
              <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black">
                  Delete Account
                </h1>
              </div>
              <div className="flex flex-row justify-between items-center mt-2 w-full ">
                <span className="mr-4 text-xl ">
                  Are you sure you want to delete your account? This process is
                  non reversable
                </span>

                <button
                  className="bg-red-500 rounded-lg text-white py-2 px-4"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
