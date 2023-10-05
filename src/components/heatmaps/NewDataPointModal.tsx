import React, { useState } from "react";
import { DocumentData } from "firebase/firestore";

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  heatmapDoc: DocumentData | undefined;
  callback: (data: { title: string; description: string }) => void;
};

export default function NewDataPointModal({
  heatmapDoc,
  setModalOpen,
  callback,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAccept = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    callback({
      title,
      description,
    });

    setModalOpen(false);
  };

  return (
    <div className="overflow-y-auto fixed inset-0 z-50">
      {/* handles clicks outside the modal box */}
      <div
        className="fixed inset-0 w-full h-full  opacity-40"
        onClick={(e) => setModalOpen(false)}
      ></div>

      {/* modal box */}
      <div className="flex items-center px-4 py-8 min-h-screen z-100">
        <div className="relative w-full max-w-lg p-4 mx-auto rounded-md shadow-2xl  shadow-gray-700">
          {/* settings input or logout */}
          <div className="mt-3">
            <div className="flex flex-col mt-2 text-brand-black">
              <h4 className="mb-2 text-xl font-bold text-center text-brand-black">
                New Data Point
              </h4>

              {/* edit title */}
              <div className="flex flex-col justify-between mt-2 w-full text-brand-black">
                <span className="mr-4 text-xl font-bold">Title:</span>
                <input
                  type="text"
                  className="p-2 my-2  rounded-lg resize-none  focus:outline-none border-2 text-brand-black"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* edit description */}
              <div className="flex flex-col mt-2 w-full">
                <span className="mr-4 text-xl font-bold text-brand-black">
                  Description:
                </span>
                {/* <input
                  type="text"
                  className=" p-2 my-2  rounded-lg resize-none  focus:outline-none w-2/3"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                /> */}
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={8}
                  className="p-2 my-2  rounded-lg resize-none  focus:outline-none  border-2 text-brand-black"
                  placeholder="Type your prompt here"
                />
              </div>
            </div>
          </div>

          {/* user selection */}
          <div className="gap-2 items-center mt-3 sm:flex">
            <button
              className="w-full mt-2 p-2.5 flex-1 text-white bg-brand-interface rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2 hover:bg-indigo-600"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              className="w-full mt-2 p-2.5 flex-1  rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2 hover:bg-gray-200"
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
