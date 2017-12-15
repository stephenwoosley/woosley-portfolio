import React, { Component } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import 'bulma/css/bulma.css';
import './css/style.css'

class App extends Component {

  state = {
    aboutActive: true,
    skillsActive: false,
    projectsActive: false,
    experienceActive: false,
    educationActive: false,
    contactActive: false,
  }

  toggleActive = event => {
    // switch on the text content of event.target
    switch(event.target.text) {
      // set state for booleans based on target clicked
      case 'About':
        this.setState({aboutActive: true}) 
        this.setState({skillsActive: false})
        this.setState({projectsActive: false})
        this.setState({experienceActive: false}) 
        this.setState({educationActive: false})
        this.setState({contactActive: false})
        break;
      case 'Skills':
        this.setState({aboutActive: false}) 
        this.setState({skillsActive: true})
        this.setState({projectsActive: false})
        this.setState({experienceActive: false}) 
        this.setState({educationActive: false})
        this.setState({contactActive: false})
        break;
      case 'Projects':
        this.setState({aboutActive: false}) 
        this.setState({skillsActive: false})
        this.setState({projectsActive: true})
        this.setState({experienceActive: false}) 
        this.setState({educationActive: false})
        this.setState({contactActive: false})
        break;
      case 'Experience':
        this.setState({aboutActive: false}) 
        this.setState({skillsActive: false})
        this.setState({projectsActive: false})
        this.setState({experienceActive: true}) 
        this.setState({educationActive: false})
        this.setState({contactActive: false})
        break;
      case 'Education':
        this.setState({aboutActive: false}) 
        this.setState({skillsActive: false})
        this.setState({projectsActive: false})
        this.setState({experienceActive: false}) 
        this.setState({educationActive: true})
        this.setState({contactActive: false})
        break;
      case 'Contact':
        this.setState({aboutActive: false}) 
        this.setState({skillsActive: false})
        this.setState({projectsActive: false})
        this.setState({experienceActive: false}) 
        this.setState({educationActive: false})
        this.setState({contactActive: true})
        break;
    }
  }


  render() {
    return (
      <div className="App">
        <div className="container" id="main">
          <section className="hero">
            <div className="hero-body">
              <div className="title name-title">
                <h1>Stephen Woosley</h1>
              </div>
              <div className="subtitle">
                <h3>Web Developer</h3>
              </div>
            </div>
            <div className="hero-foot">
              <nav className="tabs is-fullwidth">
                <div className="container">
                  <ul>
                    <li
                      className={this.state.aboutActive ? 'is-active': null} 
                      onClick={this.toggleActive}
                    ><a className="about-tab-li">About</a></li>
                    <li
                      className={this.state.skillsActive ? 'is-active': null} 
                      onClick={this.toggleActive}
                    ><a className="skills-tab-li">Skills</a></li>
                    <li
                      className={this.state.projectsActive ? 'is-active': null} 
                      onClick={this.toggleActive}
                    ><a className="projects-tab-li">Projects</a></li>
                    <li
                      className={this.state.experienceActive ? 'is-active': null} 
                      onClick={this.toggleActive}
                    ><a  className="experience-tab-li">Experience</a></li>
                    <li
                      className={this.state.educationActive ? 'is-active': null} 
                      onClick={this.toggleActive}
                    ><a className="education-tab-li">Education</a></li>
                    <li
                      className={this.state.contactActive ? 'is-active': null} 
                      onClick={this.toggleActive}
                    ><a className="contact-tab-li">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </section>
          <section className="container">
            <div className="main columns">
              <div className="column is-three-fifths">
                {
                  this.state.aboutActive
                  ? <About/>
                  : this.state.skillsActive
                    ? <Skills/>
                    : this.state.projectsActive 
                      ? <Projects/>
                      : this.state.experienceActive
                        ? <Experience/>
                        : this.state.educationActive
                          ? <Education/>
                          : <Contact/>
                }
              </div>
              <div className="column">
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
