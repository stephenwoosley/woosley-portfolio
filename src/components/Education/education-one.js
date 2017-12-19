import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import 'bulma/css/bulma.css';

const EducationOne = (props) => {
  return(
    <div className={props.oneClass}>
      <div className="education-one">
        I’m an <span className="coral-span">avid learner</span>. In addition to my formal training, I’m a <span className="coral-span">self-taught</span> guitar player, surfer, and <span className="coral-span">web developer</span>. I’m also quite interested in the fields of <span className="coral-span">data science,</span> blockchain, and machine learning. 
      </div>
      <div className="scroll-btn has-text-centered">
        <a className="scroll-button"
          onClick={() => scroll.scrollTo(800)}
        >
          <svg className="arrows">
            <path className="a1" d="M10 0 L30 12 L50 0"></path>
          </svg>
        </a>
      </div>    
    </div>
  );
}

export default EducationOne; 