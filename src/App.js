import React from "react";
// import htmlLogo from "../src/images/html-logo.png";
// import cssLogo from "../src/images/css-logo.png";
// import jsLogo from "../src/images/js-logo.png";
// import reactLogo from "../src/images/react-logo.png";
import images from "../src/images/img.png";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="left">Yash's Portfolio</div>
          <div className="right">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Experience</a>
              </li>
              <li>
                <a href="/">Connect with Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

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
          <button className="resume">
            <b>Download CV</b>
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
          <div className="box">
            <img src={images} alt="HTML Logo" className="html-logo" />
          </div>
          <div className="box">
            <img src={images} alt="CSS Logo" className="css-logo" />
          </div>
          <div className="box">
            <img src={images} alt="JavaScript Logo" className="js-logo" />
          </div>
          <div className="box">
            <img src={images} alt="React Logo" className="react-logo" />
          </div>
        </div>
        <div className="container">
          <div className="box">
            <img src={images} alt="HTML Logo" className="html-logo" />
          </div>
          <div className="box">
            <img src={images} alt="CSS Logo" className="css-logo" />
          </div>
          <div className="box">
            <img src={images} alt="JavaScript Logo" className="js-logo" />
          </div>
          <div className="box">
            <img src={images} alt="React Logo" className="react-logo" />
          </div>
        </div>
      </section>

      <hr />

      <footer>
        <h3 className="footercentered-text">
          FeelFree To <span className="introcolor">Contact Me</span>
        </h3>
        <div class="social-icons">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
