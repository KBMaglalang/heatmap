import React, { useEffect } from "react";
import type { Metadata } from "next";

// components
import UserHeatmap from "@/components/heatmaps/UserHeatmap";
import DataPointsList from "@/components/heatmaps/DataPointsList";

// context or stores

// constants and functions
import { COMPANY_META_DESCRIPTION, COMPANY_NAME } from "@/constants/staticText";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Graph`,
  description: COMPANY_META_DESCRIPTION,
};

type Props = {
  id: string;
};

export default function page({ params: { id } }: any) {
  return (
    <main className="h-full">
      <div>{id && <UserHeatmap id={id} />}</div>

      <div>
        <DataPointsList id={id} />
      </div>
    </main>
  );
}
