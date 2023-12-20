import React from 'react';

// components
import GalleryItem from '../common/GalleryItem';

// constants
import { GALLERY_TITLE, GALLERY_DESC, GALLERY_LIST } from '@/constants/staticText';

function HomepageGallery() {
  return (
    <section className="body-font text-brand-black">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 font-brand-roboto text-2xl font-medium text-brand-black sm:text-3xl ">
            {GALLERY_TITLE}
          </h1>
          <p className="font-regular mx-auto font-brand-montserrat text-base leading-relaxed lg:w-2/3">
            {GALLERY_DESC}
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
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
