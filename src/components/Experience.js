import React from "react";
import "../Css/Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Balkrushna Pvt Ltd",
      position: "Full Stack Development Intern",
      duration: "16 January 2025 - Present",
      description: "working as software Engineer intern",
      src: "https://balkrushna.com/img/logo.svg",
      offer: "",
      completion: ""
    },
    {
      company: "SERVILINK SYSTEMS LIMITED",
      position: "Full stack Development Intern",
      duration: "12th August 2024 - 12th March 2024",
      description: "I recently completed my internship at Servilink Systems Limited. where I worked as a Full Stack Developer Intern from August to November 2024.During this internship, I was introduced to ASP.NET Core MVC and gained a basic understanding of Full Stack Development. While I didn’t work deeply on specific projects, the experience helped me build a foundation in modern web development practices and collaborative teamwork.I’m thankful to the entire team at SERVILINK SYSTEMS LIMITED for their guidance and support, which made this learning experience valuable.",
      src: "https://www.servilinksystems.com/wp-content/uploadImage_2024-02-20_at_17.26.08-removebg-preview.png",
      completion: "https://drive.google.com/file/d/1XsHrPt1CwZNWGG0p-SEkDMafKezg6gqt/view?usp=drive_link",
      offer: "https://drive.google.com/file/d/1XsHrPt1CwZNWGG0p-SEkDMafKezg6gqt/view?usp=drive_link"
    },
    {
      company: "Smart Node",
      position: "Backend Development Intern",
      duration: "20 September 2023 - 20 November 2023",
      description: "During my 3-month internship in backend development, I honed my skills in Node.js, GitHub, and JavaScript. I gained hands-on experience in API development and testing, utilizing tools like Swagger and Postman to ensure robust and reliable backend solutions. This internship provided me with a comprehensive understanding of backend technologies and the practical experience needed to excel in backend development.",
      src: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/cogcopvrruin5a7gb2lo",
      completion: "https://drive.google.com/file/d/1A7U1XKDRZu9g9zHj-AyOsalcAUs1lBPD/view?usp=drive_link",
      offer: "https://drive.google.com/file/d/1A7U1XKDRZu9g9zHj-AyOsalcAUs1lBPD/view?usp=drive_link"
    },
    {
      company: "IBM Skill Build",
      position: "Data Analytics Intern",
      duration: "26 June 2024 - 5 August 2024",
      description: "During my 6-week internship at IBM, I gained hands-on experience in data analytics. I learned how to clean and visualize data using various Python libraries, including Pandas, NumPy, and MATLAB. Additionally, I worked on a project focused on AI prediction for the environment, which allowed me to apply my skills in transforming raw data into meaningful insights. This opportunity provided a strong foundation for my career in data analytics.",
      src: "https://www.icscybersecurityconference.com/wp-content/uploads/2018/09/ibm-logo-png-transparent-background.png",
      completion: "https://drive.google.com/file/d/14TTSHNO-sKFzjWDdj0GWCv_nI-f1uFwb/view?usp=drive_link",
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