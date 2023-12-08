import React from "react";
import type { Metadata } from "next";

// components

// context or stores

// constants and functions
import {
  COMPANY_META_DESCRIPTION,
  COMPANY_NAME,
  ABOUT_TITLE,
  ABOUT_DESCRIPTION,
} from "@/constants/staticText";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | About`,
  description: COMPANY_META_DESCRIPTION,
};

export default function About() {
  return (
    <section className="text-brand-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div data-test="about-header" className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-brand-black font-medium title-font text-2xl mb-2 sm:mb-0 font-brand-roboto">
              {ABOUT_TITLE}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 p-4 font-brand-montserrat font-regular">
          {ABOUT_DESCRIPTION.map((description, index) => (
            <p className="text-base leading-relaxed mt-2" key={index}>
              {description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
