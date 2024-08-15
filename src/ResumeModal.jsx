import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./computer_page.css";
// import resumePDF from "./Ijisesan_Temi_Portfolio_Resume.pdf";

const ResumePage = () => {
  return (
    <>
      <embed
        src={resumePDF}
        title="PDF Viewer"
        style={{ width: "100%", height: "100%", border: "1px solid black" }}
      ></embed>
    </>
  );
};

export default ResumePage;
