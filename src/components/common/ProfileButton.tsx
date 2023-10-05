import React from "react";
import Link from "next/link";

import { UserIcon } from "@heroicons/react/24/outline";

export default function ProfileButton() {
  return (
    <Link href={"/user/profile"}>
      <button className="inline-flex items-center bg-brand-interface border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 mr-5 text-white font-brand-montserrat font-regular">
        Profile
        <UserIcon className="w-4 h-4 ml-1" />
      </button>
    </Link>
  );
}
