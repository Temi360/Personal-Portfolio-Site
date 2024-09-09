import React from "react";
import Navbar from "./components/navbar";
import "./tailwind.css";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import ComputerPage from "./pages/ComputerPage";
import DeskPage from "./pages/DeskPage";
import WelcomePage from "./pages/WelcomePage";
import UIUXPage from "./pages/UIUXPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ProjectListings from "./pages/ProjectListingsPage";
//import ResumeModal from "./components/";

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
          <Route path="/portfolio" element={<ProjectListings />} />
          <Route path="/resume" element={<>Hello world</>} />
          <Route path="/UIUX" element={<UIUXPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
