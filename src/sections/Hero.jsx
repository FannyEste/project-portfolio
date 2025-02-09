import React from "react";
import { Grid } from "../ui/Grid";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import TextBox from "../components/TextBox/TextBox";
import Arrow from "../components/Arrow/Arrow";

const Hero = () => (
  <div className="hero-container"> {/* Wrapper to set position */}
    <Grid background="white" sectionType="hero">
      <TextBox text="Hi, I'm Estefanny Moran" textType="h3" sectionType="hero" />
      <TextBox text="Frontend Developer" textType="h1" sectionType="hero" />

      <ProfilePicture 
        imageUrl="https://avatars.githubusercontent.com/u/97857246?v=4" 
        imageType="profile-picture" 
      />

      <TextBox 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
        textType="p" 
        sectionType="hero" 
      />
    </Grid>

    {/* Downward Arrow (Only inside Hero section, outside the grid) */}
    <Arrow />
  </div>
);

export default Hero;