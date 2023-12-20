import React, { useState } from 'react';
import { WrenchIcon } from '@heroicons/react/24/outline';
import { DocumentData } from 'firebase/firestore';

// components
import EditModal from './EditModal';

type Props = {
  heatmapDoc: DocumentData | undefined;
  callback: (data: { title: string; description: string }) => void;
};

export default function EditButton({ heatmapDoc, callback }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <WrenchIcon className="h-6 w-6 text-gray-500 hover:text-gray-700 " />
      </div>

      {showModal && (
        <EditModal heatmapDoc={heatmapDoc} setModalOpen={setShowModal} callback={callback} />
      )}
    </div>
  );
}
