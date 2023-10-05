import React from "react";

export default function About() {
  return (
    <section className="text-brand-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          {/* <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div> */}
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-brand-black font-medium title-font text-2xl mb-2 sm:mb-0">
              About ConsistChart
            </h1>
            {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p> */}
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 p-4">
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
          {/* <div className="p-4 md:w-1/3 sm:mb-0 mb-6"> */}
          {/* <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1203x503"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Shooting Stars
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
