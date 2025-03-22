import "./TextBox.css";
import React from "react";

const TextBox = ({ text, textType = "p", sectionType }) => {
  const className = `${textType} ${sectionType ? `${sectionType}` : ""}`.trim();

  if (textType === "h1") {
    return <h1 className={className}>{text}</h1>;
  } else if (textType === "h2") {
    return <h2 className={className}>{text}</h2>;
  } else if (textType === "h3") {
    return <h3 className={className}>{text}</h3>;
  } else if (textType === "list") {
    if (Array.isArray(text)) {
      return (
        <ul className={className}>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      console.warn(
        "Expected an array for 'text' prop when 'textType' is 'list'",
      );
      return null;
    }
  }

  return <p className={className}>{text}</p>;
};

export default TextBox;
