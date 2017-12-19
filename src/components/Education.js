import React, { Component } from 'react';
import { Events } from 'react-scroll';
import EducationOne from './Education/education-one';
import EducationTwo from './Education/education-two';
import EducationThree from './Education/education-three';
import sr from '../scrollreveal.js'
import 'bulma/css/bulma.css';


class Education extends Component {
  
    state = {
      oneClass: 'show',
      twoClass: 'hidden',
      threeClass: 'hidden',
      showLeftArrow: true,
      showRightArrow: true,
    }
    componentDidMount() {
    
      const configTwo = {
        origin: 'left',
        duration: 1000,
        delay: 350,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
      const configThree = {
        origin: 'right',
        duration: 1000,
        delay: 350,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }

      Events.scrollEvent.register('begin', function() {
        console.log("begin", arguments);
      });
  
      Events.scrollEvent.register('end', function() {
        console.log("end", arguments);
      });
      
      // sr.reveal(this.refs.educationonebox, configOne)
      sr.reveal(this.refs.educationtwobox, configTwo)
      sr.reveal(this.refs.educationthreebox, configThree)
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

     componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }

    render() {
      return(
          <div className="columns">
            <div className="column is-1">
            </div>
              <div className="column is-8">
                <div className="education-content">
                  <div ref="educationonebox" className="educationonebox">
                      <EducationOne 
                        oneClass={this.state.oneClass}
                      />
                    </div>
                  <div ref="educationtwobox" className="educationtwobox" name="education-two">
                      <EducationTwo 
                        twoClass={this.state.twoClass}
                      />
                  </div>
                  <div ref="educationthreebox" className="educationthreebox">
                    <EducationThree 
                      threeClass={this.state.threeClass}
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

export default Education;