import React, { Component } from 'react';
import ExperienceOne from './Experience/experience-one';
import ExperienceTwo from './Experience/experience-two';
import ExperienceThree from './Experience/experience-three';
import LeftArrow from './Experience/Arrows/LeftArrow';
import RightArrow from './Experience/Arrows/RightArrow';
import sr from '../scrollreveal.js'
import 'bulma/css/bulma.css';

class Experience extends Component {
  
    state = {
      oneClass: 'show',
      twoClass: 'hidden',
      threeClass: 'hidden',
      showLeftArrow: true,
      showRightArrow: true
    }
    componentDidMount() {
    
      const configOne = {
        origin: 'right',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
      const configTwo = {
        origin: 'left',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
      const configThree = {
        origin: 'bottom',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
      
      sr.reveal(this.refs.experienceonebox, configOne)
      sr.reveal(this.refs.experiencetwobox, configTwo)
      sr.reveal(this.refs.experiencethreebox, configThree)
    }

     flipClass(buttonID) {
       if(this.state.oneClass === 'show') {
         this.setState({oneClass:'hidden', twoClass: 'show'})
       }
      if(this.state.twoClass === 'show') {
        if(buttonID === 'one'){
          this.setState({oneClass:'show', twoClass:'hidden'})
        }
        else {
          this.setState({threeClass:'show', twoClass:'hidden'})
        }
      }
 

     }

    render() {
      return(
          <div className="columns">
            <div className="column is-1">
              {/* {this.state.showLeftArrow && <LeftArrow/>} */}
            </div>
              <div className="column is-8">
                <div className="experience-content">
                  <div ref="experienceonebox" className="experienceonebox">
                    <ExperienceOne oneClass={this.state.oneClass}/>
                  </div>
                  <div ref="experiencetwobox" className="experiencetwobox">
                    <ExperienceTwo twoClass={this.state.twoClass}/>
                  </div>
                  <div ref="experiencethreebox" className="experiencethreebox">
                    <ExperienceThree threeClass={this.state.threeClass}/>
                  </div>
                  
                </div>
              </div>
            <div className="column is-3">
              {/* {this.state.showRightArrow && <RightArrow/>} */}
            </div>
          </div>
      );
    }
}

export default Experience;