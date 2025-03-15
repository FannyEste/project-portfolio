import React, { useState } from "react";
import "./Arrow.css";
import arrowUp from "/assets/arrow_up.svg"; 
import arrowDown from "/assets/arrow_down.svg"; 

const Arrow = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="arrow-container"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <img src={isHovered ? arrowDown : arrowUp} alt="Arrow" className="arrow-icon" />
    </div>
  );
};

export default Arrow;