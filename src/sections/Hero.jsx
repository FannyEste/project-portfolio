import React from "react";
import Header from "../components/Header"; 
import "./Hero.css";

function Hero({ name, header, description, picture}) {
  return (
    <section className="hero">
        <div className="hero-name">
         <Header title={"Frontend Developer"} /> {/*Header of the left */}
         <div className="hero-profile">
           <img src={picture} alt="Profile" className="profile-picture" /> 
          </div> 
        </div>
        <div className="hero-description">
        </div>
    </section>
  );
}

export default Hero;
