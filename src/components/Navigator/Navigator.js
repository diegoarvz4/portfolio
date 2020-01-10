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
    const hightLight = '#D7263D';
    const unHighlight = 'white';
    const plusOffset = 100;
    console.log('****')
    console.log(window.scrollY)

    console.log(this.state.contactOffset - 100)
    if (window.scrollY < this.state.projectsOffset - plusOffset){
      this.setState({
        headerNavFeedback: hightLight,
        projectsNavFeedback: unHighlight,
        contactNavFeedback: unHighlight,
      })
    } else if(window.scrollY >= this.state.projectsOffset - plusOffset && window.scrollY < this.state.contactOffset - plusOffset){
      this.setState({
        headerNavFeedback: unHighlight,
        projectsNavFeedback: hightLight,
        contactNavFeedback: unHighlight,
      })
    } else if (window.scrollY >= this.state.contactOffset - plusOffset) {
      console.log("here")
      this.setState({
        headerNavFeedback: unHighlight,
        projectsNavFeedback: unHighlight,
        contactNavFeedback: hightLight,
      })
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
        return window.scrollTo({left: 0, top: this.state.contactOffset - 80, behavior: 'smooth'});
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
          <div>
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
          <div>
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
          <div>
            Contact
          </div>
        </div>
        
      </nav>
    )
  }
}

export default Navigator;