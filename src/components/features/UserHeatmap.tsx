"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../firebase";

import { DAYS } from "@/constants/heatmapText";
import { getWeekNumber } from "@/lib/heatmap/getWeekNumber";

// components
import EditButton from "../heatmaps/EditButton";
import DeleteButton from "../heatmaps/DeleteButton";
import NewDataPointButton from "../heatmaps/NewDataPointButton";
import Graph from "../heatmaps/Graph";
// import { database } from "firebase-admin";

type Props = {
  id: string;
};

export default function UserHeatmap({ id }: Props) {
  const { data: session } = useSession();

  // get document fields from firebase
  const [heatmapDoc, heatmapLoading, heatmapError] = useDocument(
    doc(db, "users", session?.user?.email!, "heatmaps", id)
  );

  // get the subcollection fields from firebase
  const [dates, datesLoading, datesmapError] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "heatmaps", id, "dates"),
      orderBy("weekOfYear", "asc")
    )
  );

  // edit the information of a specific heatmap
  const updateHeatmapInfo = async (data: {
    title: string;
    description: string;
  }) => {
    await updateDoc(doc(db, "users", session?.user?.email!, "heatmaps", id), {
      title: data.title || "Title",
      description: data.description || "",
    });
  };

  // delete heatmap
  const deleteHeatmap = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "heatmaps", id));
  };

  // add data point
  const addDataPoint = async (data: { title: string; description: string }) => {
    const date = Timestamp.now().toDate();
    const dayOfWeek = DAYS[date.getDay()];
    const weekOfYear = getWeekNumber(date);

    await addDoc(
      collection(db, "users", session?.user?.email!, "heatmaps", id, "dates"),
      {
        createdAt: Timestamp.now(),
        title: data.title,
        description: data.description,
        dayOfWeek: dayOfWeek,
        weekOfYear: weekOfYear,
      }
    );
  };

  return (
    <section className="text-gray-800 body-font ">
      <div className="container px-5 py-24 mx-auto rounded-2xl">
        <div className="flex">
          {/* title and description */}
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black">
                {heatmapDoc?.data()?.title || "Title"}
              </h1>
              <div className="h-1 w-20 bg-brand-accent rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              {heatmapDoc?.data()?.description}
            </p>
          </div>

          {/* user selection */}
          <div className="flex space-x-4 justify-between relative z-1000">
            <NewDataPointButton
              heatmapDoc={heatmapDoc?.data()}
              callback={addDataPoint}
            />

            <EditButton
              heatmapDoc={heatmapDoc?.data()}
              callback={updateHeatmapInfo}
            />

            <DeleteButton callback={deleteHeatmap} />
          </div>
        </div>

        {/* heat map */}
        {!datesLoading && <Graph commitsData={dates || []} />}

        {/* stats */}
        <div>
          {/* daily average */}
          {/* how many days in a year how you done this */}
          {/* longest streak */}
          {/* current streak */}
        </div>
      </div>
    </section>
  );
}

// TODO: stats - daily average - create function to calculate that
// TODO: state - how many days in a year how you done this - create function to calculate that
// TODO: stats - longest streak - create function to calculate that
// TODO: stats - current streak - create function to calculate that
