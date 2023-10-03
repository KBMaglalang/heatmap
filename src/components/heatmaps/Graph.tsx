import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  commitsData: { date: string; count: number }[];
  userSetStartDate?: string;
  useSetEndDate?: string;
};

import { SERIES, OPTION } from "@/constants/heatmapText";

// import { getStartDate } from "@/lib/heatmap/getStartDate";
// import { getEndDate } from "@/lib/heatmap/getEndDate";

export default function Graph({
  commitsData,
  userSetStartDate,
  useSetEndDate,
}: Props) {
  return (
    <div className="flex flex-col items-center mx-auto px-4 my-4">
      <ApexChart
        type="heatmap"
        options={OPTION}
        series={SERIES}
        height={400}
        width={1500}
      />
    </div>
  );
}
