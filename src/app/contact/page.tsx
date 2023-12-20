import React from 'react';
import type { Metadata } from 'next';

// components
import HomepageContactForm from '@/components/features/HomepageContactForm';

// context or stores

// constants and functions
import {
  COMPANY_META_DESCRIPTION,
  COMPANY_NAME,
  CONTACT_TITLE,
  CONTACT_DESCRIPTION,
} from '@/constants/staticText';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Contact`,
  description: COMPANY_META_DESCRIPTION,
};

export default function Contact() {
  return (
    <>
      <section className="body-font text-brand-black">
        <div className="container mx-auto px-5 py-24">
          <div data-test="contact-header" className="flex flex-col">
            <div className="mb-12 flex flex-col flex-wrap py-6 sm:flex-row">
              <h1 className="title-font mb-2 font-brand-roboto text-2xl font-medium text-brand-black sm:mb-0 sm:w-full">
                {CONTACT_TITLE}
              </h1>
            </div>
          </div>

          <div className="font-regular -mx-4 -mb-10 -mt-4 flex flex-wrap p-4 font-brand-montserrat sm:-m-4">
            <p className="mt-2 text-base leading-relaxed">{CONTACT_DESCRIPTION}</p>
          </div>
        </div>
      </section>

      <HomepageContactForm />
    </>
  );
}
