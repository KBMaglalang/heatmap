import React from "react";
import type { Metadata } from "next";

// components
import NewButton from "@/components/heatmaps/NewButton";
import GraphsList from "@/components/heatmaps/GraphsList";

// context or stores

// constants and functions
import { COMPANY_META_DESCRIPTION, COMPANY_NAME } from "@/constants/staticText";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Graphs`,
  description: COMPANY_META_DESCRIPTION,
};

export default function UserPage() {
  return (
    <main className="h-full">
      {/* heat map lists */}
      <GraphsList />

      {/* button */}
      <div className="fixed md:bottom-16 bottom-4 md:right-16 right-4 text-white p-2 rounded z-50">
        <NewButton />
      </div>
    </main>
  );
}
