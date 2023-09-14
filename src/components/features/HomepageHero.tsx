import React from "react";
import Link from "next/link";

import { HERO_TITLE, HERO_DESC } from "@/constants/staticText";

// TODO: update the image to use NEXT IMAGE and a real image

function HomepageHero() {
  return (
    <section id="hero" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* hero text */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {HERO_TITLE}
          </h1>
          <p className="mb-8 leading-relaxed">{HERO_DESC}</p>

          {/* user buttons */}
          <div className="flex justify-center">
            <Link href={"/signup"}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign Up
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* hero image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}

export default HomepageHero;
