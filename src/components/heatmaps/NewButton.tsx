"use client";

import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { Timestamp, collection, addDoc } from "firebase/firestore";

// components
import NewModal from "./NewModal";

// constants and functions
import { db } from "../../../firebase";

export default function NewButton() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  /**
   * The function `handleUpdateSettings` adds a new document to a Firestore collection with the provided
   * data and a timestamp.
   * @param {any} data - The `data` parameter is an object that contains the settings data to be
   * updated.
   */
  const handleUpdateSettings = async (data: any) => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "heatmaps"),
      { ...data, createdAt: Timestamp.now() }
    );
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <PlusCircleIcon className="h-16 w-16 text-brand-interface hover:text-indigo-600 " />
      </div>

      {showModal && (
        <NewModal setModalOpen={setShowModal} callback={handleUpdateSettings} />
      )}
    </div>
  );
}
