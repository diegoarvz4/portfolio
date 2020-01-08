import React from 'react';
import ProjectPreview from './components/ProjectPreview/ProjectPreview'
import Contact from './components/Contact/Contact';
import './App.scss'


function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        <ul>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>{"< Diego Arvizu />"}</h1>
        <p>From <span>ideas</span> to <span>code</span> to <span>experiences</span>. That's what I do. I am a <span>web developer</span> and I invite you to see some of my work.</p>
      </header>
      <h1 className="App-header-title">Projects</h1>
      <div className="ProjectsContainer">
        <ProjectPreview backGroundColor="BgDarkBlue" name="MUSICLASS"/>
        <ProjectPreview name="LEXI SERIES"/>
        <ProjectPreview name="BATTLESHIP"/>
        <ProjectPreview backGroundColor="BgDarkBlue" name="UFRIENDS"/>
        <ProjectPreview backGroundColor="BgDarkBlue" name="WEATHER API"/>
      </div>
      <h1 className="App-header-title">Contact</h1>
      <Contact />
    </div>
  );
}

export default App;
