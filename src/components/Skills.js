import React, { Component } from 'react';
import * as d3 from 'd3';
import skillsData from '../data/skills.csv'
import 'bulma/css/bulma.css';



class Skills extends Component {

  state = {}

  componentDidMount() {
    this.loadData(); 
  }

  displayLevel(num) {
    switch(num) {
      case 1:
        return ""
    }
  }

  loadData = () => {
    
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const svgBarChart = d3.select('.chart-holder')
      .append('svg')
      .attr('width', 960)
      .attr('height', 500);
    const w = +svgBarChart.attr('width') - margin.left - margin.right;
    const h = +svgBarChart.attr('height') - margin.top - margin.bottom;
    
    let g = svgBarChart.append('g')
                        .attr('transform', `translate(${margin.left},${margin.top})`)
                        //.call(d3.axisBottom(xScale));


    // load data from skillsData csv
    d3.csv(skillsData, (data) => {

      let xScale = d3.scaleBand()
                  .padding(0.1)
                  .domain(data.map(d => d.skills))
                  .rangeRound([0, w]);
      let yScale = d3.scaleLinear()
                  .domain([0, 6])
                  .rangeRound([h, 0]);
      

      g.append('g')
        .attr('transform', `translate(0,${h})`)
        .attr("class", "axisLighter")
        .call(d3.axisBottom(xScale)
          //.tickSize(0)
          .tickPadding(7.5)
        )
        .attr('margintop', '5px')
        .attr('font-family', 'Lato,Helvetica,Arial,sans-serif')
        .attr('font-size', '14px')
        .attr('font-weight', 900)
  
    g.selectAll('rect')
      .data(data)
      .enter().append('rect')
        .attr("class", "bar")
        .attr('x', function(d) { return xScale(d.skills); })
        .attr('y', d => yScale(d.ability_level))
        .attr('width', xScale.bandwidth())
        .attr('height', d => h - yScale(d.ability_level))
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