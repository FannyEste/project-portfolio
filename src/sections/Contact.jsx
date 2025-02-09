import { Grid } from "../ui/Grid";
import TextBox from "../components/TextBox/TextBox";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import SocialLinks from "/assets/SocialLinks.svg";  

export const Contact = () => {
    return (
        <Grid background="white" sectionType="contact">
            {/* 🔹 Centered Header */}
            <TextBox text="Let's talk" textType="h1" sectionType="contact" />

            {/* 🔹 Profile Section */}
            <div className="contact-info">
                <ProfilePicture 
                    imageUrl="https://avatars.githubusercontent.com/u/97857246?v=4" 
                    imageType="profile-picture" 
                />

                <TextBox text="Estefanny Moran Aguilera" textType="h3" sectionType="contact" />
                <TextBox text="+46(0)763 12 33 45" textType="h3" sectionType="contact" />
                <TextBox text="est.mor@mail.com" textType="h3" sectionType="contact" />

                {/* 🔹 Social Links SVG */}
                <img src={SocialLinks} alt="Social Links" className="social-links" />
            </div>

            {/* 🔹 Ticker Tape Section */}
            <div className="ticker-tape">
               <h3>Estefanny Morán • Fullstack Developer • Estefanny Morán • Fullstack Developer • Estefanny Morán • Fullstack Developer • Estefanny Morán</h3>
            </div>
        </Grid>
    );
};

export default Contact;