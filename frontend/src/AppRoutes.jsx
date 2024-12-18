import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Aboutus";
import Services from "./pages/Services";
import Getintouch from "./pages/Getintouch";
import Projects  from "./pages/Projects";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Route */}
        <Route path="/about" element={<About />} />

        {/* Contact Route */}
        <Route path="/services" element={<Services />} />

        {/* Get In Touch Route */}
        <Route path="/get-in-touch" element={<Getintouch />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;