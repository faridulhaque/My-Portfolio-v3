import React from "react";
import ProjectCard from "../cards/ProjectCard";
import useSwr from "swr";


const Projects = () => {


  
  const fetcher = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/faridulhaque/My-json-data/main/my_protfolio3.json"
    );
    const data = await res.json();
    return data;
  };

  const { data, error } = useSwr("projects", fetcher);

  if (error) {
    return (
      <h2 className="text-center text-4xl text-basic">An error has occurred</h2>
    );
  }

  if (!data) {
    return <h2 className="text-center text-4xl text-basic">Loading...</h2>;
  }

  return (
    <div id="projects">
      <h1 className="text-4xl text-center text-basic my-20">Projects</h1>
      <div className="w-10/12 m-auto py-10 grid grid-cols-2 gap-10">
        {data?.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
