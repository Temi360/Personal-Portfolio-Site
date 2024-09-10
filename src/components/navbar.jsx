import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactPopUp from "./ContactPopUp";
import "./../styles/popup.css";

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
      <div className="navbar ">
        <ul>
          <li id="homeIconNavbarDiv">
            <Link to="/welcome">
              <img src={"./assets/homeIcon.svg"} />
            </Link>
          </li>
          <li className="">designer, coder, storyteller...</li>
          <p className="text-red-400 font-bold">I love coding</p>

          <Link to="/work">
            <li>work.</li>
          </Link>
          <li className="contact" onClick={openPopUp}>
            contact.
          </li>
          <ContactPopUp onClose={closePopUp} isVisible={isPopupVisible}>
            <div className="TitleAndIcon">
              <h2 className="popupHeader">Let's Work Together!</h2>
              <img className="headIcon" src={"./assets/headIcon.svg"} />
            </div>
            <div className="popupButton-container">
              <a href="mailto:temilolu360@gmail.com" className="link-button">
                <button className="popUpButton">
                  {" "}
                  <img
                    className="icon"
                    src={"./assets/mail.svg"}
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
                    src={"./assets/linkedin.svg"}
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
