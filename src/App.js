import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import StarryBackground from "./components/StarryBackground";
import Achievements from "./components/Achievements";
import Memories from "./components/Memories";

function App() {
  return (
    <Router>
      <Navbar />
      <StarryBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
