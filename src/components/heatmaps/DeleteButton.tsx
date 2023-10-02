import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

// components
import DeleteModal from "./DeleteModal";

type Props = {
  callback: () => void;
};

export default function DeleteButton({ callback }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <TrashIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 " />
      </div>

      {showModal && (
        <DeleteModal setModalOpen={setShowModal} callback={callback} />
      )}
    </div>
  );
}
