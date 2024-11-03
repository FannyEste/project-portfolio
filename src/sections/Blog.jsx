import { Card } from "../components/Card/Card"
import { Grid } from "../ui/Grid" 
import { SectionTitle } from "../ui/Typography/Typography"

export const Blog = () => {
    return (
        <Grid background="peach">
            <SectionTitle>My blog</SectionTitle>
            <Card 
              imageSource="/src/assets/blog1.svg"
              borderColor="orange"
              cardTitle="How to stop being scared: Learning to love code"
              cardDescription="This is an article description"
              sectionType="blog"
            />
             <Card 
              imageSource="/src/assets/blog2.svg"
              borderColor="orange"
              cardTitle="How to stop being scared: Learning to love code"
              cardDescription="This is an article description"
              sectionType="blog"
            />
             <Card 
              imageSource="/src/assets/blog3.svg"
              borderColor="orange"
              cardTitle="How to stop being scared: Learning to love code"
              cardDescription="This is an article description"
              sectionType="blog"
            />
             <Card 
              imageSource="/src/assets/blog4.svg"
              borderColor="orange"
              cardTitle="How to stop being scared: Learning to love code"
              cardDescription="This is an article description"
              sectionType="blog"
            />
        </Grid> 
    )
}