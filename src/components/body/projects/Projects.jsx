import React from "react";
import Separator from "../../common/Separator";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { projectData } from "./projectsData";

const Projects = () => {
  const data = projectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
