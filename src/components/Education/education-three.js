import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import 'bulma/css/bulma.css';

const EducationThree = (props) => {
  return(
    <div className={props.threeClass}>
      <div className="scroll-btn has-text-centered">
        <a href="#education-two" 
          className="scroll-button"
          onClick={() => scroll.scrollTo(800)}
        >
          <svg className="arrows">
            <path className="a1" d="M10 25 L30 12 L50 25"></path>
          </svg>
        </a>
      </div>
      <div className="education-three" id="education-three">
        In 2015, I completed an undergraduate certificate in <span className="coral-span">Application Development</span> from Liberty University to bolster my understanding of software development. The eight courses I completed were all Computer Science core courses.
      </div>
    </div>
  );
}

export default EducationThree;