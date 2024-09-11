import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactPopUp from "./contactPopUp";
import "./../styles/popup.css";
import { Drawer } from "vaul";
import { Menu, X } from "lucide-react";

const MobileNav = () => {
  <div className="mobile-menu lg:hidden bg-sky-500 p-4 text-white">
    <ul className="space-y-4">
      <li className="flex">designer, coder, storyteller...</li>

      <Link to="/work">
        <li>work.</li>
      </Link>

      <li className="contact">contact.</li>
    </ul>
  </div>;
};
function Navbar() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopUp = () => {
    setPopupVisible(true);
  };
  const closePopUp = () => {
    setPopupVisible(false);
  };

  const Contact = () => {
    return (
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
    );
  };

  return (
    <div>
      <div className="navbar w-full flex items-center justify-between lg:justify-evenly p-3 lg:p-0">
        <div id="homeIconNavbarDiv" className="mt-1">
          <Link to="/welcome">
            <img
              src={"./assets/homeIcon.svg"}
              className="w-16 h-16 lg:w-20 lg:h-20"
            />
          </Link>
        </div>

        <ul className="lg:flex hidden">
          <li className="flex">designer, coder, storyteller...</li>

          <Link to="/work">
            <li>work.</li>
          </Link>
          <li className="contact" onClick={openPopUp}>
            contact.
          </li>
          <Contact />
        </ul>

        <Drawer.Root direction="top">
          <Drawer.Trigger>
            <Menu size="32" color="#f14d08" className="lg:hidden" />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 z-[100] bg-black/80" />
            <Drawer.Content className="h-screen w-full fixed bottom-0 z-[1000] outline-none p-2 overflow-scroll">
              <div className="lg:hidden bg-sky-50 p-4 ">
                <div className="flex items-end justify-end">
                  <Drawer.Close>
                    <X size="32" color="#f14d08" />
                  </Drawer.Close>
                </div>
                <ul>
                  <Link to={"/"} className="underline capitalize">
                    <li className="my-2">designer, coder, storyteller...</li>
                  </Link>

                  <Link to="/work" className="underline capitalize my-2">
                    <li>work.</li>
                  </Link>

                  <li
                    className="contact capitalize underline my-2"
                    onClick={openPopUp}
                  >
                    contact.
                  </li>
                </ul>
              </div>
              <Contact />
            </Drawer.Content>
            <Drawer.Overlay />
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
}

export default Navbar;
