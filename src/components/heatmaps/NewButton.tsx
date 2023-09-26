"use client";

import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

// components
import NewModal from "./NewModal";

export default function NewButton() {
  const [showModal, setShowModal] = useState(false);

  const handleUpdateSettings = async () => {
    // TODO: update settings
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <PlusCircleIcon className="h-8 w-8 text-gray-500 hover:text-gray-700 " />
      </div>

      {showModal && (
        <NewModal setModalOpen={setShowModal} callback={handleUpdateSettings} />
      )}
    </div>
  );
}
