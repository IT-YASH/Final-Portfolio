import React from 'react';
import { FaGithub, FaLinkedin, FaStar, FaRocket, FaPlus } from 'react-icons/fa';
import '../Css/Achievements.css';
import Challenge from "../images/challenge.png"
import Winner from "../images/winner.jpg"

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <h2 className="achievement-section-title">Achievements</h2>
      <div className="achievement-content">
        <div className="achievement-item">
          <div className="achievement-photo">
            <img src={Challenge} alt="Achievement" />
          </div>
          <div className="achievement-details">
            <h3 className="achievement-title">#30Days30WebFeaturesChallenge</h3>
            <p className="achievement-description">
              Successfully completed the #30Days30WebFeatures Challenge, where I built 30 different web features in 30 days. Each day focused on a unique feature, enhancing my skills in HTML, CSS, JavaScript.
            </p>
            <ul className="achievement-list">
              <li>Day 1: Responsive Navigation Menu</li>
              <li>Day 2: Image Slider</li>
              <li>Day 3: Tooltip</li>
              <li>Day 30: Real-time Chat Webapplication</li>
            </ul>
            <div className="social-buttons">
              <a
                href="https://www.linkedin.com/in/yash-patel-0b609422b/"
                className="socialmedia-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
              <a
                href="https://github.com/IT-YASH/30dayscodingchallenge"
                className="socialmedia-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-icon" /> GitHub
              </a>
            </div>
          </div>
          <div className="background-icon star-icon"><FaStar /></div>
          <div className="background-icon plus-icon"><FaPlus /></div>
        </div>
      </div>
      <div className="achievement-content">
        <div className="achievement-item">
          <div className="achievement-photo">
            <img src={Winner} alt="Achievement" />
          </div>
          <div className="achievement-details">
            <h3 className="achievement-title">#FloodAIHackathon</h3>
            <p className="achievement-description">
            I’m excited to announce that Team Kappa has won 1st place at the AIFlood Hackathon with our innovative AI-driven solution for urban flood prediction and management. Out of 160 applications from across India, 60 were selected, and 11 teams participated, including top scholars from prestigious institutions like IITs and NITs. Our winning application combines real-time monitoring, flood risk prediction, impact analysis, and tailored mitigation strategies to address the growing threat of urban flooding. Although designed for Mumbai, it’s scalable to any city, offering a forward-thinking approach to a pressing issue.
            </p>
            <div className="social-buttons">
              <a
                href="https://www.linkedin.com/posts/yashp2003_urbanflooding-ai-innovation-activity-7234458756669988864-2YNZ?utm_source=share&utm_medium=member_desktop"
                className="socialmedia-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="background-icon star-icon"><FaStar /></div>
          <div className="background-icon rocket-icon"><FaRocket /></div>
          <div className="background-icon plus-icon"><FaPlus /></div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
