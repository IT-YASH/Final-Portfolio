import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import "../App.css";
import "../Css/Navbar.css"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

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

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav>
        <div className="left">Yash's Portfolio</div>
        <div className="right">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" activeClassName="active">
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Connect with Me
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navigation">
          <button className="navigatebutton" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
