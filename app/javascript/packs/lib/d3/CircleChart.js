import D3Dom from './d3Dom';
import * as d3 from 'd3';

export default class CircleChart {
  generate(elem, percent = 0, color) {
    const height = D3Dom.getHeight(elem);
    const width = D3Dom.getWidth(elem);
    const radius = height > width ? width/2 : height/2;

    let svg = d3.select(elem).append('svg')
      .attr('height', height)
      .attr('width', width);

    let g = svg.append('g')
      .attr('height', height)
      .attr('width', width);

    const xFn = (x, r, theta) => x + r * Math.sin(theta)
    const yFn = (y, r, theta) => y + r * (1 - Math.cos(theta))
    const c = (st, r, fn) => (theta) => fn(st, r, theta)
    const xCoor = c(0, radius, xFn);
    const yCoor = c(0, radius, yFn);

    const arc = d3.arc()
            .innerRadius(radius - 1.5)
            .outerRadius(radius)
            .startAngle(0)

    const tau = 2 * Math.PI

    const foreground = g.append('path')
                        .datum({endAngle: 0})
                        .attr('d', arc)
                        .style('fill', color)
                        .style('transform', `translate(${width/2}px, ${height/2}px)`)

    const arcTween = function(newAngle) {
      return function(d) {
        const interpolate = d3.interpolate(d.endAngle, newAngle);
        return function(interpolate) {
          return function(t) {
            d.endAngle = interpolate(t);
            return arc(d)
          }
        }(interpolate)
      }
    }

    const ballTween = function(percent, fn) {
      return function(d) {
        const interpolate = d3.interpolate(d.percent, percent * tau);
        return function(interpolate) {
          return function(t) {
            d.percent = interpolate(t)
            return fn(d.percent)
          }
        }(interpolate)
      }
    }

    if(percent == 0)
      var newText = '0%'
    else if(percent > 10) {
      var newText = '999$';
      d3.select(elem).append('i').attr('class', 'fa fa-check complete-circle').attr('aria-hidden', 'true')
    } else if(percent > 1) {
      var newText = (percent*100).toFixed(0) + '%'
      elem.append('i').attr('class', 'fa fa-check complete-circle').attr('aria-hidden', 'true')
    } else {
      var newText = (percent*100).toFixed(2) + '%'
    }

    let text = g.append('text')
                .attr('x', width/2)
                .attr('y', height/2)
                .text(newText)
                .attr('text-anchor', 'middle')
                .attr('dy', '0.25em')
                .attr('font-size', '1.6em')
                .attr('fill', 'white')
                .attr('fill-opacity', '0.7')

    if(percent > 1)
      percent = 1;

    const circle = g.append('circle').datum({percent: 0})
       .attr('cx', xFn(0, radius, 0))
       .attr('cy', yFn(0, radius, 0))
       .attr('r', '4')
       .style('transform', 'translate(' + width/2 + 'px, 0px)')
       .attr('fill', color)

    const duration = 500 + 2000 * Math.random()
    foreground.transition()
              .duration(duration)
              .attrTween('d', arcTween(percent*tau))

    circle.transition()
       .duration(duration)
       .attrTween('cx', ballTween(percent, xCoor))
       .attrTween('cy', ballTween(percent, yCoor))
  }
}
