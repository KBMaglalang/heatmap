"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notificationsToggle, setNotificationsToggle] = useState(false);

  const handleNotificationToggle = () => {
    // toast.success("Notifications updated");
    setNotificationsToggle(!notificationsToggle);
  };

  const handleUpdateName = (e) => {
    setName(e.target.value);
  };

  const handleUpdateEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleDeleteAccount = () => {
    toast.success("Account deleted");
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    }
  }, [confirmPassword]);

  return (
    <main className="">
      <div className="container px-5 pt-24 mx-auto text-gray-600 body-font">
        <div className="mb-12">
          <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Theme
            </h1>
          </div>

          {/* light or dark mode */}
          {/* <div className="flex flex-row justify-between items-center my-2 w-full">
            <span className="mr-4 text-xl font-bold">Name</span>
            <input
              type="text"
              className="p-2 my-2 rounded-lg resize-none flex-1 border-2"
              placeholder="Name"
            />
          </div> */}

          {/* accent color */}
          {/* <div className="flex flex-row justify-between items-center mt-2 w-full">
            <span className="mr-4 text-xl font-bold">Name</span>
            <input
              type="text"
              className="p-2 my-2 rounded-lg resize-none flex-1 border-2"
              placeholder="Name"
            />
          </div> */}
        </div>

        {/* language settings */}
        <div className="mb-12">
          <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Language and Time Zone
            </h1>
          </div>

          {/* language */}
          {/* <div className="flex flex-row justify-between items-center mt-2 w-full">
            <span className="mr-4 text-xl font-bold">Name</span>
            <input
              type="text"
              className="p-2 my-2 rounded-lg resize-none flex-1 border-2"
              placeholder="Name"
            />
          </div> */}

          {/* timezone */}
          {/* <div className="flex flex-row justify-between items-center mt-2 w-full">
            <span className="mr-4 text-xl font-bold">Name</span>
            <input
              type="text"
              className="p-2 my-2 rounded-lg resize-none flex-1 border-2"
              placeholder="Name"
            />
          </div> */}
        </div>

        {/* notifications */}
        <div className="mb-12">
          <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Notifications
            </h1>
          </div>
          <div className="flex flex-row justify-between items-center mt-2 w-full">
            <span className="mr-4 text-xl font-bold">Enable Notifications</span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={handleNotificationToggle}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {notificationsToggle ? "On" : "Off"}
              </span>
            </label>
          </div>
        </div>

        {/* account settings */}
        <div className="mb-12">
          <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Account Settings
            </h1>
          </div>

          <div>
            {/* name */}
            <div className="flex flex-row justify-between items-center mt-2 w-full">
              <span className="mr-4 text-xl font-bold">Name</span>
              <input
                type="text"
                className="p-2 my-2 rounded-lg resize-none border-2 w-2/4"
                placeholder="Name"
                value={name}
                onChange={handleUpdateName}
              />
            </div>

            {/* email */}
            <div className="flex flex-row justify-between items-center mt-2 w-full">
              <span className="mr-4 text-xl font-bold">Email</span>
              <input
                type="text"
                className="p-2 my-2 rounded-lg resize-none  border-2 w-2/4"
                placeholder="Email"
                value={email}
                onChange={handleUpdateEmail}
              />
            </div>

            {/* password */}
            <div className="flex flex-row justify-between items-center mt-2 w-full">
              <span className="mr-4 text-xl font-bold">Password</span>
              <input
                type="text"
                className="p-2 my-2 rounded-lg resize-none border-2 w-2/4"
                placeholder="Password"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-2 w-full">
              <span className="mr-4 text-xl font-bold">
                Password Confirmation
              </span>
              <input
                type="text"
                className="p-2 my-2 rounded-lg resize-none border-2 w-2/4"
                placeholder="Password Confirmation"
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
              />
            </div>
          </div>
        </div>

        {/* delete account */}
        <div className="mb-12">
          <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Delete Account
            </h1>
          </div>
          <div className="flex flex-row justify-between items-center mt-2 w-full ">
            <span className="mr-4 text-xl font-bold">Delete Account?</span>
            <button
              className="bg-red-500 rounded-lg text-white py-2 px-4"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// todo: when the account has been created
// todo: theme or display preference
// todo: language and time zone
