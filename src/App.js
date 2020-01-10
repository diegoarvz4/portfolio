import React from 'react';
import Navigator from './components/Navigator/Navigator';
import ProjectPreview from './components/ProjectPreview/ProjectPreview'
import Contact from './components/Contact/Contact';
import './App.scss'
import musiclassMockup from './assets/img/IphoneMockup_01.png';
import lexiSeriesMockup from './assets/img/Mockup-Macbook-Pro-2017_01.png';
import BattleshipMockup from './assets/img/WebMockup_02.png';
import uFriends from './assets/img/WebMockup_01.png';
import WeatherAPI from './assets/img/IphoneMockup_Weather01.png';
import TurboBluckMockup from './assets/img/IphoneMockup_TurboBluck01.png';


function App() {

  return (
    <div className="App">
      <Navigator />
      <header id="Header" className="App-header">
        <h1>{"< Diego Arvizu />"}</h1>
        <p>From <span>ideas</span> to <span>code</span> to <span>experiences</span>. That's what I do. I am a <span>web developer</span> and I invite you to see some of my work.</p>
      </header>
      <div id="ProjectsContainer" className="ProjectsContainer">
        <ProjectPreview  
          img={musiclassMockup} 
          imgStyle={{
            width: '100%'
          }}
          skillsIcons={['html5','css3', 'sass','js', 'ruby', 'react']}
          name="MUSICLASS"
          desc={"Musiclass is mobile web app for making appointments with music teachers. Find teachers by your favorite musical instrument. This project built with React JS for the frond-end, and the backend with Ruby on Rails."}          
        />
        <ProjectPreview 
          skillsIcons={['html5','css3', 'sass', 'bootstrap','js', 'ruby']}
          name="LEXI SERIES"
          img={lexiSeriesMockup}
          desc={"Lexi Series is a web platform for dubbing houses. Directors, translators and QC's need to have all the information as prompty as possible. The front-end and back-end were built with Ruby on Rails. Some componentes are from Bootstrap 3."}
          imgStyle={{
            width: '100%'
          }}
        />
        <ProjectPreview 
          skillsIcons={['html5','css3', 'js', 'webpack']}
          name="BATTLESHIP"
          imgStyle={{
            width: '100%'
          }}
          img={BattleshipMockup}
          desc={"The classic boardgame Battleship to a simple web version against the CPU. This project was built with pure vanilla javascript with some ES6 and webpack."}
        />
        <ProjectPreview 
          skillsIcons={['html5', 'css3', 'sass', 'bootstrap','js', 'webpack']}
          name="UFRIENDS"
          img={uFriends}
          imgStyle={{
            width: '100%'
          }}
          desc={"A social media where you can make post, like and comment your friend's posts. The backend and the frontend were built with Ruby on Rails."}
        />
        <ProjectPreview 
          skillsIcons={['html5','css3','js', 'webpack']}
          name="WEATHER WEB APP"
          img={WeatherAPI}
          imgStyle={{
            width: '60%'
          }}
          desc={"This simple web app gives you weather information about almost any city in the world. The data is fetched from OpenWeatherMap.com. This project was vuilt with vanilla javascript."}
        />
        <ProjectPreview 
          skillsIcons={['csharp', 'unity']}
          name="TURBO BLUCK"
          img={TurboBluckMockup}
          imgStyle={{
            width: '50%'
          }}
          desc={"A mobile app video game. Turbo Bluck is a mission space modern arcade experience. This project was built with Unity 5."}
        />
      </div>
      <Contact />
    </div>
  );
}

export default App;
