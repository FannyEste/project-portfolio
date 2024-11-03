import React from "react";
import { Grid } from "../ui/Grid" 
import { SectionTitle } from "../ui/Typography/Typography"
import ProfilePicture  from "../components/ProfilePicture/ProfilePicture"
import TextBox  from "../components/TextBox/TextBox"
import "./Hero.css";


const Hero = () => (
  <Grid background="pink">
    <TextBox text="Hi, I'm Estefanny Moran" textType="h3" sectionType="hero" />
    <TextBox text="Frontend developer" textType="h1" sectionType="hero" />
    <ProfilePicture imageUrl="https://avatars.githubusercontent.com/u/97857246?v=4" imageType="profile-picture"/>
    <TextBox text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." textType="p" sectionType="hero" />
    
  </Grid>
);

export default Hero;
