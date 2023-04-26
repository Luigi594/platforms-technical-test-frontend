import { IPlatforms } from "@/shared/types";
import { Dispatch, SetStateAction } from "react";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: IPlatforms;
};

function Modal({ isOpen, setIsOpen, data }: ModalProps) {
  return (
    <>
      {isOpen && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[420px] my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {data?.platformName}
                  </h3>
                </div>

                <div className="relative p-6 flex-auto">
                  <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                    <li className="flex items-center">
                      <span className="font-semibold">Platform Content </span>:{" "}
                      {data?.contentEntryPoint}
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold">
                        Platform Presentation
                      </span>
                      : {data?.presentation}
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold">Platform State</span>:{" "}
                      {data?.platformState}
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-blue-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsOpen(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}

export default Modal;
