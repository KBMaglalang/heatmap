import React from "react";

import {
  GALLERY_TITLE,
  GALLERY_DESC,
  GALLERY_LIST,
} from "@/constants/staticText";

// components
import GalleryItem from "../common/GalleryItem";

function HomepageGallery() {
  return (
    <section className="text-brand-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-brand-black font-brand-roboto ">
            {GALLERY_TITLE}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-brand-montserrat font-regular">
            {GALLERY_DESC}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {GALLERY_LIST.map((item, index) => (
            <GalleryItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageGallery;
