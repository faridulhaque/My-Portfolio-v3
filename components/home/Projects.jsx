import React, { useContext } from "react";
import ProjectCard from "../cards/ProjectCard";
import { GlobalContext } from "../../pages/_app";

const Projects = () => {
  const { projectsInfo } = useContext(GlobalContext);

  const { data, error } = projectsInfo;

  if (error) {
    return (
      <h2 className="text-center text-4xl text-basic">An error has occurred</h2>
    );
  }

  if (!data) {
    return <h2 className="text-center text-4xl text-basic">Loading...</h2>;
  }

  return (
    <div id="projects" className="mobile:my-10 tablet-my-10">
      <h1 className="text-4xl text-center text-basic desktop:my-20 laptop:my-15 tablet:my-5 mobile:my-3 xs:my-3">
        Projects
      </h1>
      <div className="desktop:w-10/12 laptop:w-10/12 tablet:w-11/12 mobile:w-11/12 xs:w-11/12 m-auto py-10 grid desktop:grid-cols-2 laptop:grid-cols-2 mobile:grid-cols-1 tablet:grid-cols-1 gap-10">
        {data?.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
