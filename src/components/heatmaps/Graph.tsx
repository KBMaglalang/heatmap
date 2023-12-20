import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// constants and functions
import { organizeDateData } from '@/lib/heatmap/organizeData';
import { CHART_OPTIONS } from '@/constants/heatmapText';

type Props = {
  commitsData: any;
};

export default function Graph({ commitsData }: Props) {
  const heatmapData = commitsData?.docs?.map((commit: any) => commit.data());
  const seriesData = organizeDateData(heatmapData);

  // State to manage chart width
  const [chartWidth, setChartWidth] = useState(1000);

  // Reference to the container
  const containerRef = useRef(null);

  /**
  Sets the chart width based on the size of the container element and updates it on window resize.
  @returns {void} */
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
    window.addEventListener('resize', updateChartWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateChartWidth);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 mx-auto my-4 flex flex-col overflow-x-scroll px-4 md:items-center"
    >
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
