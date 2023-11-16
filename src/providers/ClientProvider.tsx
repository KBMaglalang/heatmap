"use client";

import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function ClientProvider() {
  // set theme on initial load
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", localTheme!);
    }
  }, []);

  return (
    <>
      <Toaster position="top-center" />
    </>
  );
}
