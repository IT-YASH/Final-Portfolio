import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../Css/Project.css";

const projects = [
  {
    id: 1,
    name: "We Care",
    image: require("../images/Wecare.jpeg"),
    info: "Developed a hospital management website facilitating bed booking, medicine ordering, and bed availability checks across multiple hospitals. Utilized ASP.NET Web Forms with .aspx pages and master pages for consistent design. Implemented frontend styling with Bootstrap, and managed backend functionality using C#.",
    link: "http://GIt",
    github: "",
  },
  {
    id: 2,
    name: "Blog Website",
    image: require("../images/blog.png"),
    info: "Developed a dynamic blog website enabling users to add, remove, and update blog posts using Node.js, Express, MongoDB, and EJS (Embedded JavaScript) for templating. Implemented search functionality for users to find specific blogs, displaying dates and months for each post. Created an admin panel with the same stack for comprehensive content management. Integrated a secure login system requiring users to authenticate with credentials stored in the database.",
    link: "https://it-yash.github.io/Login-Blog/",
    github: "https://github.com/IT-YASH/Login-Blog",
  },
  {
    id: 3,
    name: "Universal Translator",
    image: require("../images/RTT.png"),
    info: "Developed the Universal Translator application using Android Studio and Java, with Google ML Kit integrated for real-time translation of ongoing conversations. This innovative application provides instant translations, enhancing communication across different languages without the need for manual intervention. The automated speak-and-response mechanism ensures seamless interaction, setting it apart from other translation tools by delivering immediate and efficient language support.",
    link: "https://insta",
    github: "",
  },
  {
    id: 4,
    name: "Universal Translator",
    image: require("../images/chat.png"),
    info: "I’m thrilled to share my latest project a dynamic and interactive chat application that allows real-time messaging between users using WebSockets. For this project, I utilized HTML, CSS, JavaScript, Node.js, Express, and Socket.io. This application showcases my ability to create seamless, real-time communication features, demonstrating my proficiency in both front-end and back-end development.",
    link: "https://insta",
    github: "",
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
          <div className="buttonssection">
            <button className="visitsitelink">
              <a href={project.link}>
                Visit <FaExternalLinkAlt />
              </a>
            </button>
            <button className="visitsitelink">
              <a href={project.github}>
                GitHub <FaExternalLinkAlt />
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
