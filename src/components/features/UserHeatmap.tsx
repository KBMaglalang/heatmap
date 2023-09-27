"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

// components
import EditButton from "../heatmaps/EditButton";
import DeleteButton from "../heatmaps/DeleteButton";
import Graph from "../heatmaps/Graph";

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
    collection(db, "users", session?.user?.email!, "heatmaps", id, "dates")
  );

  // edit the information of a specific heatmap
  const updateHeatmapInfo = (data: { title: string; description: string }) => {
    updateDoc(doc(db, "users", session?.user?.email!, "heatmaps", id), {
      title: data.title || "Title",
      description: data.description || "",
    });
  };

  // delete heatmap
  const deleteHeatmap = () => {
    deleteDoc(doc(db, "users", session?.user?.email!, "heatmaps", id));
  };

  return (
    <section className="text-gray-800 body-font ">
      <div className="container px-5 py-24 mx-auto rounded-2xl">
        <div className="flex">
          {/* title and description */}
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                {heatmapDoc?.data()?.title || "Title"}
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              {heatmapDoc?.data()?.description}
            </p>
          </div>

          {/* user selection */}
          <div className="flex space-x-4 justify-between">
            {/* pin */}
            {/* <ArrowUpOnSquareIcon className="h-4 w-4" /> */}

            {/* edit */}
            <EditButton
              heatmapDoc={heatmapDoc?.data()}
              callback={updateHeatmapInfo}
            />
            {/* <WrenchIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 cursor-pointer" /> */}

            {/* delete */}
            <DeleteButton callback={deleteHeatmap} />
            {/* <TrashIcon className="h-4 w-4" /> */}
          </div>
        </div>

        {/* heat map */}
        {/* <Graph commitsData={data || []} /> */}

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
