import React from "react";
import type { Metadata } from "next";

import { COMPANY_META_DESCRIPTION, COMPANY_NAME } from "@/constants/staticText";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | About`,
  description: COMPANY_META_DESCRIPTION,
};

export default function About() {
  return (
    <section className="text-brand-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-brand-black font-medium title-font text-2xl mb-2 sm:mb-0 font-brand-roboto">
              About ConsistChart
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 p-4 font-brand-montserrat font-regular">
          <p className="text-base leading-relaxed mt-2">
            ConsistChart was born from a simple revelation: the immense
            satisfaction derived from seeing daily consistency visualized in a
            clear and captivating manner, much like a commit graph. But why
            should this powerful visual motivation be confined only to GitHub
            commits? We believed it shouldn't be.
          </p>
          <p className="text-base leading-relaxed mt-2">
            At ConsistChart, we expanded this concept to encapsulate the myriad
            activities and challenges we face every day. Our platform provides a
            panoramic view of your annual progress, allowing you to observe the
            beautiful tapestry of your dedication, one day at a time. From daily
            habits to long-term goals, our charts serve as a testament to the
            power of regularity and the achievements that come from it.
          </p>
          <p className="text-base leading-relaxed mt-2">
            Our mission was clear from the outset: to create an intuitive,
            straightforward tool that champions consistency. We wanted to
            celebrate every individual who commits to their journey,
            acknowledging the effort it takes to stay the course. With
            ConsistChart, every dot, every streak, and every filled square is a
            badge of honor, a celebration of persistence.
          </p>
          <p className="text-base leading-relaxed mt-2">
            Join us in this journey of unwavering dedication. Let's build
            habits, track progress, and celebrate every consistent effort, big
            or small.
          </p>
        </div>
      </div>
    </section>
  );
}
