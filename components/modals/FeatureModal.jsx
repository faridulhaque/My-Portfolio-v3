import React from "react";

const FeatureModal = ({ modalRef, setFeatureModalOpen }) => {
  return (
    <>
      <div className="fixed w-[100%] h-[100vh] top-0 left-0 bg-basic z-[10] bg-opacity-[0.3]">
        <div className="w-full h-full relative">
          <div
            ref={modalRef}
            className="w-4/12 h-[180px] bg-white absolute top-0 bottom-0 left-0 right-0 m-auto modal-motion"
          >
            <span
              onClick={() => setFeatureModalOpen(false)}
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

export default FeatureModal;
