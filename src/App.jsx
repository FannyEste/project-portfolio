import React from "react";
import "./App.css";
import { Blog } from "./sections/Blog.jsx";
import { Projects } from "./sections/Projects.jsx";
import Hero from "./sections/Hero.jsx";
import Skills from "./sections/Skills.jsx";
import Tech from "./sections/Tech.jsx";
import Contact from "./sections/Contact.jsx";
import Separator from "./components/Separator/Separator"; // Import Separator

const App = () => {
  return (
    <div>
      <main>
        <Hero />
        <Tech />
        <Projects />
        <Separator /> {/* Add the separator here */}
        <Blog />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
