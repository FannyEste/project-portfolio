import React from "react";
import "./Button.css";

const Button = ({ buttons = [] }) => {
    return (
        <>
            {buttons.map((button, index) => (
                <a key={index} href={button.link} className={`custom-button ${button.className || ""}`}  target="_blank" rel="noopener noreferrer">
                    {button.icon} 
                    <span>{button.text}</span> 
                </a>
            ))}
        </>
    );
};

export default Button;