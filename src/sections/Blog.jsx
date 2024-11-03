import { Card } from "../components/Card/Card"
import { Grid } from "../ui/Grid" 
import { SectionTitle } from "../ui/Typography/Typography"

export const Blog = () => {
    return (
        <Grid background="pink">
            <SectionTitle>My blog</SectionTitle>
            <Card 
              imageSource="/src/assets/blog1.svg"
              borderColor="blue"
              cardTitle="This is an article version of the card"
              cardDescription="This is an article description"
              sectionType="blog"
            />
             <Card 
              imageSource="/src/assets/blog2.svg"
              borderColor="blue"
              cardTitle="This is an article version of the card"
              cardDescription="This is an article description"
              sectionType="blog"
            />
             <Card 
              imageSource="/src/assets/blog3.svg"
              borderColor="blue"
              cardTitle="This is an article version of the card"
              cardDescription="This is an article description"
              sectionType="blog"
            />
             <Card 
              imageSource="/src/assets/blog4.svg"
              borderColor="blue"
              cardTitle="This is an article version of the card"
              cardDescription="This is an article description"
              sectionType="blog"
            />
        </Grid> 
    )
}