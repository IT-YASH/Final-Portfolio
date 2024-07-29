import React from "react";
import "../Css/Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "CodeClause Pvt Ltd",
      position: "Web Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "I had the opportunity to intern with CodeClause Pvt Ltd as a Web Development Intern from July 01, 2024 to August 01, 2024. This educational internship focused on expanding my knowledge of software development, particularly in web technologies. Throughout the program, I engaged in hands-on projects, learning more about the intricacies of web development and enhancing my skills in building robust web applications. This experience provided me with valuable insights and practical knowledge in the field of software development.",
      src: "https://internship.codeclause.com/assets/img/logo.png",
      offer: "https://drive.google.com/file/d/1m1TLa6ysodLpsm2Hp38kOrbT4JmiyMRM/view?usp=drive_link",
      completion: "https://drive.google.com/file/d/1m1TLa6ysodLpsm2Hp38kOrbT4JmiyMRM/view?usp=drive_link"
    },
    {
      company: "Bharat intern",
      position: "Full stack Development Intern",
      duration: "1 July 2024 - 1 August 2024",
      description: "I successfully completed the Virtual Internship Program at Bharat Intern in Full Stack Web Development, actively participating from February 10, 2024, to March 10, 2024. During this period, I gained comprehensive skills in both front-end and back-end development, working on projects that required integrating various web technologies. This internship provided a holistic view of full stack development and strengthened my capabilities as a versatile web developer.",
      src: "https://bharatintern.live/static/logo-d7abe237292b840869fa4f33f0e74976.png",
      completion: "https://drive.google.com/file/d/1frDYaW6J2SJftRzVkhBOhU8tU6k3Ht44/view?usp=drive_link",
      offer: "https://drive.google.com/file/d/1nW-oHlV_n06c0z1-XWOLrvC588A8wyUX/view?usp=drive_link"
    },
    {
      company: "Brainy Beam",
      position: "Web Development Intern",
      duration: "28 June 2024 - 15 July 2024",
      description: "In a 15-day intensive web development internship, I learned the fundamentals of React.js and JavaScript. This short yet impactful experience allowed me to grasp key concepts and practices in modern web development, enhancing my ability to build dynamic and responsive web applications. The hands-on learning approach provided a solid foundation in React.js, preparing me for more advanced projects.",
      src: "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/4ce45d4a34d3191a388c4bcd7c8ae154-1503412454150/9061a136-cee7-48fb-b0e5-9ccb5140d703.png",
      completion: "https://drive.google.com/file/d/1I2DBXrTPTM3KBTukP-nK0blZAw57jMJA/view?usp=drive_link",
      offer: "https://drive.google.com/file/d/1WRx_0Y281ggkSnoWqGsxkyqhH5hZgYku/view?usp=drive_link"
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
