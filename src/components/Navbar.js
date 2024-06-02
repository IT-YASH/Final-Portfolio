import React, { useState, useEffect } from "react";
import "../App.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
        <div className="navigation">
          <div className="navigatebutton">
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
