import React from "react";
import Link from "next/link";

import { ChartBarSquareIcon } from "@heroicons/react/24/outline";

export default function GraphsButton() {
  return (
    <Link href={"/user"}>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-5">
        Graphs
        <ChartBarSquareIcon className="w-4 h-4 ml-1" />
      </button>
    </Link>
  );
}