import React from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Intro />
            <Projects />
            <AboutMe />
            <Contact />
        </div>
    );
}

export default App;
