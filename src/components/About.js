import React, { Component } from 'react';
import 'bulma/css/bulma.css';

const About = (props) => {
  return(
    <div>
      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title about-content">
              Hi, I'm a <span className="coral-span">developer</span> and <span className="coral-span">educator</span> from Chapel Hill. I love <span className="coral-span">building web experiences</span> and <span className="coral-span">sharing knowledge</span> with others. When I'm not coding or teaching, I hang out with my <span className="coral-span">awesome wife</span> Kelly, <span className="coral-span">amazing daughter</span> Gabriella, and <span className="coral-span">rascally dog</span> Niko.
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;