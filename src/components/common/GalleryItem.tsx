import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function GalleryItem({ title, description, image }: Props) {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <Image
          src={image}
          alt="gallery"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="absolute inset-0 w-full h-full object-cover object-center rounded-lg img-fluid"
          width={500}
          height={500}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h1 className="title-font text-lg font-medium text-brand-black mb-3 font-brand-montserrat ">
            {title}
          </h1>
          <p className="leading-relaxed font-brand-montserrat font-regular">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
