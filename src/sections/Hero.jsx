import React from "react";
import { Grid } from "../ui/Grid";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import TextBox from "../components/TextBox/TextBox";
import Arrow from "../components/Arrow/Arrow";

const Hero = () => (
  <div className="hero-container"> {/* Wrapper to set position */}
    <Grid background="white" sectionType="hero">
      <TextBox text="Hi, I’m Estefanny Moran" textType="h3" sectionType="hero" />
      <TextBox text="Frontend Developer" textType="h1" sectionType="hero" />

      <ProfilePicture 
        imageUrl="https://avatars.githubusercontent.com/u/97857246?v=4" 
        imageType="profile-picture" 
      />

      <TextBox 
        text="Estefanny is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field." 
        textType="p" 
        sectionType="hero" 
      />

      <Arrow />
    </Grid>

    {/* Downward Arrow (Only inside Hero section, outside the grid) */}
    
  </div>
);

export default Hero;