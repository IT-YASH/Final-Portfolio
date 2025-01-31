import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaStar, FaRocket, FaPlus } from "react-icons/fa";
import "../Css/Home.css";
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

    const words = document.querySelectorAll(".word");
    words.forEach((word, index) => {
      word.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  const splitText = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word">
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <>
      <section className="firstsection">
        <div className="home-background-icon home-star-icon">
          <FaStar />
        </div>
        <div className="leftsection">
          <h2 className="lefthello">
            {splitText("Hello,")}
            <span className="wave">👋</span>
          </h2>
          <h2 className="leftyash">
            {splitText("i'm")}
            <span className="Yashcolor">{splitText("Yash")}</span>
            {splitText("Patel")}
          </h2>
          <h1 className="webcolor">{splitText("Full Stack Developer")}</h1>
        </div>
        <div className="rightsection">
          <img src={images} alt="firstsection images" />
        </div>
      </section>

      <h1 className="centered-text">
        <div className="home-background-icon home-plus-icon">
          <FaPlus />
        </div>
        {splitText("LET ME")}{" "}
        <span className="introcolor">{splitText("INTRODUCE MYSELF")} </span>
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
          <button className="home_visitsitelink">
            <a href="https://drive.google.com/file/d/12mN-MybH-E-WHbOziM7X7eCmmSuFInai/view?usp=drive_link">
              <b>
                Download & View CV <FaExternalLinkAlt />
              </b>
            </a>
          </button>
        </div>
        <div className="secondrightsection">
          <img src={images} alt="secondsection images" />
        </div>
      </section>

      <h1 className="centered-text">
        <div className="home-background-icon home-rocket-icon">
          <FaRocket />
        </div>
        <span className="introcolor">{splitText("Professional")} </span>
        {splitText("Skillset")}
      </h1>

      <section className="thirdsection">
        <div className="container">
          {[
            { logo: htmlLogo, name: "HTML" },
            { logo: cssLogo, name: "CSS" },
            { logo: jsLogo, name: "JavaScript" },
            { logo: reactLogo, name: "React" },
            { logo: nodelogo, name: "NodeJS" },
            { logo: pythonlogo, name: "Python" },
            { logo: gitlogo, name: "Git" },
            { logo: mongologo, name: "MongoDB" },
          ].map((tech, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <img src={tech.logo} alt={tech.name} />
                <p>{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
