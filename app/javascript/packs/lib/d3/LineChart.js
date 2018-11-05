import D3Dom from './d3Dom';
import * as d3 from 'd3';

export default class LineChart {

  generate(elem, dataset, color, curve) {
    const padding = D3Dom.getPadding(elem);
    const height = D3Dom.getHeight(elem);
    const width = D3Dom.getWidth(elem);

    let svg = d3.select(elem).append('svg')
      .attr('height', height)
      .attr('width', width);
    // let svg = elem.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
    // svg.setAttribute('height', height)
    // svg.setAttribute('width', width);

    let g = svg.append('g');

    let xScale = d3.scaleLinear()
                   .domain([0, dataset.length, 0])
                   .range([0+padding, width - padding]);

    let yScale = d3.scaleLinear()
                   .domain([d3.max(dataset), d3.min(dataset)])
                   .range([0 + padding, height - padding])


    let line = d3.line()
                 .x((d,i) => xScale(i))
                 .y(d => yScale(d))
                 .curve(curve || d3.curveLinear)

    let path = g.append('path')
			.attr('d', line(dataset))
			.attr('fill', 'none')
			.attr('stroke', color)

    let totalLength = path.node().getTotalLength();
    path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
          .duration(2000)
          .attr('stroke-dashoffset', 0)

    let circle = g.append('circle')
      .attr('cx', xScale(0))
      .attr('cy', yScale(dataset[0]))
      .attr('r', '3')
      .attr('fill', color)
      .transition()
        .duration(2000)
        .attrTween('transform', translateAlong(path))
        .attr('cy', () => null)

    function translateAlong(path) {
      const length = path.node().getTotalLength();
      return function(i) {
        return function(t) {
          const point = path.node().getPointAtLength( t * length );
          return `translate(${point.x}, ${point.y})`;
        }
      }
    }
    g.style('transform', 'translate(10%, 0px)');
  }
}
