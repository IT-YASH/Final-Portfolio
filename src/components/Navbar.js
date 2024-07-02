import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

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
    localStorage.setItem('theme', theme);
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
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                Connect with Me
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="toggle-btn" onClick={toggleTheme}>
          <div className="toggle-thumb"></div>
          <span className="sun-icon">☀️</span>
          <span className="moon-icon">🌙</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
