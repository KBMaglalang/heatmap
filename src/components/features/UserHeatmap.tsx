import React from "react";
import {
  TrashIcon,
  WrenchIcon,
  ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline";

// components
import Graph from "../heatmaps/Graph";

const tempData = [
  // { date: "2023-01-01", count: 5 },
  // { date: "2023-01-02", count: 7 },
  { date: "2023-01-03", count: 8 },
  { date: "2023-01-04", count: 10 },
  { date: "2023-01-05", count: 12 },
  { date: "2023-01-06", count: 15 },
  { date: "2023-01-07", count: 18 },
  { date: "2023-01-08", count: 10 },
  { date: "2023-01-09", count: 7 },
  { date: "2023-01-10", count: 4 },
  //... continue for other days in January
  { date: "2023-01-31", count: 20 },

  { date: "2023-02-01", count: 12 },
  { date: "2023-02-02", count: 14 },
  { date: "2023-02-03", count: 16 },
  { date: "2023-02-04", count: 18 },
  { date: "2023-02-05", count: 15 },
  { date: "2023-02-06", count: 13 },
  { date: "2023-02-07", count: 10 },
  { date: "2023-02-08", count: 7 },
  { date: "2023-02-09", count: 5 },
  //... and so on for other days in February
  { date: "2023-02-28", count: 19 },

  { date: "2023-03-01", count: 5 },
  { date: "2023-03-02", count: 8 },
  { date: "2023-03-03", count: 11 },
  { date: "2023-03-04", count: 14 },
  { date: "2023-03-05", count: 12 },
  { date: "2023-03-06", count: 10 },
  { date: "2023-03-07", count: 7 },
  { date: "2023-03-08", count: 4 },
  { date: "2023-03-09", count: 5 },
  //... continue for other days in March
  { date: "2023-03-31", count: 17 },
];

export default function UserHeatmap() {
  return (
    <section className="text-gray-800 body-font ">
      <div className="container px-5 py-24 mx-auto rounded-2xl">
        <div className="flex">
          {/* title */}
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Title
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Graph Description
            </p>
          </div>

          {/* user selection */}
          <div className="flex flex-col justify-around">
            {/* pin */}
            <ArrowUpOnSquareIcon className="h-4 w-4" />

            {/* edit */}
            <WrenchIcon className="h-4 w-4" />

            {/* delete */}
            <TrashIcon className="h-4 w-4" />
          </div>
        </div>

        {/* heat map */}
        <Graph commitsData={tempData} />

        {/* stats */}
        <div>
          {/* daily average */}
          {/* how many days in a year how you done this */}
          {/* longest streak */}
          {/* current streak */}
        </div>
      </div>
    </section>
  );
}
