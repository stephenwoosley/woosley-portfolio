import React, { Component } from 'react';
import * as d3 from 'd3';
import skillsData from '../data/skills.csv'
import 'bulma/css/bulma.css';



class Skills extends Component {

  state = {}

  componentDidMount() {
    this.loadData(); 
  }

  loadData = () => {
    
    // load data from skillsData csv
    d3.csv(skillsData, (data) => {
      
      console.log(data)
      const margin = {top: 40, right: 40, bottom: 60, left: 140};
      const svgBarChart = d3.select('.chart-holder')
        .append('svg')
        .attr('width', 960)
        .attr('height', 500);
      const w = +svgBarChart.attr('width') - margin.left - margin.right;
      const h = +svgBarChart.attr('height') - margin.top - margin.bottom;
      console.log("width is " + w + " height is " + h)
    });
  }

  render() {
    return (
      <div className="chart-holder">
        {/* <svg width='960' height='500'></svg> */}
      </div>
    );
  }
}

export default Skills;