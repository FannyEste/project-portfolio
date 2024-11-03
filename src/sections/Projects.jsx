import { Card } from "../components/Card/Card" 
import { Grid } from "../ui/Grid.jsx"
import { SectionTitle } from "../ui/Typography/Typography.jsx"

export const Projects = () => {
    return (
        <Grid background="white">
            <div>Projects Components</div>
            <SectionTitle>My projects</SectionTitle>
            <Card 
              imageSource="/src/assets/card1.svg"
              borderColor="pink"
              cardTitle="This is a project version of the card"
              cardDescription="This is a project description"
              sectionType="projects"
            />
             <Card 
              imageSource="/src/assets/card2.svg"
              borderColor="pink"
              cardTitle="This is a project version of the card"
              cardDescription="This is a project description"
              sectionType="projects"
            />
             <Card 
              imageSource="/src/assets/card3.svg"
              borderColor="pink"
              cardTitle="This is a project version of the card"
              cardDescription="This is a project description"
              sectionType="projects"
            />
            <Card 
              imageSource="/src/assets/card4.svg"
              borderColor="pink"
              cardTitle="This is a project version of the card"
              cardDescription="This is a project description"
              sectionType="projects"
            />
            <Card 
              imageSource="/src/assets/card5.svg"
              borderColor="pink"
              cardTitle="This is a project version of the card"
              cardDescription="This is a project description"
              sectionType="projects"
            />
            <Card 
              imageSource="/src/assets/card6.svg"
              borderColor="pink"
              cardTitle="This is a project version of the card"
              cardDescription="This is a project description"
              sectionType="projects"
            />
            <Card 
              imageSource="/src/assets/card7.svg"
              borderColor="pink"
              cardTitle="This is a project version of the card"
              cardDescription="This is a project description"
              sectionType="projects"
            />
             <Card 
              imageSource="/src/assets/card8.svg"
              borderColor="pink"
              cardTitle="This is a project version of the card"
              cardDescription="This is a project description"
              sectionType="projects"
            />
        </Grid> 
    )
}

export default Projects