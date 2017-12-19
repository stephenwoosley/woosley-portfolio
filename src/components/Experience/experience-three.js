import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import 'bulma/css/bulma.css';

const ExperienceThree = (props) => {
  return(
    <div className={props.threeClass}>
      <div className="scroll-btn has-text-centered">
        <a href="#experience-two" 
          className="scroll-button"
          onClick={() => scroll.scrollTo(800)}
        >
          <svg className="arrows">
            <path className="a1" d="M10 25 L30 12 L50 25"></path>
          </svg>
        </a>
      </div>
      <div className="experience-three" id="experience-three">
        These days I am the <span className="coral-span">lead teaching assistant</span> for the <span className="coral-span">Coding Bootcamp</span> at UNC Chapel Hill, and do <span className="coral-span">instructional design technology</span> for UNC’s <span className="coral-span">Kenan-Flagler Business School</span>. I can't wait to see what's next.
      </div>
    </div>
  );
}

export default ExperienceThree;