import { Card } from "../components/Card/Card"
import { Grid } from "../ui/Grid" 
import { SectionTitle } from "../ui/Typography/Typography"

export const Blog = () => {
    return (
        <Grid background="pink">
            <SectionTitle>My blog</SectionTitle>
            <Card />
        </Grid> 
    )
}