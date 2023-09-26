import React from "react";
import Link from "next/link";

import { CTA_PITCH } from "@/constants/staticText";

function HomepageCallToAction() {
  return (
    <section className="text-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className=" flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow  text-2xl font-medium title-font text-gray-900">
            {CTA_PITCH}
          </h1>
          <Link href={"/signup"}>
            <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomepageCallToAction;
