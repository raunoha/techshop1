import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const gitProfileUrl = 'https://github.com/';
  
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt=""  />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={gitProfileUrl } target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
        </a>
    </div>
  );
}
export default ProjectDisplay