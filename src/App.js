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
    <div id="App" className="App">
      <Navigator />
      <header id="Header" className="App-header">
        <div className="App-header-msg">
          <h1>{"Diego Arvizu"}</h1>
          <p>From <span>ideas</span> to <span>code</span> to <span>experiences</span>. That's what I do. I am a <span>web developer</span> and I invite you to see some of my work.</p>
        </div>
      </header>
      <div id="ProjectsContainer" className="ProjectsContainer">
        <ProjectPreview  
          img={musiclassMockup} 
          imgStyle={{
            width: '100%'
          }}
          skillsIcons={['html5','css3', 'sass','js', 'ruby', 'react']}
          name="MUSICLASS"
          desc={"Musiclass is mobile web app for making appointments with music teachers. Find teachers by your favorite musical instrument. This project was built with React JS (frond-end), and Ruby on Rails (back-end)."}          
          sourceCodeLink={"https://github.com/diegoarvz4/React-MusicTeachers"}
          liveDemoLink={"https://diegoarvz-musicteachers.herokuapp.com/"}
        />
        <ProjectPreview 
          skillsIcons={['html5','css3', 'sass', 'bootstrap','js', 'ruby']}
          name="LEXI SERIES"
          img={lexiSeriesMockup}
          desc={"Lexi Series is a web platform for dubbing houses. Directors, translators and QC's that need to have all the information as promptly as possible. The front-end and back-end were built with Ruby on Rails. Bootstrap 3 components were used."}
          imgStyle={{
            width: '100%'
          }}
          sourceCodeLink={"https://github.com/diegoarvz4/lexi-series"}
          liveDemoLink={"https://shrouded-mountain-06720.herokuapp.com/"}
        />
        <ProjectPreview 
          skillsIcons={['html5','css3', 'js', 'webpack']}
          name="BATTLESHIP"
          imgStyle={{
            width: '100%'
          }}
          img={BattleshipMockup}
          desc={"The classic boardgame Battleship into a practical web version. This project was built with pure vanilla javascript, ES6 and webpack."}
          sourceCodeLink={"https://github.com/FSolM/JS-battleship"}
          liveDemoLink={"https://fsolm.github.io/JS-battleship/"}
        />
        <ProjectPreview 
          skillsIcons={['html5', 'css3', 'sass', 'bootstrap','js', 'webpack']}
          name="UFRIENDS"
          img={uFriends}
          imgStyle={{
            width: '100%'
          }}
          desc={"A social media where you can post, like and comment your friend's posts. The back-end and the front-end were built with Ruby on Rails."} 
          sourceCodeLink={"https://github.com/diegoarvz4/building_facebook"}
          liveDemoLink={"https://intense-refuge-98385.herokuapp.com"}
        />
        <ProjectPreview 
          skillsIcons={['html5','css3','js', 'webpack']}
          name="WEATHER WEB"
          img={WeatherAPI}
          imgStyle={{
            width: '60%'
          }}
          desc={"This web app gives the weather information about almost any city in the world. The data is fetched from OpenWeatherMap.com. This project was built with vanilla javascript."}
          sourceCodeLink={"https://github.com/diegoarvz4/weather_app"}
          liveDemoLink={"https://diegoarvz4.github.io/weather_app/"}
        />
        <ProjectPreview 
          skillsIcons={['csharp', 'unity']}
          name="TURBO BLUCK"
          img={TurboBluckMockup}
          imgStyle={{
            width: '50%'
          }}
          desc={"A mobile app video game. Turbo Bluck is a mission space modern arcade experience. This project was built with Unity 5."}
          sourceCodeLink={"https://play.google.com/store/apps/details?id=com.offbox.turbobluck&hl=en_US"}
          liveDemoLink={"https://play.google.com/store/apps/details?id=com.offbox.turbobluck&hl=en_US"}
        />
      </div>
      <Contact />
      <footer>
        © Diego Arvizu | 2020
      </footer>
    </div>
  );
}

export default App;
