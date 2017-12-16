import React, { Component } from 'react';
import ExperienceOne from './Experience/experience-one';
import ExperienceTwo from './Experience/experience-two';
import ExperienceThree from './Experience/experience-three';
import LeftArrow from './Experience/Arrows/LeftArrow';
import RightArrow from './Experience/Arrows/RightArrow';
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
      window.onscroll = () => this.handleScroll()
    }

    handleScroll() { 
      console.log("handleScroll running")
      if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 188) {
         this.setState({
           twoClass: 'hidden', oneClass: 'show', threeClass: 'hidden'
         })
       }
      else if (document.documentElement.scrollTop > 188 && document.documentElement.scrollTop < 379) {
        console.log("first break reached and twoClass is " + this.state.twoClass  + " while oneClass is " + this.state.oneClass)
         this.setState({
           twoClass: 'show', oneClass: 'hidden', threeClass: 'hidden'
         })
       }
       else if (document.documentElement.scrollTop > 380) {
          console.log("second break reached and threeClass is " + this.state.threeClass + " while twoClass is " + this.state.twoClass)
         this.setState({
           threeClass: 'show', twoClass: 'hidden', oneClass: 'hidden'
         })
       }
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
                  <ExperienceOne oneClass={this.state.oneClass}/>
                  <ExperienceTwo twoClass={this.state.twoClass}/>
                  <ExperienceThree threeClass={this.state.threeClass}/>
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