import React from 'react';
import Intro from './components/Intro'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import './App.css';

function App() {
  return (
    <div className="app">
        <Intro />
        <Projects />
        <AboutMe />
    </div>
  );
}

export default App;
