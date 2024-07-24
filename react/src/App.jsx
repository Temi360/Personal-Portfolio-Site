import React from "react";
import Navbar from "./navbar";
import "./tailwind.css"; // Import Tailwind CSS
import "./App.css";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import ComputerPage from "./ComputerPage";
import DeskPage from "./DeskPage";
import WelcomePage from "./WelcomePage";
import PortfolioPage from "./PortfolioPage";
import UIUXPage from "./UIUXPage";
import ProjectPage from "./ProjectPage";
import ResumeModal from "./ResumeModal";
function App() {
  const location = useLocation();
  return (
    <div className="pageWrapper">
      <Navbar />
      <AnimatePresence mode={"wait"} initial={"false"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/work" element={<ComputerPage />} />
          <Route path="/desk" element={<DeskPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resume" element={<ResumeModal />} />
          <Route path="/UIUX" element={<UIUXPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
