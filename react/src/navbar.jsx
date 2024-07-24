import React, { useEffect, useRef, useState } from "react";

import { Route, Routes, Link } from "react-router-dom";
import PopUp from "./PopUp";
import "./popup.css";
import homeIcon from "./home_icon.svg";
import "./index.css";
function Navbar() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

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
          <li class="contact" onClick={openPopUp}>
            contact.
          </li>
          <PopUp isOpen={isPopUpOpen} onClose={closePopUp}>
            <h2 class="popupHeader">Let's Work Together</h2>
            <p>blah blah blah</p>
          </PopUp>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
