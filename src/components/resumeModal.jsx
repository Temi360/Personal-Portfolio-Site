import React from "react";
import "./../styles/computerPage.css";
import resumePDF from "./Ijisesan_Temi_Portfolio_Resume.pdf";

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
