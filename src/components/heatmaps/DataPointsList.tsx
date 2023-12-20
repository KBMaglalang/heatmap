'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';

// components
import LoadingSpinner from './LoadingSpinner';
import DataPointListItem from './DataPointListItem';

// context or store

// constants and functions
import { db } from '../../../firebase';

type Props = {
  id: string;
};

export default function DataPointsList({ id }: Props) {
  const { data: session } = useSession();

  // get the subcollection fields from firebase
  const [dates, datesLoading, datesmapError] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email!, 'heatmaps', id, 'dates'),
        orderBy('weekOfYear', 'asc')
      )
  );
  /* The line `const dateData = dates?.docs?.map((date) => date.data());` is creating a new variable
  `dateData` and assigning it the value of the mapped array of `dates?.docs`. */
  const dateData = dates?.docs?.map((date) => date.data());

  /* The code block `if (datesLoading || !session) {...}` is checking if the `datesLoading` variable is
  true or if the `session` variable is falsey. If either of these conditions is true, it means that
  the data is still loading or the user session is not available. In this case, the component
  returns a loading spinner to indicate that the data is being fetched. */
  if (datesLoading || !session) {
    return (
      <div className="h-full w-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="body-font container mx-auto rounded-2xl px-5 pb-24 pt-24 text-gray-800">
      {/* title  */}
      <div className="mb-20 flex w-full flex-wrap">
        <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
          <h1 className="title-font mb-2 font-brand-montserrat text-2xl font-medium text-brand-black sm:text-3xl">
            Data Points
          </h1>

          <div className="h-1 w-20 rounded bg-brand-accent"></div>
        </div>
      </div>

      {/* list out the data points */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Week</th>
              <th>Date</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {dateData &&
              dateData?.map((date: any) => <DataPointListItem key={date.createdAt} date={date} />)}

            {!dateData?.length && (
              <tr className="">
                {/* week of the year */}
                <th>{''}</th>

                {/* created at timestamp */}
                <th> {''}</th>

                {/* title */}
                <th className="overflow-hidden">{'No Data'}</th>

                {/* description */}
                <th>{''}</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
