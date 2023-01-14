import React, { useEffect, useRef, useState } from "react";

const useModals = () => {
  const [featureModalOpen, setFeatureModalOpen] = useState(false);
  const [gitModalOpen, setGitModalOpen] = useState(false);

  const featureModalRef = useRef(null);
  const gitModalRef = useRef(null);

  const handleClickOutsideModal = (event) => {
    if (gitModalRef.current && !gitModalRef.current.contains(event.target)) {
      setGitModalOpen(false);
    }
    if (featureModalRef.current && !featureModalRef.current.contains(event.target)) {
      setFeatureModalOpen(false);
    }
  };



  useEffect(() => {
    document.addEventListener("click", handleClickOutsideModal, true);

    return () => {
      document.addEventListener("click", handleClickOutsideModal, true);
    };
  }, [featureModalRef, gitModalRef]);

  
  

  const modalData = {
    featureModalOpen,
    setFeatureModalOpen,
    gitModalOpen,
    setGitModalOpen,
    featureModalRef,
    gitModalRef,
  };

  return {
    modalData,
  };
};

export default useModals;
