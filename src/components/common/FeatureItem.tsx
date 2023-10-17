import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function FeatureItem({ title, description }: Props) {
  return (
    <div className="p-4 md:w-1/3 flex">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-brand-interface mb-4 flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div className="flex-grow pl-6">
        <h2 className="text-brand-black text-lg title-font font-medium mb-2 font-brand-montserrat ">
          {title}
        </h2>
        <p className="leading-relaxed text-base font-brand-montserrat font-regular">
          {description}
        </p>
      </div>
    </div>
  );
}
