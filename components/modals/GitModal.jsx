import React from "react";

const GitModal = ({ modalRef, setGitModalOpen }) => {
  return (
    <>
      <div className="fixed w-[100%] h-[100vh] top-0 left-0 bg-basic z-[10] bg-opacity-[0.3]">
        <div className="w-full h-full relative">
          <div
            ref={modalRef}
            className="w-4/12 h-[180px] bg-white absolute top-0 bottom-0 left-0 right-0 m-auto modal-motion"
          >
            <h2 className="mt-5 text-center text-basic text-3xl">
              What would you like to visit?
            </h2>
            <div className="mt-5 w-8/12 h-[50px] m-auto flex items-center justify-between">
              <button className=" bg-basic text-white w-[100px] h-[40px] rounded-lg shadow-2xl hover:border hover:border-basic hover:bg-white hover:text-basic">
                Client Side
              </button>
              <button className=" bg-basic text-white w-[100px] h-[40px] rounded-lg shadow-2xl hover:border hover:border-basic hover:bg-white hover:text-basic">
                Server Side
              </button>
            </div>

            <span
              onClick={() => setGitModalOpen(false)}
              className="bg-basic rounded-full text-white absolute right-[-5px] top-[-5px] py-2 px-3 cursor-pointer shadow-xl"
            >
              X
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GitModal;
