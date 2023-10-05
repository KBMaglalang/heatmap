"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore"; // ! setups a real time connection to the firebase database

// components
import UserHeatmap from "@/components/features/UserHeatmap";
import NewButton from "@/components/heatmaps/NewButton";

// ! test data
import { tempData, tempFields } from "@/constants/heatmapTestData";

export default function UserPage() {
  const { data: session } = useSession();

  // TODO: change out this method to something else
  useEffect(() => {
    if (session) {
      // search if the session email exists in the firestore database
      // if it doesn't exist
      //    add in user email, name, creation date

      const fetchAndSetUserData = async () => {
        // Define a reference to the user document in Firestore
        const userRef = doc(db, "users", session?.user?.email!);

        // Fetch the user document
        const userDoc = await getDoc(userRef);

        // If the user doesn't exist, set their data
        if (!userDoc.exists()) {
          const userData = {
            name: session?.user?.name,
            email: session?.user?.email,
            createdAt: Timestamp.now(),
          };
          await setDoc(userRef, userData);
        }
      };

      fetchAndSetUserData();
    }
  }, [session]);

  const [heatmaps, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "heatmaps"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <main className="">
      {/* title */}
      <div className="container px-5 pt-24 mx-auto text-brand-black body-font">
        <div className="flex flex-wrap w-full mb-10 flex-col items-end text-center">
          {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Pitchfork Kickstarter Taxidermy
          </h1> */}
          {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p> */}
          <NewButton />
        </div>
      </div>

      {/* heat map lists */}
      <div>
        {!heatmaps?.empty &&
          heatmaps?.docs?.map((heatmap) => (
            <UserHeatmap key={heatmap.id} id={heatmap.id} />
          ))}
      </div>
    </main>
  );
}
