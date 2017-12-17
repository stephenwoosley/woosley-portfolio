import React, { Component } from 'react';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'
import ExperienceOne from './Experience/experience-one';
import ExperienceTwo from './Experience/experience-two';
import ExperienceThree from './Experience/experience-three';
import sr from '../scrollreveal.js'
import 'bulma/css/bulma.css';

let box1 = 'shouldnt be this';
let box2 = 'shouldnt be this';
let box3 = 'shouldnt be this';

class Experience extends Component {
  
    state = {
      oneClass: 'show',
      twoClass: 'hidden',
      threeClass: 'hidden',
      showLeftArrow: true,
      showRightArrow: true,
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

     clickArrow(arrowNum) {
       arrowNum === 1
       ? document.querySelector('.experiencetwobox').scrollIntoView({ behavior: 'smooth' })
       : arrowNum === 2
          ? document.querySelector('.experienceonebox').scrollIntoView({ behavior: 'smooth' })
          : arrowNum === 3
            ? document.querySelector('.experiencethreebox').scrollIntoView({ behavior: 'smooth' })
            : document.querySelector('.experiencetwobox').scrollIntoView({ behavior: 'smooth' })
     }

    render() {
      return(
          <div className="columns">
            <div className="column is-1">
            </div>
              <div className="column is-8">
                <div className="experience-content">
                  <div ref="experienceonebox" className="experienceonebox">
                    <div ref={node => {box1 = node}}>
                      <ExperienceOne 
                        oneClass={this.state.oneClass}
                        box2={box2}
                      />
                    </div>
                  </div>
                  <div ref="experiencetwobox" className="experiencetwobox">
                    <div ref={node => {box2 = node}}>
                      <ExperienceTwo 
                        twoClass={this.state.twoClass}
                        box2={box2}
                      />
                    </div>
                  </div>
                  <div ref="experiencethreebox" className="experiencethreebox">
                    <ExperienceThree 
                      threeClass={this.state.threeClass}
                      clickArrow = {box3}
                    />
                  </div>
                  
                </div>
              </div>
            <div className="column is-3">
            </div>
          </div>
      );
    }
}

export default Experience;