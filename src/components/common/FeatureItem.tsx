import React from 'react';

type Props = {
  title: string;
  description: string;
};

export default function FeatureItem({ title, description }: Props) {
  return (
    <div className="flex p-4 md:w-1/3">
      <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-brand-interface">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-6 w-6"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div className="flex-grow pl-6">
        <h2 className="title-font mb-2 font-brand-montserrat text-lg font-medium text-brand-black ">
          {title}
        </h2>
        <p className="font-regular font-brand-montserrat text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
