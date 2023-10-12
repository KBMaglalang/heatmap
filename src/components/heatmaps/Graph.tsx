import React, { useEffect, useState, useRef } from "react";
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

  // State to manage chart width
  const [chartWidth, setChartWidth] = useState(0);

  // Reference to the container
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to update width based on container size
    const updateChartWidth = () => {
      if (containerRef.current) {
        setChartWidth(containerRef.current);
      }
    };

    // Initial call to set width
    updateChartWidth();

    // Attach window resize event listener
    window.addEventListener("resize", updateChartWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateChartWidth);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center mx-auto px-4 my-4 z-10"
    >
      <ApexChart
        type="heatmap"
        options={CHART_OPTIONS}
        series={seriesData}
        height={400}
        width={chartWidth}
      />
    </div>
  );
}
