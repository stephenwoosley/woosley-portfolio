import React from 'react';
import 'bulma/css/bulma.css';

const ExperienceOne = (props) => {
  return(
    <div className={props.oneClass}>
      <div className="experience-one">
        I’ve worked in the <span className="coral-span">education world</span> since 2007, in both a <span className="coral-span">wide variety of roles</span>—from <span className="coral-span">instruction</span> to accounting to course design to <span className="coral-span">web development</span>—and ranging a <span className="coral-span">wide variety of age groups</span>—from kindergarteners to <span className="coral-span">university students</span> to middle-aged adults.
      </div>
      <div className="scroll-btn has-text-centered">
        <a href="#experience-two" className="scroll-button">
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 22 L60 0"></path>
          </svg>
        </a>
      </div>    
    </div>
  );
}

export default ExperienceOne;