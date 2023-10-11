"use client";

import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

// components
import NewModal from "./NewModal";

export default function NewButton() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  const handleUpdateSettings = async (data: any) => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "heatmaps"),
      { ...data, createdAt: Timestamp.now() }
    );
  };

  return (
    <div className="fixed bottom-16 right-16 text-white p-2 rounded">
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <PlusCircleIcon className="h-16 w-16 text-brand-interface hover:text-gray-700 " />
      </div>

      {showModal && (
        <NewModal setModalOpen={setShowModal} callback={handleUpdateSettings} />
      )}
    </div>
  );
}
