import React, { Component } from 'react';
import ExperienceOne from './Experience/experience-one';
import ExperienceTwo from './Experience/experience-two'
import ExperienceThree from './Experience/experience-three'
import 'bulma/css/bulma.css';

class Experience extends Component {
  
    state = {
      oneClass: 'show',
      twoClass: 'hidden',
      threeClass: 'hidden'
    }
    componentDidMount() {
      window.onscroll = () => this.handleScroll()
    }

    handleScroll() { 
      if (document.documentElement.scrollTop > 430) {
         this.setState({
           twoClass: 'show', oneClass: 'hide'
         })
       }
       else if (document.documentElement.scrollTop > 430) {
         this.setState({
           threeClass: 'show', twoClass: 'hide'
         })
       }
     }

    render() {
      return(
        <div>
          <section className="hero is-medium hero-experience">
            <div className="hero-body">
              <div className="container">
                <h3 className="title experience-content">
                  <ExperienceOne oneClass={this.state.oneClass}/>
                  <ExperienceTwo twoClass={this.state.twoClass}/>
                  <ExperienceThree threeClass={this.state.threeClass}/>
                </h3>
              </div>
            </div>
          </section>
        </div>
      );
    }
}

export default Experience;