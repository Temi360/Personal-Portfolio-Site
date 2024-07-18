import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import './tailwind.css'; // Import Tailwind CSS
import ComputerPage from "./ComputerPage";
import ContactPage from "./ContactPage";
import DeskPage from "./DeskPage";
import WelcomePage from "./WelcomePage";
import PortfolioPage from "./PortfolioPage";
import UIUXPage from "./UIUXPage";
import ProjectPage from "./ProjectPage";
import "./welcome_page.css";
import homeIcon from "./home_icon.svg";

import "./App.css";

function App() {
  return (
    <div className="pageWrapper">
      <div className = "navbar">
        <ul>
          <li  id="homeIconNavbarDiv">
            <Link to="/welcome"><img src = {homeIcon}/></Link>
          </li>
          <li>designer, coder, storyteller...</li>
          <li>
            <Link to="/work">work</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/work" element={<ComputerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/desk" element={<DeskPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/UIUX" element={<UIUXPage />} />
        <Route path="/project" element={<ProjectPage />} />





      </Routes>
    </div>
  );
}

export default App;
