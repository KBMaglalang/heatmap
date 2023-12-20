import React, { useState } from 'react';
import { DocumentData } from 'firebase/firestore';

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  heatmapDoc: DocumentData | undefined;
  callback: (data: { title: string; description: string }) => void;
};

export default function NewDataPointModal({ heatmapDoc, setModalOpen, callback }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  /**
   * The handleAccept function is a callback that is triggered when a button is clicked, and it passes
   * the title and description as arguments to a callback function before closing a modal.
   * @param e - The parameter `e` is an event object of type `React.MouseEvent<HTMLButtonElement,
   * MouseEvent>`. It represents the mouse event that triggered the function.
   */
  const handleAccept = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    callback({
      title,
      description,
    });

    setModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* handles clicks outside the modal box */}
      <div
        className="fixed inset-0 h-full w-full bg-brand-black opacity-40"
        onClick={(e) => setModalOpen(false)}
      ></div>

      {/* modal box */}
      <div className="z-100 flex min-h-screen items-center px-4 py-8">
        <div className="relative mx-auto w-full max-w-lg rounded-md bg-white p-4 shadow-2xl shadow-gray-700">
          {/* settings input or logout */}
          <div className="mt-3">
            <div className="mt-2 flex flex-col text-brand-black">
              <h4 className="mb-2 text-center font-brand-roboto text-xl font-medium text-brand-black">
                New Data Point
              </h4>

              {/* edit title */}
              <div className="mt-2 flex w-full flex-col justify-between text-brand-black">
                <span className="mr-4 font-brand-montserrat text-xl font-medium">Title:</span>
                <input
                  type="text"
                  className="my-2 resize-none  rounded-lg border-2  p-2 font-brand-montserrat text-brand-black focus:outline-none"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* edit description */}
              <div className="mt-2 flex w-full flex-col">
                <span className="mr-4 font-brand-montserrat text-xl font-medium text-brand-black">
                  Description:
                </span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={8}
                  className="my-2 resize-none  rounded-lg border-2  p-2  font-brand-montserrat text-brand-black focus:outline-none"
                  placeholder="Description"
                />
              </div>
            </div>
          </div>

          {/* user selection */}
          <div className="mt-3 items-center gap-2 sm:flex">
            <button
              className="mt-2 w-full flex-1 rounded-md bg-brand-interface p-2.5 font-brand-montserrat font-medium text-white outline-none ring-indigo-600 ring-offset-2 hover:bg-indigo-600 focus:ring-2"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              className="mt-2 w-full flex-1 rounded-md  border p-2.5 font-brand-montserrat font-medium outline-none ring-indigo-600 ring-offset-2 hover:bg-gray-200 focus:ring-2"
              onClick={(e) => setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
