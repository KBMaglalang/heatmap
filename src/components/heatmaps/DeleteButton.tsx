import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

// components
import DeleteModal from "./DeleteModal";

export default function DeleteButton() {
  const [showModal, setShowModal] = useState(false);

  const handleUpdateSettings = async () => {
    // TODO: update settings
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <TrashIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 " />
      </div>

      {showModal && (
        <DeleteModal
          setModalOpen={setShowModal}
          callback={handleUpdateSettings}
        />
      )}
    </div>
  );
}
