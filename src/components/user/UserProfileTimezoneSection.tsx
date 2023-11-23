"use client";

import React from "react";
import Select from "react-select";

const tempTimeZone = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];

export default function UserProfileTimezoneSection() {
  const handleTimezoneSelect = (e: any) => {};

  return (
    <div className="mb-12">
      <div className="flex flex-wrap w-full mb-10 flex-col items-start text-center">
        <h1 className="sm:text-3xl text-2xl font-medium  mb-2 text-brand-black font-brand-montserrat">
          Timezone
        </h1>
      </div>

      {/* timezone */}
      <div className="flex flex-row justify-between items-center mt-2 w-full">
        <span className="mr-4 text-xl font-brand-montserrat font-regular">
          Select Timezone
        </span>

        <Select
          isSearchable
          placeholder={"Timezone"}
          options={tempTimeZone}
          menuPosition="fixed"
          className="mt-2 w-1/3 font-brand-montserrat font-regular"
          onChange={handleTimezoneSelect}
        />
      </div>
    </div>
  );
}
