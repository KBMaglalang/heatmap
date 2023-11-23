"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

// components

// context or store

// constants and functions
import { db } from "../../../firebase";

export default function UserProfileThemeSection() {
  const { data: session } = useSession();
  const [themeToggle, setThemeToggle] = useState(false);

  // set theme on initial load
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setThemeToggle(localTheme === "dark" ? true : false);
  }, []);

  /**
  Fetches and sets the user's theme preference from the Firestore database.
  @returns {void} */
  useEffect(() => {
    if (session) {
      const fetchAndSetUserData = async () => {
        // Define a reference to the user document in Firestore
        const userRef = doc(db, "users", session?.user?.email!);

        // Fetch the user document
        const userDoc = await getDoc(userRef);

        setThemeToggle(userDoc?.data()?.theme);
      };

      fetchAndSetUserData();
    }
  }, [session]);

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
  effect is triggered whenever the `themeToggle` state variable changes. */
  useEffect(() => {
    localStorage.setItem("theme", themeToggle ? "dark" : "light");
    const localTheme = localStorage.getItem("theme");

    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", localTheme!);
    }
  }, [themeToggle]);

  /**
  Toggles between light and dark mode and updates the user's theme preference in the Firestore database.
  @returns {Promise<void>} - A promise that resolves when the theme is updated. */
  const handleToggleTheme = async () => {
    const toggleState = !themeToggle;

    setThemeToggle(toggleState);

    const userRef = doc(db, "users", session?.user?.email!);
    await updateDoc(userRef, {
      theme: toggleState,
    });
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

        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="toggle toggle-lg"
              checked={themeToggle}
              onChange={handleToggleTheme}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
