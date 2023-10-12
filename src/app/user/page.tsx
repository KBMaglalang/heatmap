import React from "react";
import type { Metadata } from "next";

import { COMPANY_META_DESCRIPTION, COMPANY_NAME } from "@/constants/staticText";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Graphs`,
  description: COMPANY_META_DESCRIPTION,
};

// components
import NewButton from "@/components/heatmaps/NewButton";
import GraphsList from "@/components/heatmaps/GraphsList";

export default function UserPage() {
  return (
    <main className="h-full">
      {/* heat map lists */}
      <GraphsList />

      {/* button */}
      <div className="fixed bottom-32 sm:bottom-16 right-16 text-white p-2 rounded z-50">
        <NewButton />
      </div>
    </main>
  );
}
