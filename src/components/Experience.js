import React from 'react';
import 'bulma/css/bulma.css';

const Experience = (props) => {
  return(
    <div>
      <section className="hero is-medium hero-experience">
        <div className="hero-body">
          <div className="container">
            <h3 className="title experience-content">
              <div className="experience-one">
                I’ve worked in the <span className="coral-span">education world</span> since 2007, in both a <span className="coral-span">wide variety of roles</span>—from <span className="coral-span">instruction</span> to accounting to course design to <span className="coral-span">web development</span>—and ranging a <span className="coral-span">wide variety of age groups</span>—from kindergarteners to <span className="coral-span">university students</span> to middle-aged adults.
              </div>
              <div className="scroll-btn">
                <a href="#experience-two" className="scroll-button">More...</a>
              </div>    
              <div className="experience-two" id="experience-two">
                In 2014 I began <span className="coral-span">moonlighting</span> as a developer-in-training, and began working for a string of <span className="coral-span">small startups</span>. I even <span className="coral-span">co-founded a coding bootcamp</span> in 2016.
              </div>
              <div className="scroll-btn">
                <a href="#experience-three" className="scroll-button">More...</a>
              </div>
              <div className="experience-three" id="experience-three">
                These days I am the <span className="coral-span">lead teaching assistant</span> for the <span className="coral-span">Coding Bootcamp</span> at UNC Chapel Hill, and do <span className="coral-span">instructional design technology</span> for UNC’s <span className="coral-span">Kenan-Flagler Business School</span>. I can't wait to see what's next.
              </div>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;