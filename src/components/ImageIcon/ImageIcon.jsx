import React from "react";
import "./ImageIcon.css"; // Add styling as needed

const ImageIcon = ({ imageUrl, altText }) => {
  if (!imageUrl) return null; // Prevent rendering if no image is provided

  return <img src={imageUrl} alt={altText || "icon"} className="image-icon" />;
};

export default ImageIcon;
