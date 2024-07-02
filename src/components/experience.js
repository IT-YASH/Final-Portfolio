import React from "react";
import "../Css/Experience.css";

// Sample project images (replace with actual image URLs or import images)
import projectImage1 from "../images/html.png";
import projectImage2 from "../images/html.png";

const Experience = () => {
    const experiences = [
        {
            title: "Internship at Company XYZ",
            role: "Software Developer Intern",
            duration: "June 2022 - August 2022",
            certificateLink: "#",
            completionCertificateLink: "#",
            offerLetterLink: "#",
            projectImage: projectImage1 // Replace with actual project image
        },
        {
            title: "Internship at Company ABC",
            role: "Frontend Developer Intern",
            duration: "September 2022 - December 2022",
            certificateLink: "#",
            completionCertificateLink: "#",
            offerLetterLink: "#",
            projectImage: projectImage2 // Replace with actual project image
        }
    ];

    return (
        <div className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-container">
                {experiences.map((experience, index) => (
                    <div className="experience-item" key={index}>
                        <div className="experience-details">
                            <h3 className="experience-title">{experience.title}</h3>
                            <p className="experience-role">Role: {experience.role}</p>
                            <p className="experience-duration">Duration: {experience.duration}</p>
                            <div className="buttons">
                                <a href={experience.certificateLink} className="certificate-button">View Certificate</a>
                                <a href={experience.completionCertificateLink} className="certificate-button">View Completion Certificate</a>
                                <a href={experience.offerLetterLink} className="certificate-button">View Offer Letter</a>
                            </div>
                        </div>
                        <div className="experience-image">
                            <img src={experience.projectImage} alt={experience.title} className="project-image" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
