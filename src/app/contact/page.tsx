import React from "react";

// components
import HomepageContactForm from "@/components/features/HomepageContactForm";

export default function Contact() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Reach Out to ConsistChart
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 p-4">
            <p className="text-base leading-relaxed mt-2">
              We're here to support your journey towards consistency and growth.
              Whether you have questions, feedback, or just want to share your
              success stories, we're all ears. Get in touch with the
              ConsistChart team and let's chart your path forward together.
            </p>
          </div>
        </div>
      </section>

      <HomepageContactForm />
    </>
  );
}
