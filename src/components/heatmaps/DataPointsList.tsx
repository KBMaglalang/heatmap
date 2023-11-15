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

// components
import LoadingSpinner from "./LoadingSpinner";
import DataPointListItem from "./DataPointListItem";

// context or store

// constants and functions
import { db } from "../../../firebase";

type Props = {
  id: string;
};

export default function DataPointsList({ id }: Props) {
  const { data: session } = useSession();

  // get the subcollection fields from firebase
  const [dates, datesLoading, datesmapError] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "heatmaps", id, "dates"),
        orderBy("weekOfYear", "asc")
      )
  );
  const dateData = dates?.docs?.map((date) => date.data());

  if (datesLoading || !session) {
    return (
      <div className="h-full w-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="container px-5 pt-24 mx-auto rounded-2xl text-gray-800 body-font pb-24">
      {/* title  */}
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand-black font-brand-montserrat">
            Data Points
          </h1>

          <div className="h-1 w-20 bg-brand-accent rounded"></div>
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
              dateData?.map((date: any) => (
                <DataPointListItem key={date.createdAt} date={date} />
              ))}

            {!dateData?.length && (
              <tr className="">
                {/* week of the year */}
                <th>{""}</th>

                {/* created at timestamp */}
                <th> {""}</th>

                {/* title */}
                <th className="overflow-hidden">{"No Data"}</th>

                {/* description */}
                <th>{""}</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
