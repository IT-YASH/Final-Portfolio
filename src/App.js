import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import About from "./components/About"

function App() {
  return (
    <>
      <Navbar />
      <About/>
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
