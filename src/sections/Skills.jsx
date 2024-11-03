// Skills.jsx
import React from 'react';
import './Skills.css';

export const Skills = () => {
    const categories = [
        {
            title: 'Code',
            color: '#FEFFD2', 
            skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'React', 'Styled Components', 'GitHub'],
        },
        {
            title: 'Toolbox',
            color: '#FEFFD2',
            skills: ['Atom', 'Postman', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Keynote', 'Slack'],
        },
        {
            title: 'Upcoming',
            color: '#FEFFD2',
            skills: ['Node.js'],
        },
        {
            title: 'More',
            color: '#FEFFD2',
            skills: ['Design Lead', 'Branding', 'Strategy', 'Process Design', 'Concept Development', 'Agile Methodology', 'Hyper Island Toolbox'],
        },
    ];

    return (
        <section className="skills-section">
            <h2 className="skills-header">Skills</h2>
            <div className="skills-grid">
                {categories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3 
                            className="skill-category-title"
                            style={{ backgroundColor: category.color }}
                        >
                            {category.title}
                        </h3>
                        <ul className="skill-list">
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="skill-item">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
