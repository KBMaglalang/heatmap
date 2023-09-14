import React from "react";

import {
  FEATURE_TITLE,
  FEATURE_BENEFIT_1,
  FEATURE_BENEFIT_2,
  FEATURE_BENEFIT_3,
} from "@/constants/staticText";

function HomepageFeatureSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* title */}
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          {FEATURE_TITLE}
        </h1>

        {/* benefits section */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* benefit 1 */}
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {FEATURE_BENEFIT_1.title}
              </h2>
              <p className="leading-relaxed text-base">
                {FEATURE_BENEFIT_1.description}
              </p>
            </div>
          </div>

          {/* benefit 2 */}
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {FEATURE_BENEFIT_2.title}
              </h2>
              <p className="leading-relaxed text-base">
                {FEATURE_BENEFIT_2.description}
              </p>
            </div>
          </div>

          {/* benefit 3 */}
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {FEATURE_BENEFIT_3.title}
              </h2>
              <p className="leading-relaxed text-base">
                {FEATURE_BENEFIT_3.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatureSection;
