import React from "react";
import useSwr from "swr";

const useProjectsInfo = () => {
  const fetcher = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/faridulhaque/faridulhaque/main/portfolioV3.json"
    );
    const data = await res.json();
    return data;
  };

  const { data, error } = useSwr("projects", fetcher);

  const projectsInfo = {
    data,
    error,
  };

  return {
    projectsInfo,
  };
};

export default useProjectsInfo;
