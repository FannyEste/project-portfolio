import React from "react";
import "./Button.css";

const Button = ({ buttons = [] }) => {
    return (
        <>
            {buttons.map((button, index) => (
                <a key={index} href={button.link} className="custom-button" target="_blank" rel="noopener noreferrer">
                    {button.icon} 
                    <span className="p">{button.text}</span> {/* ✅ Uses `.p` from TextBox.css */}
                </a>
            ))}
        </>
    );
};

export default Button;