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
      case '2':
        return "Working Knowledge"
        break;
      case '3':
        return "Some Experience"
        break;
      case '4':
        return "Proficient"
        break;
      case '5':
        return "Very Proficient"
        break;
      default:
        break;
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
          .tickSize(0)
          .tickPadding(7.5)
        )
        .attr('margintop', '5px')
        .attr('font-family', 'Lato,Helvetica,Arial,sans-serif')
        .attr('font-size', '14px')
        .attr('font-weight', 900)

    let tooltip = d3.select('body').append('div').attr('class', 'toolTip');
  
    let bars = g.selectAll('rect')
      .data(data)
      .enter().append('rect')
        .attr("class", "bar")
        .attr('x', function(d) { return xScale(d.skills); })
        .attr('y', d => yScale(0))
        .attr('width', xScale.bandwidth())
        .attr('height', 0)
        .attr("rx", 10)
        .attr("ry", 10)
        .on('mousemove', d => {
          tooltip
            .style('left', d3.event.pageX - 50 + 'px')
            .style('top', d3.event.pageY - 70 + 'px')
            .style('display', 'inline-block')
            .html(`${(d.skills)}<br>${(this.displayLevel(d.ability_level))}`);
        })
        .on('mouseout', d => { tooltip.style('display', 'none');});
        
    bars.transition()
        .delay(700)
        .attr('y', d => yScale(d.ability_level))
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