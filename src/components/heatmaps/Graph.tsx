import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { organizeDateData } from "@/lib/heatmap/organizeData";

type Props = {
  commitsData: any;
};

import { CHART_OPTIONS } from "@/constants/heatmapText";

export default function Graph({ commitsData }: Props) {
  const heatmapData = commitsData?.docs?.map((commit: any) => commit.data());
  const seriesData = organizeDateData(heatmapData);

  return (
    <div className="relative flex flex-col items-center mx-auto px-4 my-4 z-10">
      <ApexChart
        type="heatmap"
        options={CHART_OPTIONS}
        series={seriesData}
        height={400}
        width={1500}
      />
    </div>
  );
}
