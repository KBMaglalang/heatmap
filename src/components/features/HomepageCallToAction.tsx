"use client";

import React from "react";
import { signIn } from "next-auth/react";

// constants
import { CTA_PITCH } from "@/constants/staticText";

function HomepageCallToAction() {
  return (
    <section className="text-brand-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className=" flex flex-col sm:flex-row sm:items-center items-center mx-auto">
          <h1 className="flex-grow  text-2xl font-medium title-font text-brand-black font-brand-roboto ">
            {CTA_PITCH}
          </h1>

          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: `${window.location.origin}/user`,
              })
            }
            className="flex-shrink-0 text-white bg-brand-interface border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0 font-brand-montserrat font-regular"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomepageCallToAction;
