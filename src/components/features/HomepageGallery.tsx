import React from "react";

function HomepageGallery() {
  return (
    <section className="text-brand-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-brand-black font-brand-roboto ">
            Visual Empowerment for Habit Mastery
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-brand-montserrat font-regular">
            Discover the transformative impact of visual tracking. Our unique
            heatmap representation captures your dedication and progress,
            turning your daily efforts into a vibrant tapestry of achievement.
            Stay inspired, stay consistent, and watch your goals come to life.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={"/assets/images/g-1.jpg"}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2> */}
                <h1 className="title-font text-lg font-medium text-brand-black mb-3 font-brand-montserrat ">
                  Master Your Momentum
                </h1>
                <p className="leading-relaxed font-brand-montserrat font-regular">
                  Unlock the power of visual feedback with Consistency
                  Visualizer. As you see your efforts mapped out day by day,
                  harness the motivation to build, maintain, and elevate your
                  daily commitments.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={"/assets/images/g-2.jpg"}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2> */}
                <h1 className="title-font text-lg font-medium text-brand-black mb-3 font-brand-montserrat">
                  Consistency, Color-Coded
                </h1>
                <p className="leading-relaxed font-brand-montserrat font-regular">
                  Dive deep into a colorful representation of your daily drive.
                  With each hue, recognize your dedication, and be inspired to
                  add more to your canvas.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={"/assets/images/g-3.jpg"}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2> */}
                <h1 className="title-font text-lg font-medium text-brand-black mb-3 font-brand-montserrat">
                  Visualize to Actualize
                </h1>
                <p className="leading-relaxed font-brand-montserrat font-regular">
                  Every goal starts with consistent effort. Watch your
                  persistence unfold in a dynamic heatmap, propelling you to
                  commit, continue, and conquer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageGallery;
