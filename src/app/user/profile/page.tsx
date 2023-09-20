import React from "react";

export default function page() {
  return (
    <main className="h-screen">
      {/* title */}
      <div className="container px-5 pt-24 mx-auto text-gray-600 body-font">
        <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            User Settings
          </h1>
        </div>

        {/* settings */}
        <div>
          {/* name */}
          <div className="flex flex-row justify-between items-center mt-2 w-full">
            <span className="mr-4 text-xl font-bold">Name</span>
            <input
              type="text"
              className="p-2 my-2 rounded-lg resize-none flex-1 border-2"
              placeholder="Name"
            />
          </div>

          {/* email */}
          <div className="flex flex-row justify-between items-center mt-2 w-full">
            <span className="mr-4 text-xl font-bold">Email</span>
            <input
              type="text"
              className="p-2 my-2 rounded-lg resize-none flex-1 border-2"
              placeholder="Email"
            />
          </div>

          {/* password */}
          <div className="flex flex-row justify-between items-center mt-2 w-full">
            <span className="mr-4 text-xl font-bold">Password</span>
            <input
              type="text"
              className="p-2 my-2 rounded-lg resize-none flex-1 border-2"
              placeholder="Password"
            />
          </div>

          {/* notifications */}
          <div className="flex flex-row justify-between items-center mt-2 w-full">
            <span className="mr-4 text-xl font-bold">Notifications</span>
            {/* <input
              type="text"
              className="p-2 my-2 rounded-lg resize-none flex-1 border-2"
              placeholder="Name"
            /> */}

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Notifications On
              </span>
            </label>
          </div>

          {/* delete account */}
          <div className="flex flex-row justify-between items-center mt-2 w-full">
            <span className="mr-4 text-xl font-bold">Delete Account</span>
            <button className="bg-red-500 rounded-lg text-white py-2 px-4">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
