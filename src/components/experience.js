import React from 'react';
import '../Css/Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Internship at Company XYZ",
            role: "Software Developer Intern",
            duration: "June 2022 - August 2022",
            certificateLink: "#",
            completionCertificateLink: "#",
            offerLetterLink: "#"
        },
        {
            title: "Internship at Company ABC",
            role: "Frontend Developer Intern",
            duration: "September 2022 - December 2022",
            certificateLink: "#",
            completionCertificateLink: "#",
            offerLetterLink: "#"
        }
    ];

    return (
        <div className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-container">
                {experiences.map((experience, index) => (
                    <div className="experience-card" key={index}>
                        <h3>{experience.title}</h3>
                        <p>Role: {experience.role}</p>
                        <p>Duration: {experience.duration}</p>
                        <a href={experience.certificateLink} className="certificate-button">View Certificate</a>
                        <a href={experience.completionCertificateLink} className="certificate-button">View Completion Certificate</a>
                        <a href={experience.offerLetterLink} className="certificate-button">View Offer Letter</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
