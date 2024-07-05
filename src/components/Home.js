import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
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
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const textElements = document.querySelectorAll(".animated-text");

    textElements.forEach(element => {
      const words = element.textContent.split(" ");
      let currentWordIndex = 0;

      function showNextWord() {
        if (currentWordIndex >= words.length) {
          currentWordIndex = 0;
        }

        setAnimatedText(words[currentWordIndex]);
        currentWordIndex++;

        setTimeout(showNextWord, 1000); // Adjust speed here (1000 = 1 second)
      }

      showNextWord();
    });
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
            Hi there! I'm Yash Patel, a third-year IT student with a passion
            for{" "}
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
            <a href="https://drive.google.com/file/d/15iSkhA1iLcObvNfeFXXCoE_cetLnU2vX/view">
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
        <span className="introcolor">Professional </span>Skillset
      </h1>

      <section className="thirdsection">
        <div className="container">
          <div className="card">
            <div className="card-content">
              <img src={htmlLogo} alt="HTML" />
              <p className="animated-text">{animatedText}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={cssLogo} alt="CSS" />
              <p className="animated-text">{animatedText}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={jsLogo} alt="JavaScript" />
              <p className="animated-text">{animatedText}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={reactLogo} alt="React" />
              <p className="animated-text">{animatedText}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={mongologo} alt="MongoDB" />
              <p className="animated-text">{animatedText}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={nodelogo} alt="Node.js" />
              <p className="animated-text">{animatedText}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={pythonlogo} alt="Python" />
              <p className="animated-text">{animatedText}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src={gitlogo} alt="Git" />
              <p className="animated-text">{animatedText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
