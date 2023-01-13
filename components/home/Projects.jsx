import React from "react";
import ProjectCard from "../cards/ProjectCard";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-4xl text-center text-basic my-20">Projects</h1>
      <div className="w-10/12 m-auto py-10 grid grid-cols-3 gap-x-5">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
