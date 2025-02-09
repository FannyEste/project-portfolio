import React from 'react'
import './App.css'
import { Blog } from "./sections/Blog.jsx"
import { Projects } from "./sections/Projects.jsx"
import Hero from "./sections/Hero.jsx"
import Skills from "./sections/Skills.jsx";
import Tech from "./sections/Tech.jsx";
import Contact from './sections/Contact.jsx'

// App.jsx
const App = () => {
    return (
        <div>
            <main>
                <Hero />
                <Tech />
                <Projects />
                <Blog />
                <Skills />
                <Contact />
            </main>
            
        </div>
    );
};

export default App;
