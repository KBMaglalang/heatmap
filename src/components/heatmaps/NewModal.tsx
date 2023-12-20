import React, { useState } from 'react';

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  callback: ({}) => void;
};

export default function NewModal({ setModalOpen, callback }: Props) {
  const [heatmapTitle, setHeatmapTitle] = useState('');
  const [heatmapDesc, setHeatmapDesc] = useState('');

  /**
   * The handleAccept function is triggered when a button is clicked and it calls a callback function
   * with the title and description values, then closes a modal.
   * @param e - React.MouseEvent<HTMLButtonElement, MouseEvent> - This is the event object that is passed
   * when the button is clicked. It contains information about the event, such as the target element and
   * the type of event.
   */
  const handleAccept = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    callback({
      title: heatmapTitle,
      description: heatmapDesc,
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
      <div className="flex min-h-screen items-center px-4 py-8">
        <div className="relative mx-auto w-full max-w-lg rounded-md bg-white p-4 shadow-2xl shadow-gray-700">
          {/* settings input or logout */}
          <div className="mt-3">
            <div className="mt-2 flex flex-col  text-brand-black">
              <h4 className="mb-2 text-center font-brand-roboto text-xl font-medium text-brand-black">
                Create New HeatMap
              </h4>

              {/* edit title */}
              <div className="mt-2 flex w-full flex-col text-brand-black">
                <span className="mr-4 font-brand-montserrat  text-xl font-medium">Title:</span>
                <input
                  type="text"
                  className="my-2 resize-none  rounded-lg border-2  p-2 font-brand-montserrat text-brand-black focus:outline-none"
                  placeholder="Title"
                  value={heatmapTitle}
                  onChange={(e) => setHeatmapTitle(e.target.value)}
                />
              </div>
              {/* edit description */}
              <div className="mt-2 flex w-full flex-col">
                <span className="mr-4 font-brand-montserrat  text-xl font-medium text-brand-black">
                  Description:
                </span>
                <textarea
                  value={heatmapDesc}
                  onChange={(e) => setHeatmapDesc(e.target.value)}
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
              className="mt-2 w-full flex-1 rounded-md border  p-2.5 font-brand-montserrat font-medium text-brand-black outline-none ring-indigo-600 ring-offset-2 hover:bg-gray-200 focus:ring-2"
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
