"use client";

import React from "react";
import Select from "react-select";

// TODO: change this out
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
          // defaultValue={model}
          placeholder={"Timezone"}
          options={tempTimeZone}
          // isLoading={isLoading}
          menuPosition="fixed"
          className="mt-2 w-1/3 font-brand-montserrat font-regular"
          // styles={{
          //   control: (baseStyles) => ({
          //     ...baseStyles,
          //     backgroundColor: "#212121",
          //     borderColor: "#212121",
          //   }),
          //   option: (baseStyles) => ({
          //     ...baseStyles,
          //     backgroundColor: "#212121",
          //     color: "#fff",
          //   }),
          //   input: (baseStyles) => ({
          //     ...baseStyles,
          //     color: "#fff",
          //   }),
          //   placeholder: (baseStyles) => ({
          //     ...baseStyles,
          //     color: "#fff",
          //   }),
          //   singleValue: (baseStyles) => ({
          //     ...baseStyles,
          //     color: "#fff",
          //   }),
          // }}
          onChange={handleTimezoneSelect}
        />
      </div>
    </div>
  );
}
