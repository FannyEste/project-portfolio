import { Card } from "../components/Card/Card";
import { Grid } from "../ui/Grid"; 
import TextBox from "../components/TextBox/TextBox";

export const Blog = () => {
    return (
        <Grid background="peach">
            <TextBox text="My words" textType="h1"  />
            
            {/* 🔹 Wrap all Cards inside a Two-Column Grid Container */}
            <div className="blog-container">
                <Card 
                    imageSource="../assets/blog1.svg"
                    borderColor="orange"
                    cardTitle="How to stop being scared: Learning to love code"
                    cardDescription="Writing code is less about “just working.” Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective."
                    sectionType="blog"
                    date="July 2023"
                />
                <Card 
                    imageSource="../assets/blog2.svg"
                    borderColor="orange"
                    cardTitle="How to stop being scared: Learning to love code"
                    cardDescription="Writing code is less about “just working.” Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective."
                    sectionType="blog"
                    date="July 2023"
                />
                <Card 
                    imageSource="../assets/blog3.svg"
                    borderColor="orange"
                    cardTitle="How to stop being scared: Learning to love code"
                    cardDescription="Writing code is less about “just working.” Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective."
                    sectionType="blog"
                    date="July 2023"
                />
                <Card 
                    imageSource="../assets/blog4.svg"
                    borderColor="orange"
                    cardTitle="How to stop being scared: Learning to love code"
                    cardDescription="Writing code is less about “just working.” Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective."
                    sectionType="blog"
                    date="July 2024"
                />
            </div>
        </Grid> 
    );
};

export default Blog;