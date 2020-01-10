import React from 'react';
import './Navigator.scss';

class Navigator extends React.Component {

  constructor(){
    super();
    this.state = {
      headerOffset: 0,
      projectsOffest: 0,
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTo = this.scrollTo.bind(this);

  }

  handleScroll(e) {
    //console.log(window.scrollY)
  }

  componentDidMount() {
    window.addEventListener('scroll', (e)=> this.handleScroll(e));
    const headerOffset = document.getElementById('Header').offsetTop;
    const projectsOffest = document.getElementById('ProjectsContainer').offsetTop;
    this.setState({
      headerOffset,
      projectsOffest
    })
  }
 
  scrollTo(viewElement) {
    switch(viewElement) {
      case 'Projects':
        return window.scrollTo(0, this.state.projectsOffest);
      case 'Header':
        return window.scrollTo(0, this.state.headerOffset);;
      default:
        return 0;
    }
  }
  

  render() {
    return (
      <nav className="NavigatorContainer" >
        <div className="navItemContainer" onClick={() => this.scrollTo('Header')}>
          <div className="navItem"></div>
          <div>
            Hello!
          </div>
        </div>
        <div className="itemLace"></div>
        <div className="navItemContainer" onClick={() => this.scrollTo('Projects')}>
          <div className="navItem"></div>
          <div>
            Projects
          </div>
        </div>
        <div className="itemLace"></div>
        <div className="navItem"></div>
      </nav>
    )
  }
}

export default Navigator;