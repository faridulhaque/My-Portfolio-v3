import React, { useState } from "react";

const useModals = () => {
  const [featureModalOpen, setFeatureModalOpen] = useState(false);
  const [gitModalOpen, setGitModalOpen] = useState(false);

  const modalData = {
    featureModalOpen,
    setFeatureModalOpen,
    gitModalOpen,
    setGitModalOpen,
  };

  return {
    modalData,
  };
};

export default useModals;
