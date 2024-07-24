import React, { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import closeButton from "./contactCloseButton.svg";

const PopUp = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <img src={closeButton} alt="Close Pop Up button" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
