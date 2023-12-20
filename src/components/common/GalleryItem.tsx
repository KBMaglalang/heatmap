import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function GalleryItem({ title, description, image }: Props) {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3">
      <div className="relative flex">
        <Image
          src={image}
          alt="gallery"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="img-fluid absolute inset-0 h-full w-full rounded-lg object-cover object-center"
          width={500}
          height={500}
        />
        <div className="relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-100">
          <h1 className="title-font mb-3 font-brand-montserrat text-lg font-medium text-brand-black ">
            {title}
          </h1>
          <p className="font-regular font-brand-montserrat leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
