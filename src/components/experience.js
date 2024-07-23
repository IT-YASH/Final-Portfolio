import React from "react";
import "../Css/Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "CodeClause Pvt Ltd",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "Worked on various web development projects including building responsive landing pages and developing a To-Do List web app. Learned and implemented responsive web design principles and media queries.",
      src: "https://internship.codeclause.com/assets/img/logo.png",
      completion: "",
      offer: "https://drive.google.com/file/d/1m1TLa6ysodLpsm2Hp38kOrbT4JmiyMRM/view?usp=drive_link"
    },
    {
      company: "Bharat intern",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "Worked on various web development projects including building responsive landing pages and developing a To-Do List web app. Learned and implemented responsive web design principles and media queries.",
      src: "https://bharatintern.live/static/logo-d7abe237292b840869fa4f33f0e74976.png",
      completion: "https://drive.google.com/file/d/1frDYaW6J2SJftRzVkhBOhU8tU6k3Ht44/view?usp=drive_link",
      offer: "https://drive.google.com/file/d/1nW-oHlV_n06c0z1-XWOLrvC588A8wyUX/view?usp=drive_link"
    },
    {
      company: "Brainy Beam",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "Worked on various web development projects including building responsive landing pages and developing a To-Do List web app. Learned and implemented responsive web design principles and media queries.",
      src: "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/4ce45d4a34d3191a388c4bcd7c8ae154-1503412454150/9061a136-cee7-48fb-b0e5-9ccb5140d703.png",
      completion: "https://drive.google.com/file/d/1I2DBXrTPTM3KBTukP-nK0blZAw57jMJA/view?usp=drive_link",
      offer: "https://drive.google.com/file/d/1WRx_0Y281ggkSnoWqGsxkyqhH5hZgYku/view?usp=drive_link"
    },
    {
      company: "Smart Node",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "Worked on various web development projects including building responsive landing pages and developing a To-Do List web app. Learned and implemented responsive web design principles and media queries.",
      src: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/cogcopvrruin5a7gb2lo",
      completion: "",
      offer: "https://drive.google.com/file/d/1A7U1XKDRZu9g9zHj-AyOsalcAUs1lBPD/view?usp=drive_link"
    },
    {
      company: "IBM Skill Build",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "Worked on various web development projects including building responsive landing pages and developing a To-Do List web app. Learned and implemented responsive web design principles and media queries.",
      src: "https://www.icscybersecurityconference.com/wp-content/uploads/2018/09/ibm-logo-png-transparent-background.png",
      completion: "",
      offer: "https://drive.google.com/file/d/14TTSHNO-sKFzjWDdj0GWCv_nI-f1uFwb/view?usp=drive_link"
    }
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
              {exp.offer && (
                <a href={exp.offer} target="_blank" rel="noopener noreferrer">
                  <button className="btn-offer-letter">Offer Letter</button>
                </a>
              )}
              {exp.completion && (
                <a href={exp.completion} target="_blank" rel="noopener noreferrer">
                  <button className="btn-completion-certificate">Completion Certificate</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
