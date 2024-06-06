import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../App.css";
import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/js.png";
import reactLogo from "../images/react.png";
import nodelogo from "../images/nodejs.png";
import pythonlogo from "../images/python.png";
import gitlogo from "../images/git.png";
import mongologo from "../images/mongo.png";
import images from "../images/img.png";

function Home() {
  useEffect(() => {
    const thirdSection = document.querySelector(".thirdsection");
    for (let i = 0; i < 20; i++) {
      const meteor = document.createElement("div");
      meteor.classList.add("meteor");
      meteor.style.top = `${Math.random() * 100}vh`;
      meteor.style.left = `${Math.random() * 100}vw`;
      meteor.style.animationDelay = `${Math.random() * 5}s`;
      meteor.style.animationDuration = `${Math.random() * 3 + 2}s`;
      thirdSection.appendChild(meteor);
    }
  }, []);

  return (
    <>
      <section className="firstsection">
        <div className="leftsection">
          <h2 className="lefthello">Hello,</h2>
          <h2 className="leftyash">
            i'm <span className="Yashcolor">Yash</span> Patel
          </h2>
          <h1 className="webcolor">Web Developer</h1>
        </div>
        <div className="rightsection">
          <img src={images} alt="firstsection images" />
        </div>
      </section>

      <h1 className="centered-text">
        LET ME <span className="introcolor">INTRODUCE MYSELF</span>
      </h1>

      <section className="secondsection">
        <div className="secondleftsection">
          <p>
            Hi there! I'm Yash Patel, a third-year IT student with a passion for{" "}
            <span className="paragraph">
              full-stack development, UI/UX design, and data analysis.
            </span>{" "}
            I love creating seamless experiences from front-end to back-end,
            focusing on both functionality and aesthetics. With a knack for
            design and a keen eye for data insights, I enjoy crafting
            user-centric solutions that drive engagement and deliver measurable
            results. Always eager to learn and adapt, I'm excited about the
            endless possibilities in the dynamic field of IT.
          </p>
          <button className="visitsitelink">
            <a href="https://docs.google.com/document/d/1bp8xO_UW_uYxvII9cOrsWzAhP5RV8ulh/edit?usp=sharing&ouid=115409128175103779594&rtpof=true&sd=true">
              <b>Download & View CV <FaExternalLinkAlt/></b>
            </a>
          </button>
        </div>
        <div className="secondrightsection">
          <img src={images} alt="secondsection images" />
        </div>
      </section>

      <h1 className="centered-text">
        <span className="introcolor">Professional </span>Skillset
      </h1>

      <section className="thirdsection">
        <div className="container">
          <div className="card">
            <div className="card-content">
              <img src={htmlLogo} alt="HTML" />
              <p>HTML</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={cssLogo} alt="CSS" />
              <p>CSS</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={jsLogo} alt="JavaScript" />
              <p>JavaScript</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={reactLogo} alt="React" />
              <p>React</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={mongologo} alt="MongoDB" />
              <p>MongoDB</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={nodelogo} alt="Node.js" />
              <p>Node.js</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={pythonlogo} alt="Python" />
              <p>Python</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={gitlogo} alt="Git" />
              <p>Git</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
