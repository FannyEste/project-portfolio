import React from "react";
import "./Separator.css";

const Separator = () => {
  return (
    <div className="separator-wrapper">
      {/* Repeat the separator to fill the width */}
      <div className="separator-container">
        {[...Array(50)].map((_, index) => (
          <img
            key={index}
            src="/assets/path.svg"
            alt="Section Separator"
            className="separator-img"
          />
        ))}
      </div>
    </div>
  );
};

export default Separator;
