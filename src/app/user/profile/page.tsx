import React from 'react';
import type { Metadata } from 'next';

// components
import UserProfileDeleteSection from '@/components/user/UserProfileDeleteSection';
import UserProfileAccountSettingsSection from '@/components/user/UserProfileAccountSettingsSection';
import UserProfileNotificationSection from '@/components/user/UserProfileNotificationSection';
// import UserProfileThemeSection from "@/components/user/UserProfileThemeSection";

// context or stores

// constants and functions
import { COMPANY_META_DESCRIPTION, COMPANY_NAME } from '@/constants/staticText';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Profile`,
  description: COMPANY_META_DESCRIPTION,
};

export default function UserProfile() {
  return (
    <main className="">
      <div className="body-font container mx-auto px-5 pt-24 text-brand-black ">
        <div className="mb-12">
          <div className="mb-10 flex w-full flex-col flex-wrap items-start text-center">
            <h1 className="title-font mb-2 font-brand-roboto text-2xl font-medium text-brand-black sm:text-4xl">
              User and Account Settings
            </h1>
          </div>

          {/* <div className="flex flex-col w-4/5 mx-auto mt-24"> */}
          {/* account settings */}
          <UserProfileAccountSettingsSection />

          {/* notifications */}
          <UserProfileNotificationSection />

          {/* light and dark theme */}
          {/* <UserProfileThemeSection /> */}

          {/* delete account */}
          <UserProfileDeleteSection />
          {/* </div> */}
        </div>
      </div>
    </main>
  );
}
