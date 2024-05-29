import "../App.css";
import working1 from "../images/working.png";
import Working2 from "../images/working1.png";

function About() {
  return (
    <>
      <div className="aboutpage">
        <div className="about-firstsection">
          <div className="about-leftsection">
            <h3 className="know-who">
              Know Who<span className="i-m"> I'M</span>
            </h3>
            <div className="aboutme">
              Hi Everyone, I am <span className="yashpatel">Yash Patel, </span>
              a driven individual with a clear vision for
              my future. Currently pursuing my Bachelor of Engineering in
              Information Technology (BE IT), I am deeply passionate about
              full-stack development and data analysis. With a keen interest in
              both front-end and back-end technologies, I am dedicated to
              mastering the art of creating seamless and efficient digital
              experiences. My ambition extends beyond technical proficiency; I
              aspire to leverage data analytics to derive meaningful insights
              and drive informed decision-making. Through a combination of
              cutting-edge technologies and analytical rigor, I aim to make a
              tangible impact in various domains, ranging from business
              intelligence to predictive modeling. While I am rooted in
              Vadodara, Gujarat, my aspirations transcend geographical
              boundaries. I harbor a strong desire to pursue opportunities in
              leading tech companies, particularly in the esteemed FAANG group,
              with a focus on establishing myself in South India. I believe that
              the dynamic and innovative environment of these organizations will
              provide the perfect platform for my growth and development. Driven
              by a relentless pursuit of excellence, I am committed to honing my
              skills and expanding my knowledge to achieve my goals. Join me on
              this exhilarating journey as I strive to turn my dreams of a
              thriving career in technology into a reality.
            </div>
          </div>
          <div className="about-rightsection">
            <img src={working1} alt="working" />
          </div>
        </div>
        <h3 className="education">
          Educ<span className="action">ation</span>
        </h3>
        <div className="about-secondsection">
          <div className="about-secleftsection">
            <h3 className="sigmauniversity">Sigma Institute & Enginnering</h3>
            <div className="sigmainfo">
              After completing my diploma, I continued my education at Sigma
              Institute & Polytechnic, currently pursuing a Bachelor of
              Engineering in Information Technology. I am in my 7th semester
              with a current CGPA of 7.91, and I am on track to graduate in
              2025. My coursework and projects have further deepened my
              knowledge and skills in the IT field.
            </div>
            <h3 className="Diplomasigma">Sigma Institute & Polytechnic</h3>
            <div className="sigmainfo">
              After completing my 10th standard, I pursued a Diploma in
              Information Technology at Sigma Institute & Polytechnic in
              Vadodara, graduating in 2022 with a commendable CGPA of 9.09. The
              comprehensive curriculum and hands-on training provided me with a
              solid foundation in IT principles and practical skills.
            </div>
            <h3 className="school">New Era High school</h3>
            <div className="schoolinfo">
              I attended New Era High School from Kindergarten through 10th
              Standard, located in Makarpura, Vadodara. During my time there, I
              built a strong academic foundation and developed a passion for
              science and mathematics. The school offered a nurturing
              environment that encouraged my growth both inside and outside the
              classroom.
            </div>
          </div>
          <div className="about-secrightsection">
            <img src={Working2} alt="working2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
