import React from 'react'
import './App.css'
import { Blog } from "./sections/Blog.jsx"
import { Projects } from "./sections/Projects.jsx"
import Hero from "./sections/Hero.jsx"
import { Skills } from "./sections/Skills.jsx"

const App = () => {
    return (
        <main>
            <Hero
                name="Estefanny"
                header="pu"
                description="jk"
                picture="https://avatars.githubusercontent.com/u/97857246?v=4"
            />
            <h1>My portfolio</h1>
            <Projects />
            <Blog />
            <Skills />
        </main>
    )
}

export default App
