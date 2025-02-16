import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./pages/Projects";
import Resume from "./components/Resume";
import Contact from "./pages/Contact";
import resumeData from "./pages/resumeData"; // Ensure the correct path

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects resumeData={resumeData} />} />
        <Route path="/resume" element={<Resume resumeData={resumeData} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
