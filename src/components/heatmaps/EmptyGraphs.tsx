import React from "react";

// components
import NewButton from "./NewButton";

export default function EmptyGraphs() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-brand-black mb-20 font-brand-roboto">
        Create Graphs To Get Started!
      </h1>
      <NewButton />
    </div>
  );
}
