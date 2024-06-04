import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../Project.css";

const projects = [
  {
    id: 1,
    name: "We Care",
    image: require("../images/html.png"),
    info: "We care is hospital management website that created for booking bed, ordering Medicine. It also provide the bed available in hospital. It also provide information about different Hospital details. The site created using HTML, Bootstrap, java, ASP.net, C#. Handling The backend",
    link:"http://GIt"
  },
  {
    id: 2,
    name: "Blog Website",
    image: require("../images/html.png"),
    info: "Worked remotely as a Full Stack Development Intern at Bharat Intern for one enriching month. Successfully undertook and accomplished challenging tasks, including the creation of a dynamic blog website and implementation of a secure login form using Node.js and MongoDB. Demonstrated proficiency in full-stack development and acquired valuable hands-on experience in web application development. Grateful for the opportunity to contribute to meaningful projects.",
    link:"http://youtube"
  },
  {
    id: 3,
    name: "Real Time Voice Translation",
    image: require("../images/html.png"),
    info: "Environmental awareness and actions.",
    link:"https://insta"
  },
];

function Project() {
  return (
    <div className="Projectsection">
      {projects.map((project) => (
        <div className="projectcard" key={project.id}>
          <div className="projectimage">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="projectinfo">
            <h3>{project.name}</h3>
            <p>{project.info}</p>
          </div>
          <button className="projectbutton">
            <a href={project.link}>
              Visit <FaExternalLinkAlt />
            </a>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Project;
