import React from 'react';
import 'bulma/css/bulma.css';

const About = (props) => {
  return(
    <div>
      <div className="columns">
        <div className="column is-1"></div>
          <div className="column is-8">
           
            <h1 className="title about-content">
              Hi, I'm a <span className="coral-span">developer</span> and <span className="coral-span">educator</span> from Chapel Hill. I love <span className="coral-span">building web experiences</span> and <span className="coral-span">sharing knowledge</span> with others. When I'm not coding or teaching, I hang out with my <span className="coral-span">gorgeous wife</span> Kelly, <span className="coral-span">amazing daughter</span> Gabriella, and <span className="coral-span">rascally dog</span> Niko.
            </h1>
          </div>
        <div className="column is-3"></div>
      </div>
    </div>
  );
}

export default About;