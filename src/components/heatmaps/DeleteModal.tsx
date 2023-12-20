import React from 'react';

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  callback: () => void;
};

export default function DeleteModal({ setModalOpen, callback }: Props) {
  const handleAccept = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    callback();

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
            <div className="mt-2 flex flex-col text-center">
              <h4 className="mb-2 font-brand-roboto text-xl font-medium text-brand-black ">
                Delete
              </h4>
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
