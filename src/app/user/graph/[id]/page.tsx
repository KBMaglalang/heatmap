import React, { useEffect } from "react";

// components
import UserHeatmap from "@/components/heatmaps/UserHeatmap";
import DataPointsList from "@/components/heatmaps/DataPointsList";

// context or stores

// constants and functions

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
