import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactPopUp from "./ContactPopUp";
import "./../styles/popup.css";
import { Drawer } from "vaul";

function Navbar() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopUp = () => {
    setPopupVisible(true);
  };
  const closePopUp = () => {
    setPopupVisible(false);
  };

  const MobileNav = () => {
    <div>My name is Temi.</div>;
  };

  return (
    <div>
      <div className="navbar">
        <div id="homeIconNavbarDiv" className="my-3">
          <Link to="/welcome">
            <img src={"./assets/homeIcon.svg"} className="w-20 h-20" />
          </Link>
        </div>

        <ul className="md:flex hidden">
          <li className="flex">designer, coder, storyteller...</li>

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

        <Drawer.Root>
          <Drawer.Trigger>
            <button className="md:hidden" aria-label="Toggle Menu">
              <img src={"./assets/menuIcon.svg"} className="w-20 h-20" />
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Content>
              <Drawer.Handle />
              <MobileNav />
            </Drawer.Content>
            <Drawer.Overlay />
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
}

export default Navbar;
