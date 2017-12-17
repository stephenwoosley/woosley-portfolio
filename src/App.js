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
      default:
        break;
    }
  }


  render() {
    return (
      <div className="App has-navbar-fixed-top">
        <div className="container" id="main">
          <section className="hero navbar is-fixed-top">
            <div className="hero-body">
              <div className="level">
                <div className="level-left">
                  <div className="level-item titles">
                    <div className="title is-spaced name-title">
                      <h1>Stephen Woosley</h1>
                    </div>
                    <div className="subtitle">
                      <h3>Web Developer</h3>
                    </div>
                    </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <span className="icon icon-style">
                      <a href="https://github.com/stephenwoosley">
                        <i className="fab fa-github fa-lg"></i>
                      </a>
                    </span> 
                    <span className="icon icon-style">
                      <a href="https://linkedin.com/in/stephenwoosley">
                        <i className="fab fa-linkedin-in fa-lg"></i>
                      </a>
                    </span>
                    <span className="icon icon-style">
                      <a href="https://twitter.com/stephenwoosley">
                        <i className="fab fa-twitter fa-lg"></i>
                      </a>
                    </span>
                  </div>
                </div>
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
          <section className="container" id="wrapper">
            <div className="main columns">
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
          </section>
        </div>
        <footer className="footer">
            <div className="container">
              <div className="content has-text-left">
                <p>
                  Made by Stephen
                  {/* <figure class="image is-16x16">
                    <img src="http://res.cloudinary.com/stephenrwoosley/image/upload/v1513179546/me-cutout_wmqxhd.png"/>
                  </figure> */}
                </p>
              </div>
            </div>
          </footer>
      </div>
    );
  }
}

export default App;
