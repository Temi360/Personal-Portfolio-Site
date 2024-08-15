import React, { useEffect, useRef, useState } from "react";

import { Route, Routes, Link } from "react-router-dom";
import ContactPopUp from "./ContactPopUp";
import "./popup.css";
import homeIcon from "./home_icon.svg";
import linkedin from "./linkedin.svg";
import mail from "./mail.svg";
import headIcon from "./headIcon.svg";
import "./index.css";
function Navbar() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopUp = () => {
    setPopupVisible(true);
  };
  const closePopUp = () => {
    setPopupVisible(false);
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
          <li className="contact" onClick={openPopUp}>
            contact.
          </li>
          <ContactPopUp onClose={closePopUp} isVisible={isPopupVisible}>
            <div className="TitleAndIcon">
              <h2 className="popupHeader">Let's Work Together!</h2>
              <img className="headIcon" src={headIcon} />
            </div>
            <div className="popupButton-container">
              <a
                href="mailto:your-temilolu360@gmail.com"
                className="link-button"
              >
                <button className="popUpButton">
                  {" "}
                  <img
                    className="icon"
                    src={mail}
                    alt="icon that connects to email"
                  />
                  Email
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/temi-ijisesan-692829257/"
                className="link-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="popUpButton">
                  <img
                    className="icon"
                    src={linkedin}
                    alt="icon that connects to linkedin page"
                  />
                  Connect
                </button>
              </a>
            </div>
          </ContactPopUp>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
