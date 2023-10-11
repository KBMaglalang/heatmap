// "use client";

import React from "react";
import type { Metadata } from "next";

// import { useSession } from "next-auth/react";
// import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "../../../firebase";

import { COMPANY_META_DESCRIPTION, COMPANY_NAME } from "@/constants/staticText";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Graphs`,
  description: COMPANY_META_DESCRIPTION,
};

// components
import NewButton from "@/components/heatmaps/NewButton";
import GraphsList from "@/components/heatmaps/GraphsList";

export default function UserPage() {
  // const { data: session } = useSession();

  // TODO: change out this method to something else
  // useEffect(() => {
  //   if (session) {
  //     // search if the session email exists in the firestore database
  //     // if it doesn't exist
  //     //    add in user email, name, creation date

  //     const fetchAndSetUserData = async () => {
  //       // Define a reference to the user document in Firestore
  //       const userRef = doc(db, "users", session?.user?.email!);

  //       // Fetch the user document
  //       const userDoc = await getDoc(userRef);

  //       // If the user doesn't exist, set their data
  //       if (!userDoc.exists()) {
  //         const userData = {
  //           name: session?.user?.name,
  //           email: session?.user?.email,
  //           createdAt: Timestamp.now(),
  //         };
  //         await setDoc(userRef, userData);
  //       }
  //     };

  //     fetchAndSetUserData();
  //   }
  // }, [session]);

  return (
    <main className="">
      {/* title */}
      <div className="container px-5 pt-24 mx-auto text-brand-black body-font">
        <div className="flex flex-wrap w-full mb-10 flex-col items-end text-center">
          <NewButton />
        </div>
      </div>

      {/* heat map lists */}
      <GraphsList />
    </main>
  );
}
