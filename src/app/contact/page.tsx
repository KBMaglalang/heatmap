import React from "react";
import type { Metadata } from "next";

// components
import HomepageContactForm from "@/components/features/HomepageContactForm";

// context or stores

// constants and functions
import {
  COMPANY_META_DESCRIPTION,
  COMPANY_NAME,
  CONTACT_TITLE,
  CONTACT_DESCRIPTION,
} from "@/constants/staticText";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Contact`,
  description: COMPANY_META_DESCRIPTION,
};

export default function Contact() {
  return (
    <>
      <section className="text-brand-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-full text-brand-black font-medium title-font text-2xl mb-2 sm:mb-0 font-brand-roboto">
                {CONTACT_TITLE}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 p-4 font-brand-montserrat font-regular">
            <p className="text-base leading-relaxed mt-2">
              {CONTACT_DESCRIPTION}
            </p>
          </div>
        </div>
      </section>

      <HomepageContactForm />
    </>
  );
}
