"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore"; // !
import { db } from "../../../firebase";

// components
import UserHeatmap from "@/components/heatmaps/UserHeatmap";
import LoadingSpinner from "./LoadingSpinner";
import EmptyGraphs from "./EmptyGraphs";

export default function GraphsList() {
  const { data: session } = useSession();

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
