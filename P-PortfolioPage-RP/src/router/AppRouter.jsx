import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skill from "../pages/Skill";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
