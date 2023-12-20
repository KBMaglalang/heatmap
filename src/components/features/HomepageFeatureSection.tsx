import React from 'react';

// components
import FeatureItem from '../common/FeatureItem';

// constnats
import { FEATURE_TITLE, FEATURE_LIST } from '@/constants/staticText';

function HomepageFeatureSection() {
  return (
    <section className="body-font text-brand-black">
      <div className="container mx-auto px-5 py-24">
        {/* title */}
        <h1 className="title-font mb-20 text-center font-brand-roboto text-2xl font-medium text-brand-black sm:text-3xl">
          {FEATURE_TITLE}
        </h1>

        {/* benefits section */}
        <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
          {FEATURE_LIST.map((feature, index) => (
            <FeatureItem key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatureSection;
