import React from "react";
import "../Css/Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "CodeClause Pvt Ltd",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "Worked on various web development projects including building responsive landing pages and developing a To-Do List web app. Learned and implemented responsive web design principles and media queries.",
      src:"https://internship.codeclause.com/assets/img/logo.png"
    },
    {
      company: "CodeClause Pvt Ltd",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "Worked on various web development projects including building responsive landing pages and developing a To-Do List web app. Learned and implemented responsive web design principles and media queries.",
      src:"https://internship.codeclause.com/assets/img/logo.png"
    },
    {
      company: "CodeClause Pvt Ltd",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "Worked on various web development projects including building responsive landing pages and developing a To-Do List web app. Learned and implemented responsive web design principles and media queries.",
      src:"https://internship.codeclause.com/assets/img/logo.png"
    },
    {
      company: "CodeClause Pvt Ltd",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "Worked on various web development projects including building responsive landing pages and developing a To-Do List web app. Learned and implemented responsive web design principles and media queries.",
      src:"https://internship.codeclause.com/assets/img/logo.png"
    },
  ];

  return (
    <section className="experience-section">
      <h2 className="experience_section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <img src={exp.src} alt={`${exp.company} logo`} className="experience-icon" />
            <h3 className="experience-company">{exp.company}</h3>
            <h4 className="experience-position">{exp.position}</h4>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-buttons">
              <button className="btn-offer-letter">Offer Letter</button>
              <button className="btn-completion-certificate">Completion Certificate</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
