import React from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../Project.css';

const projects = [
  {
    id: 1,
    name: "We Care",
    image: require("../images/html.png"), // Adjust the path as needed
    info: "A project about care and support."
  },
  {
    id: 2,
    name: "Tech World",
    image: require("../images/html.png"), // Adjust the path as needed
    info: "Exploring the latest in tech."
  },
  {
    id: 3,
    name: "Green Earth",
    image: require("../images/html.png"), // Adjust the path as needed
    info: "Environmental awareness and actions."
  }
];

function Project() {
  return (
    <div className="Projectsection">
      {projects.map(project => (
        <div className="projectcard" key={project.id}>
          <div className="projectimage">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="projectinfo">
            <h3>{project.name}</h3>
            <p>{project.info}</p>
          </div>
          <button className="projectbutton">Visit<FaExternalLinkAlt/></button>
        </div>
      ))}
    </div>
  );
}

export default Project;
