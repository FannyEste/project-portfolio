import { Grid } from "../ui/Grid";
import TextBox from "../components/TextBox/TextBox";

export const Skills = () => {
  return (
    <Grid background="blue" sectionType="skills">
      <TextBox text="Skills" textType="h1" sectionType="skills" />

      <div className="skills-container">
        {/* ✅ Code Column */}
        <div className="skills-column">
          <TextBox text="Code" textType="h3" sectionType="skills-code" />
          <TextBox text="HTML5" textType="p" sectionType="skills" />
          <TextBox text="CSS3" textType="p" sectionType="skills" />
          <TextBox text="JavaScript ES6" textType="p" sectionType="skills" />
          <TextBox text="React" textType="p" sectionType="skills" />
          <TextBox text="Styled Components" textType="p" sectionType="skills" />
          <TextBox text="GitHub" textType="p" sectionType="skills" />
        </div>

        {/* ✅ Toolbox Column */}
        <div className="skills-column">
          <TextBox text="Toolbox" textType="h3" sectionType="skills-toolbox" />
          <TextBox text="Atom" textType="p" sectionType="skills" />
          <TextBox text="Postman" textType="p" sectionType="skills" />
          <TextBox text="Adobe Photoshop" textType="p" sectionType="skills" />
          <TextBox text="Adobe Illustrator" textType="p" sectionType="skills" />
          <TextBox text="Figma" textType="p" sectionType="skills" />
          <TextBox text="Keynote" textType="p" sectionType="skills" />
          <TextBox text="Slack" textType="p" sectionType="skills" />
        </div>

        {/* ✅ Upcoming Column */}
        <div className="skills-column">
          <TextBox
            text="Upcoming"
            textType="h3"
            sectionType="skills-upcoming"
          />
          <TextBox text="Node.js" textType="p" sectionType="skills" />
        </div>

        {/* ✅ More Column */}
        <div className="skills-column">
          <TextBox text="More" textType="h3" sectionType="skills-more" />
          <TextBox text="Design Lead" textType="p" sectionType="skills" />
          <TextBox text="Branding" textType="p" sectionType="skills" />
          <TextBox text="Strategy" textType="p" sectionType="skills" />
          <TextBox text="Process design" textType="p" sectionType="skills" />
          <TextBox
            text="Concept development"
            textType="p"
            sectionType="skills"
          />
          <TextBox text="Agile methodology" textType="p" sectionType="skills" />
          <TextBox
            text="Hyper Island toolbox"
            textType="p"
            sectionType="skills"
          />
        </div>
      </div>
    </Grid>
  );
};

export default Skills;
