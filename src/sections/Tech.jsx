import TextBox  from "../components/TextBox/TextBox"
import React from 'react';
import { Grid } from "../ui/Grid";

export const Tech = () => (
    <Grid background="orange" sectionType="tech">
        <TextBox text="Tech" textType="h1" sectionType="tech" />
        <TextBox text="HTML5, CSS3, JavaScript ES6, React, Styled, Components, GitHub, Atom, Postman, Adobe Photoshop, Adobe Illustrator, Figma, Keynote, Slack, Node.js, Design Lead, Branding, Strategy, Process Design, Concept Development, Agile Methodology, Hyper Island Toolbox. " textType="h3" sectionType="tech" />
    </Grid>
)

export default Tech;
