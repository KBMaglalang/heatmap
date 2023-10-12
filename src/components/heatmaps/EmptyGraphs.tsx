import React from "react";

// components
import NewButton from "./NewButton";

export default function EmptyGraphs() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div> */}
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-brand-black mb-20 font-brand-roboto">
        Create Graphs To Get Started!
      </h1>
      <NewButton />
    </div>
  );
}
