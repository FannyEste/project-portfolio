import { Card } from "../components/Card/Card" 
import { Grid } from "../ui/Grid.jsx"
import TextBox from "../components/TextBox/TextBox";


export const Projects = () => {
    return (
        <Grid background="white">
            <TextBox text="Featured Projects" textType="h1"  />
            
            
            <Card 
              imageSource="/assets/card1.svg"
              borderColor="peach"
              cardTitle="Chatbot built in javascript"
              cardDescription="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries"
              sectionType="projects"
              icons={["HTML5", "CSS3", "React", "Node"]}
        
            />
            
             <Card 
              imageSource="/assets/card2.svg"
              borderColor="peach"
              cardTitle="Weather app"
              cardDescription="The chat bot app is a conversational 
              AI-powered tool designed to enhance user experience by
              providing instant, personalized, and automated responses 
              to user inquiries."
              sectionType="projects"
              icons={["HTML5", "CSS3", "React", "Node"]}
            />
             <Card 
              imageSource="/assets/card3.svg"
              borderColor="peach"
              cardTitle="Guess who, the game"
              cardDescription="The chat bot app is a conversational AI-powered 
              tool designed to enhance user experience by providing instant, 
              personalized, and automated responses to user inquiries."
              sectionType="projects"
              icons={["HTML5", "CSS3", "React", "Node"]}
            />
            <Card 
              imageSource="/assets/card4.svg"
              borderColor="peach"
              cardTitle="Music Releases"
              cardDescription="The chat bot app is a conversational AI-powered 
              tool designed to enhance user experience by providing instant, 
              personalized, and automated responses to user inquiries."
              sectionType="projects"
              icons={["HTML5", "CSS3", "React", "Node"]}
            />
            <Card 
              imageSource="/assets/card5.svg"
              borderColor="peach"
              cardTitle="Survey"
              cardDescription="The chat bot app is a conversational AI-powered 
              tool designed to enhance user experience by providing instant, 
              personalized, and automated responses to user inquiries."
              sectionType="projects"
              icons={["HTML5", "CSS3", "React", "Node"]}
            />
            <Card 
              imageSource="/assets/card6.svg"
              borderColor="peach"
              cardTitle="Happy Thoughts"
              cardDescription="The chat bot app is a conversational AI-powered 
              tool designed to enhance user experience by providing instant, 
              personalized, and automated responses to user inquiries."
              sectionType="projects"
              icons={["HTML5", "CSS3", "React", "Node"]}
            />
            <Card 
              imageSource="/assets/card7.svg"
              borderColor="peach"
              cardTitle="Movies"
              cardDescription="The chat bot app is a conversational AI-powered 
              tool designed to enhance user experience by providing instant, 
              personalized, and automated responses to user inquiries."
              sectionType="projects"
              icons={["HTML5", "CSS3", "React", "Node"]}
            />
             <Card 
              imageSource="/assets/card8.svg"
              borderColor="peach"
              cardTitle="Todo apps"
              cardDescription="The chat bot app is a conversational AI-powered 
              tool designed to enhance user experience by providing instant, 
              personalized, and automated responses to user inquiries."
              sectionType="projects"
              icons={["HTML5", "CSS3", "React", "Node"]}
            />
        </Grid> 
    );
};

export default Projects