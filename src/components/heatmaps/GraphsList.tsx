"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore"; // !
import { db } from "../../../firebase";

// components
import UserHeatmap from "@/components/heatmaps/UserHeatmap";
import LoadingSpinner from "./LoadingSpinner";
import EmptyGraphs from "./EmptyGraphs";

export default function GraphsList() {
  const { data: session } = useSession();

  /**
  Fetches a collection of heatmaps associated with the user from the Firestore database.
  @type {Array} heatmaps - An array containing the fetched heatmaps.
  @type {boolean} loading - A boolean indicating whether the heatmaps are currently being loaded.
  @type {any} error - An error object that captures any errors that occur during the fetch operation. */
  const [heatmaps, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "heatmaps"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="h-full">
      {/* loading spinner */}
      {loading && <LoadingSpinner />}

      {/* empty heatmaps */}
      {heatmaps?.empty && <EmptyGraphs />}

      {!heatmaps?.empty &&
        heatmaps?.docs?.map((heatmap) => (
          <UserHeatmap key={heatmap.id} id={heatmap.id} />
        ))}
    </div>
  );
}
