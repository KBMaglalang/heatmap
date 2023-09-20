import React from "react";

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  callback: () => void;
};

export default function EditModal({ setModalOpen, callback }: Props) {
  const handleAccept = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    // callback();

    setModalOpen(false);
  };

  return (
    <div className="overflow-y-auto fixed inset-0 z-10">
      {/* handles clicks outside the modal box */}
      <div
        className="fixed inset-0 w-full h-full  opacity-40"
        onClick={(e) => setModalOpen(false)}
      ></div>

      {/* modal box */}
      <div className="flex items-center px-4 py-8 min-h-screen">
        <div className="relative w-full max-w-lg p-4 mx-auto rounded-md shadow-2xl  shadow-gray-700">
          {/* settings input or logout */}
          <div className="mt-3">
            <div className="flex flex-col mt-2 text-center">
              <h4 className="mb-2 text-xl font-bold">Edit</h4>

              {/* edit title */}
              <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl font-bold">Title:</span>
                <input
                  type="text"
                  className="p-2 my-2  rounded-lg resize-none  focus:outline-none w-2/3"
                  placeholder="Title"
                />
              </div>
              {/* edit description */}
              <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl font-bold">Description:</span>
                <input
                  type="text"
                  className=" p-2 my-2  rounded-lg resize-none  focus:outline-none w-2/3"
                  placeholder="Description"
                />
              </div>
              {/* edit start date */}
              <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl font-bold">Start Date:</span>
                <input
                  type="text"
                  className=" p-2 my-2  rounded-lg resize-none  focus:outline-none w-2/3"
                  placeholder="Start Date"
                />
              </div>
              {/* edit end date */}
              <div className="flex flex-row justify-between items-center mt-2 w-full">
                <span className="mr-4 text-xl font-bold">End Date:</span>
                <input
                  type="text"
                  className=" p-2 my-2  rounded-lg resize-none  focus:outline-none w-2/3"
                  placeholder="End Date"
                />
              </div>
            </div>
          </div>

          {/* user selection */}
          <div className="gap-2 items-center mt-3 sm:flex">
            <button
              className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2 hover:bg-gray-700"
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