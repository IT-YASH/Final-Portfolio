import React from "react";
import "../App.css";

function Navbar() {
  return (
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
  );
}

export default Navbar;
