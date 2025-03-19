import TextBox  from "../components/TextBox/TextBox"
import React from 'react';
import { Grid } from "../ui/Grid";

export const Tech = () => (
    <Grid background="orange" sectionType="tech">
        <TextBox text="Tech" textType="h1" sectionType="tech" />
        <TextBox text="HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. " textType="h3" sectionType="tech" />
    </Grid>
)

export default Tech;
