import React from "react";
import "../App.css"

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footercentered-text">
        FeelFree To <span className="introcolor">Contact Me</span>
      </h3>
      <div class="social-icons">
        <a href="/">
          <i class="fa-brands fa-faceboo"></i>
        </a>
        <a href="/">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="/">
          <i class="fab fa-instagram"></i>
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
