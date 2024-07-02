import React from "react";
import "../App.css";
import "../Css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footercentered-text">
        Feel Free To <span className="introcolor">Contact Me</span>
      </h3>
      <div className="social-icons">
        <a href="/">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footerlast">
        <div className="designby">Designed by Yash Patel</div>
        <div className="Copyright">Copyright@2003</div>
      </div>
    </footer>
  );
}

export default Footer;
