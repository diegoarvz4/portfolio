import React from 'react';
import './Navigator.scss';

class Navigator extends React.Component {

  constructor(){
    super();
    this.state = {
      headerOffset: 0,
      projectsOffset: 0,
      contactOffset: 0,
      headerNavFeedback: '#D7263D',
      projectsNavFeedback: 'white',
      contactNavFeedback: 'white',
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTo = this.scrollTo.bind(this);

  }

  handleScroll(e) {
    const hightLight = '#272838';
    const unHighlight = 'white';
    const plusOffset = 100;
    if (window.scrollY < this.state.projectsOffset - plusOffset){
      this.setState({
        headerNavFeedback: hightLight,
        projectsNavFeedback: unHighlight,
        contactNavFeedback: unHighlight,
      })
      document.getElementById('App').style.backgroundColor = '#FFF';
    } else if(window.scrollY >= this.state.projectsOffset - plusOffset && window.scrollY < this.state.contactOffset - plusOffset){
      this.setState({
        headerNavFeedback: unHighlight,
        projectsNavFeedback: hightLight,
        contactNavFeedback: unHighlight,
      })
      document.getElementById('App').style.backgroundColor = '#FAFF81';
    } else if (window.scrollY >= this.state.contactOffset - plusOffset) {
      this.setState({
        headerNavFeedback: unHighlight,
        projectsNavFeedback: unHighlight,
        contactNavFeedback: hightLight,
      }) 
      document.getElementById('App').style.backgroundColor = '#FFF';
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (e)=> this.handleScroll(e));
    const headerOffset = document.getElementById('Header').offsetTop;
    const projectsOffset = document.getElementById('ProjectsContainer').offsetTop;
    const contactOffset = document.getElementById('Contact').offsetTop;
    this.setState({
      headerOffset,
      projectsOffset,
      contactOffset,
    })
  }
 
  scrollTo(viewElement) {
    switch(viewElement) {
      case 'Header':
        return window.scrollTo({left: 0, top: this.state.headerOffset, behavior: 'smooth'});
      case 'Projects':
        return window.scrollTo({left: 0, top: this.state.projectsOffset -80, behavior: 'smooth'});
      case 'Contact':
        return window.scrollTo({left: 0, top: 20000, behavior: 'smooth'});
      default:
        return 0;
    }
  }
  

  render() {



    return (
      <nav className="NavigatorContainer" >
        <div className="navItemContainer" onClick={() => this.scrollTo('Header')}>
          <div className="navItem" 
            style={
              {
                backgroundColor: this.state.headerNavFeedback
              }
            }
          />
          <div className="navItem-text">
            Hello!
          </div>
        </div>
        <div className="itemLace"></div>
        <div className="navItemContainer" onClick={() => this.scrollTo('Projects')}>
          <div className="navItem" 
            style={
              {
                backgroundColor: this.state.projectsNavFeedback
              }
            }
          />
          <div className="navItem-text">
            Projects
          </div>
        </div>
        <div className="itemLace"></div>
        <div className="navItemContainer" onClick={() => this.scrollTo('Contact')}>
          <div className="navItem" 
            style={
              {
                backgroundColor: this.state.contactNavFeedback
              }
            }
          />
          <div className="navItem-text">
            Contact
          </div>
        </div>
        
      </nav>
    )
  }
}

export default Navigator;