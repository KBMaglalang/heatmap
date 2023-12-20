import React, { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import { DocumentData } from 'firebase/firestore';

// components
import NewDataPointModal from './NewDataPointModal';

type Props = {
  heatmapDoc: DocumentData | undefined;
  callback: (data: { title: string; description: string }) => void;
};

export default function NewDataPointButton({ heatmapDoc, callback }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <PlusCircleIcon className="h-6 w-6 text-gray-500 hover:text-gray-700 " />
      </div>

      {showModal && (
        <NewDataPointModal
          heatmapDoc={heatmapDoc}
          setModalOpen={setShowModal}
          callback={callback}
        />
      )}
    </div>
  );
}
