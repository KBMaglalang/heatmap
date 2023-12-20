'use client';

import React from 'react';
import Select from 'react-select';

const tempTimeZone = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

export default function UserProfileTimezoneSection() {
  const handleTimezoneSelect = (e: any) => {};

  return (
    <div className="mb-12">
      <div className="mb-10 flex w-full flex-col flex-wrap items-start text-center">
        <h1 className="mb-2 font-brand-montserrat text-2xl  font-medium text-brand-black sm:text-3xl">
          Timezone
        </h1>
      </div>

      {/* timezone */}
      <div className="mt-2 flex w-full flex-row items-center justify-between">
        <span className="font-regular mr-4 font-brand-montserrat text-xl">Select Timezone</span>

        <Select
          isSearchable
          placeholder={'Timezone'}
          options={tempTimeZone}
          menuPosition="fixed"
          className="font-regular mt-2 w-1/3 font-brand-montserrat"
          onChange={handleTimezoneSelect}
        />
      </div>
    </div>
  );
}
