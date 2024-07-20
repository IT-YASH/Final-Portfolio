import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/yp.png";
import "../Css/Navbar.css";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaAward,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav>
        <div className="left">
          <img src={Logo} className="yplogo" alt="logo" />
        </div>
        <div className={`right ${sidebarOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeSidebar}
              >
                <FaHome className="nav-icon" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeSidebar}
              >
                <FaUserAlt className="nav-icon" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeSidebar}
              >
                <FaProjectDiagram className="nav-icon" />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeSidebar}
              >
                <FaBriefcase className="nav-icon" />
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeSidebar}
              >
                <FaEnvelope className="nav-icon" />
                Connect with Me
              </NavLink>
            </li>
            <li className="dropdown">
              <NavLink
                to="/Home"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeSidebar}
              >
                <FaAward className="nav-icon" />
                Others
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/achievements" onClick={closeSidebar}>Achievements →</NavLink>
                </li>
                <li>
                  <NavLink to="/memories" onClick={closeSidebar}>Memories →</NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <button className="toggle-btn" onClick={toggleTheme}>
            <div className="toggle-thumb"></div>
            <span className="sun-icon">☀️</span>
            <span className="moon-icon">🌙</span>
          </button>
        </div>
        <button className="menu-btn" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
