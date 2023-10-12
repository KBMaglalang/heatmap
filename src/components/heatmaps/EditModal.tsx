import React, { useState } from "react";
import { DocumentData } from "firebase/firestore";

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  heatmapDoc: DocumentData | undefined;
  callback: (data: { title: string; description: string }) => void;
};

export default function EditModal({
  heatmapDoc,
  setModalOpen,
  callback,
}: Props) {
  const [title, setTitle] = useState(heatmapDoc?.title);
  const [description, setDescription] = useState(heatmapDoc?.description);

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
        className="fixed inset-0 w-full h-full bg-brand-black opacity-40"
        onClick={(e) => setModalOpen(false)}
      ></div>

      {/* modal box */}
      <div className="flex items-center px-4 py-8 min-h-screen">
        <div className="relative w-full max-w-lg p-4 mx-auto rounded-md shadow-2xl bg-white shadow-gray-700">
          {/* settings input or logout */}
          <div className="mt-3">
            <div className="flex flex-col mt-2 text-center text-brand-black">
              <h4 className="mb-2 text-xl font-medium text-brand-black font-brand-roboto">
                Edit
              </h4>

              {/* edit title */}
              <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl font-brand-montserrat font-medium">
                  Title:
                </span>
                <input
                  type="text"
                  className="p-2 my-2  rounded-lg resize-none  focus:outline-none w-2/3 font-brand-montserrat font-medium"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* edit description */}
              <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl  font-brand-montserrat font-medium">
                  Description:
                </span>
                <input
                  type="text"
                  className=" p-2 my-2  rounded-lg resize-none  focus:outline-none w-2/3 font-brand-montserrat font-medium"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              {/* edit start date */}
              {/* <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl font-bold">Start Date:</span>
                <input
                  type="text"
                  className=" p-2 my-2  rounded-lg resize-none  focus:outline-none w-2/3"
                  placeholder="Start Date"
                />
              </div> */}
              {/* edit end date */}
              {/* <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl font-bold">End Date:</span>
                <input
                  type="text"
                  className=" p-2 my-2  rounded-lg resize-none  focus:outline-none w-2/3"
                  placeholder="End Date"
                />
              </div> */}
            </div>
          </div>

          {/* user selection */}
          <div className="gap-2 items-center mt-3 sm:flex">
            <button
              className="w-full mt-2 p-2.5 flex-1 text-white bg-brand-interface rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2 hover:bg-indigo-600 font-brand-montserrat font-medium"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              className="w-full mt-2 p-2.5 flex-1  rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2 hover:bg-gray-200 font-brand-montserrat font-medium"
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
