import React from "react";
import type { Metadata } from "next";

import { COMPANY_META_DESCRIPTION, COMPANY_NAME } from "@/constants/staticText";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Profile`,
  description: COMPANY_META_DESCRIPTION,
};

// components
import UserProfileDeleteSection from "@/components/user/UserProfileDeleteSection";
import UserProfileAccountSettingsSection from "@/components/user/UserProfileAccountSettingsSection";
import UserProfileThemeSection from "@/components/user/UserProfileThemeSection";
import UserProfileNotificationSection from "@/components/user/UserProfileNotificationSection";
import UserProfileTimezoneSection from "@/components/user/UserProfileTimezoneSection";

export default function UserProfile() {
  return (
    <main className="">
      <div className="container px-5 pt-24 mx-auto text-brand-black body-font ">
        <div className="mb-12">
          <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-brand-black font-brand-roboto">
              User and Account Settings
            </h1>
          </div>

          <div className="flex flex-col w-4/5 mx-auto mt-24">
            {/* light and dark theme */}
            <UserProfileThemeSection />

            {/* timezone settings */}
            {/* <UserProfileTimezoneSection /> */}

            {/* notifications */}
            <UserProfileNotificationSection />

            {/* account settings */}
            <UserProfileAccountSettingsSection />

            {/* delete account */}
            <UserProfileDeleteSection />
          </div>
        </div>
      </div>
    </main>
  );
}
