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
    
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const svgBarChart = d3.select('.chart-holder')
      .append('svg')
      .attr('width', 960)
      .attr('height', 500);
    const w = +svgBarChart.attr('width') - margin.left - margin.right;
    const h = +svgBarChart.attr('height') - margin.top - margin.bottom;
    let xScale = d3.scaleBand()
                  .range([0, w])
                  .padding(0.1);
    let yScale = d3.scaleLinear()
                  .rangeRound([h, 0])
    let g = svgBarChart.append('g')
                        .attr('transform', `translate(${margin.left},${margin.top})`)
                        //.call(d3.axisBottom(xScale));


    // load data from skillsData csv
    d3.csv(skillsData, (data) => {

      console.log(data)
      xScale.domain(data.map(d => d.skills));
      yScale.domain([0, 7]);

      g.append('g')
        .attr('transform', `translate(0,${h})`)
        .call(d3.axisBottom(xScale)
          .tickSize(0)
        );

      g.append('g')
        .call(d3.axisLeft(yScale).ticks(7))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Ability Level');
  
    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
        .attr("class", "bar")
        .attr('x', d => xScale(d.skill))
        .attr('y', d => yScale(d.ability_level))
        .attr('width', xScale.bandwidth())
        .attr('height', d => h - yScale(d.ability_level));
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