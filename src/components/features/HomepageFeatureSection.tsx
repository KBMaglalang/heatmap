import React from "react";

// components
import FeatureItem from "../common/FeatureItem";

// constnats
import { FEATURE_TITLE, FEATURE_LIST } from "@/constants/staticText";

function HomepageFeatureSection() {
  return (
    <section className="text-brand-black body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* title */}
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-brand-black mb-20 font-brand-roboto">
          {FEATURE_TITLE}
        </h1>

        {/* benefits section */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {FEATURE_LIST.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatureSection;
