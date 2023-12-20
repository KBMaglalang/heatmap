import React from 'react';

import {
  CONTENT_STEP_1,
  CONTENT_STEP_2,
  CONTENT_STEP_3,
  CONTENT_STEP_4,
} from '@/constants/staticText';

function HomepageContent() {
  return (
    <section className="body-font text-brand-black">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="flex w-full flex-wrap">
          <div className="md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
            {/* step 1 */}
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-interface text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font mb-1 font-brand-montserrat text-sm font-medium tracking-wider text-brand-black ">
                  {CONTENT_STEP_1.title}
                </h2>
                <p className="font-regular font-brand-montserrat leading-relaxed">
                  {CONTENT_STEP_1.description}
                </p>
              </div>
            </div>

            {/* step 2 */}
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-interface text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font mb-1 font-brand-montserrat text-sm font-medium tracking-wider text-brand-black ">
                  {CONTENT_STEP_2.title}
                </h2>
                <p className="font-regular font-brand-montserrat leading-relaxed">
                  {CONTENT_STEP_2.description}
                </p>
              </div>
            </div>

            {/* step 3 */}
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-interface text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font mb-1 font-brand-montserrat text-sm font-medium tracking-wider text-brand-black">
                  {CONTENT_STEP_3.title}
                </h2>
                <p className="font-regular font-brand-montserrat leading-relaxed">
                  {CONTENT_STEP_3.description}
                </p>
              </div>
            </div>

            {/* step 4  */}
            <div className="relative flex">
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-interface text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font mb-1 font-brand-montserrat text-sm font-medium tracking-wider text-brand-black">
                  {CONTENT_STEP_4.title}
                </h2>
                <p className="font-regular font-brand-montserrat leading-relaxed">
                  {CONTENT_STEP_4.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-3/5">
            <img
              src={'/assets/images/feature.jpg'}
              alt="step"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="img-fluid rounded-lg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageContent;
