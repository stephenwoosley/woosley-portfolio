import React from 'react';
import 'bulma/css/bulma.css';

const LeftArrow = (props) => {
  return(
    <div>
        <svg className= "arrows left-arrow experience-arrows">
          <path d="M 45 75 L 0 38 L 45 0"/>
        </svg>  
    </div>
  );
}

export default LeftArrow; 