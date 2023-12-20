'use client';

import React, { ReactNode } from 'react';
import { Timestamp } from 'firebase/firestore';

type Props = {
  date: any;
};

export default function DataPointListItem({ date }: Props) {
  return (
    <tr className="">
      {/* week of the year */}
      <th>{date?.weekOfYear || '#'}</th>

      {/* created at timestamp */}
      <th>{date.createdAt.toDate().toLocaleString() || ''}</th>

      {/* title */}
      <th className="">{date.title}</th>

      {/* description */}
      <th>{date.description || ''}</th>
    </tr>
  );
}
