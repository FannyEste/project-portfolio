import React from "react";
import "./Arrow.css";

const Arrow = () => {
  return (
    <div className="arrow-container">
      <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 0 24 24" width="80px" fill="none" stroke="#FF7D29" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter">
        <path d="M12 2v16M6 14l6 6 6-6"/>
      </svg>
    </div>
  );
};

export default Arrow;