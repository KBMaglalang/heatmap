'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// components
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import NewDataPointButton from './NewDataPointButton';
import Graph from './Graph';
import LoadingSpinner from './LoadingSpinner';

// context or store

// constants and functions
import { DAYS } from '@/constants/heatmapText';
import { getWeekNumber } from '@/lib/heatmap/getWeekNumber';
import { db } from '../../../firebase';

type Props = {
  id: string;
};

export default function UserHeatmap({ id }: Props) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  // get document fields from firebase
  const [heatmapDoc, heatmapLoading, heatmapError] = useDocument(
    session && doc(db, 'users', session?.user?.email!, 'heatmaps', id)
  );

  // get the subcollection fields from firebase
  const [dates, datesLoading, datesmapError] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email!, 'heatmaps', id, 'dates'),
        orderBy('weekOfYear', 'asc')
      )
  );

  // check if the user is on the graphs page
  const isGraphsPage = pathname === '/user';

  // edit the information of a specific heatmap
  const updateHeatmapInfo = async (data: { title: string; description: string }) => {
    await updateDoc(doc(db, 'users', session?.user?.email!, 'heatmaps', id), {
      title: data.title || 'Title',
      description: data.description || '',
    });
  };

  // delete heatmap
  const deleteHeatmap = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'heatmaps', id));

    if (!isGraphsPage) {
      router.replace('/user');
    }
  };

  // add data point
  const addDataPoint = async (data: { title: string; description: string }) => {
    const date = Timestamp.now().toDate();
    const dayOfWeek = DAYS[date.getDay()];
    const weekOfYear = getWeekNumber(date);

    await addDoc(collection(db, 'users', session?.user?.email!, 'heatmaps', id, 'dates'), {
      createdAt: Timestamp.now(),
      title: data.title,
      description: data.description,
      dayOfWeek: dayOfWeek,
      weekOfYear: weekOfYear,
    });
  };

  /* This code block is checking if the heatmap data is still loading (`heatmapLoading`), the dates data
  is still loading (`datesLoading`), or if the user session is not available (`!session`). If any of
  these conditions are true, it returns a loading spinner component to indicate that the data is still
  being fetched. */
  if (heatmapLoading || datesLoading || !session) {
    return (
      <div className="h-full w-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="body-font text-gray-800">
      <div className="container mx-auto rounded-2xl px-5 pt-24">
        <div className="flex">
          {/* title and description */}
          <div className="mb-20 flex w-full flex-wrap">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
              {isGraphsPage ? (
                <Link href={`/user/graph/${id}`}>
                  <h1 className="title-font mb-2 font-brand-montserrat text-2xl font-medium text-brand-black hover:cursor-pointer sm:text-3xl">
                    {heatmapDoc?.data()?.title || 'Title'}
                  </h1>
                </Link>
              ) : (
                <h1 className="title-font mb-2 font-brand-montserrat text-2xl font-medium text-brand-black sm:text-3xl ">
                  {heatmapDoc?.data()?.title || 'Title'}
                </h1>
              )}
              <div className="h-1 w-20 rounded bg-brand-accent"></div>
            </div>
            <p className="font-regular w-full font-brand-montserrat leading-relaxed text-gray-500 lg:w-1/2">
              {heatmapDoc?.data()?.description}
            </p>
          </div>

          {/* user selection */}
          <div className="relative flex justify-between space-x-4">
            <NewDataPointButton heatmapDoc={heatmapDoc?.data()} callback={addDataPoint} />

            <EditButton heatmapDoc={heatmapDoc?.data()} callback={updateHeatmapInfo} />

            <DeleteButton callback={deleteHeatmap} />
          </div>
        </div>

        {/* heat map */}
        {!datesLoading && <Graph commitsData={dates || []} />}
      </div>
    </section>
  );
}
