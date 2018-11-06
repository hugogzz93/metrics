//@flow
import React, { Component } from 'react';
import * as d3 from 'd3';
import LineChart from '../../lib/d3/LineChart';

type Props = {
  main: string,
  subtext: string,
  suffix: string,
  image: string,
}

class LineGraph extends Component<Props> {
  componentDidMount() {
    const lineChart = new LineChart();
    const graphContainer = this.refs.graphContainer;
    lineChart.generate(graphContainer, [0, 4, 2, 1], 'red');
  }

  render() {
    return (
      <div class="content content-number" >
        <div class="content-main-text">
          <span class="content-prefix">
            <i class={this.props.image} aria-hidden="true"/>
          </span>
          <span class="content-suffix">
            {this.props.suffix}
          </span>
        </div>
        <div class="content-sub-text">
          {this.props.subtext}
        </div>
        <div class="content-sub-graph" ref="graphContainer">
        </div>
      </div>
    )
  }
}

export default LineGraph;
