import React from 'react';
import 'bulma/css/bulma.css';

const ExperienceTwo = (props) => {
  return(
    <div>
      <div className="experience-two" id="experience-two">
        In 2014 I began <span className="coral-span">moonlighting</span> as a developer-in-training, and began working for a string of <span className="coral-span">small startups</span>. I even <span className="coral-span">co-founded a coding bootcamp</span> in 2016.
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

export default ExperienceTwo;