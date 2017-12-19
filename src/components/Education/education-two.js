import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import 'bulma/css/bulma.css';

const ExperienceTwo = (props) => {
  return(
    
    <div className={props.twoClass}>
      <div className="scroll-btn has-text-centered">
        <a href="#experience-two" 
          className="scroll-button"
          onClick={() => scroll.scrollTo(0)}
        >
          <svg className="arrows">
            <path className="a1" d="M10 25 L30 12 L50 25"></path>
          </svg>
        </a>
      </div>
      <div className="experience-two" id="experience-two">
        I completed my BS in Christian Ministries & Music from <span className="coral-span">Arizona Christian University</span> in 2008.
      </div>
      <div className="scroll-btn has-text-centered">
        <a href="#experience-two" 
          className="scroll-button"
          onClick={() => scroll.scrollTo(1600)}
        >
          <svg className="arrows">
            <path className="a1" d="M10 0 L30 12 L50 0"></path>
          </svg>
        </a>
      </div>   
    </div>
  );
}

export default ExperienceTwo;