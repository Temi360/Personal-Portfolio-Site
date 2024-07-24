import React, { useEffect, useRef } from "react";
import { Route, Routes, Link } from "react-router-dom";

import homeIcon from "./home_icon.svg";
import "./index.css";
function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li id="homeIconNavbarDiv">
            <Link to="/welcome">
              <img src={homeIcon} />
            </Link>
          </li>
          <li>designer, coder, storyteller...</li>
          <Link to="/work">
            <li>work.</li>
          </Link>
          <li>
            <Link to="/contact">contact.</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
