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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// components
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import NewDataPointButton from "./NewDataPointButton";
import Graph from "./Graph";
import LoadingSpinner from "./LoadingSpinner";

// context or store

// constants and functions
import { DAYS } from "@/constants/heatmapText";
import { getWeekNumber } from "@/lib/heatmap/getWeekNumber";
import { db } from "../../../firebase";

type Props = {
  id: string;
};

export default function UserHeatmap({ id }: Props) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  // get document fields from firebase
  const [heatmapDoc, heatmapLoading, heatmapError] = useDocument(
    session && doc(db, "users", session?.user?.email!, "heatmaps", id)
  );

  // get the subcollection fields from firebase
  const [dates, datesLoading, datesmapError] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "heatmaps", id, "dates"),
        orderBy("weekOfYear", "asc")
      )
  );

  // check if the user is on the graphs page
  const isGraphsPage = pathname === "/user";

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

    if (!isGraphsPage) {
      router.replace("/user");
    }
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

  if (heatmapLoading || datesLoading || !session) {
    return (
      <div className="h-full w-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="text-gray-800 body-font">
      <div className="container px-5 pt-24 mx-auto rounded-2xl">
        <div className="flex">
          {/* title and description */}
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              {isGraphsPage ? (
                <Link href={`/user/graph/${id}`}>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black font-brand-montserrat">
                    {heatmapDoc?.data()?.title || "Title"}
                  </h1>
                </Link>
              ) : (
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black font-brand-montserrat">
                  {heatmapDoc?.data()?.title || "Title"}
                </h1>
              )}
              <div className="h-1 w-20 bg-brand-accent rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-brand-montserrat font-regular">
              {heatmapDoc?.data()?.description}
            </p>
          </div>

          {/* user selection */}
          <div className="flex space-x-4 justify-between relative">
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
      </div>
    </section>
  );
}
