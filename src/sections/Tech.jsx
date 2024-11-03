import TextBox  from "../components/TextBox/TextBox"
import React from 'react';
import './Tech.css';
import { Grid } from "../ui/Grid";

export const Tech = () => (
    <Grid background="orange">
        <TextBox text="Tech" textType="h1" sectionType="tech" />
        <TextBox text="HTML, Javascript, CSS, React" textType="h2" sectionType="tech" />
    </Grid>
)

export default Tech;
