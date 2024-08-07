import React from "react";
import "../App.css";
import "../Css/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footercentered-text">
        Feel Free To <span className="introcolor">Contact Me</span>
      </h3>
      <div className="social-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/_yash_2112_?igsh=bnJtNG9kdWhqMWk3&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/IT-YASH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yash-patel-0b609422b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="footerlast">
        <div className="designby">Designed by Yash Patel & Devansh Varia</div>
        <div className="Copyright">Copyright © 2003</div>
      </div>
    </footer>
  );
}

export default Footer;
