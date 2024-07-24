import React, { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import closeButton from "./contactCloseButton.svg";

const AboutMePopUp = ({ isOpen, onClose, children, isVisible }) => {
  if (!isOpen) return null;
  const popupRef = useRef(null);
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "easeOut" }
      );
    } else {
      gsap.to(popupRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.3,
        ease: "easeIn",
        onComplete: onClose,
      });
    }
  }, [isVisible, onClose]);
  if (!isOpen) return null;
  return (
    <div className="about-overlay" onClick={onClose}>
      <div ref={popupRef} className="about-wrapper">
        <div className="about-content" onClick={(e) => e.stopPropagation()}>
          <button className="about-close" onClick={onClose}>
            <img src={closeButton} alt="Close Pop Up button" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutMePopUp;
