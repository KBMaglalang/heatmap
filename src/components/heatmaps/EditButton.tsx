import React, { useState } from "react";
import { WrenchIcon } from "@heroicons/react/24/outline";

// components
import EditModal from "./EditModal";

export default function EditButton() {
  const [showModal, setShowModal] = useState(false);

  const handleUpdateSettings = async () => {
    // TODO: update settings
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <WrenchIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 " />
      </div>

      {showModal && (
        <EditModal
          setModalOpen={setShowModal}
          callback={handleUpdateSettings}
        />
      )}
    </div>
  );
}
