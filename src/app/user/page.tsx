"use client";

import React from "react";

// components
import UserHeatmap from "@/components/features/UserHeatmap";

export default function UserPage() {
  return (
    <main className="h-screen">
      {/* title */}
      <div className="container px-5 pt-24 mx-auto text-gray-600 body-font">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Pitchfork Kickstarter Taxidermy
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
      </div>

      {/* heat map lists */}
      <div>
        <UserHeatmap />
      </div>
    </main>
  );
}