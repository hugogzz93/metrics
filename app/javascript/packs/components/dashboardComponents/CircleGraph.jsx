//@flow
import React, { Component } from 'react';
import CircleChart from '../../lib/d3/CircleChart';

type Props = {
  main: string,
  subtext: string,
  col: number
}

class CircleGraph extends Component<Props> {
  componentDidMount() {
    const circleGraph = new CircleChart();
    const graphContainer = this.refs.graphContainer;
    circleGraph.generate(graphContainer, 0.5, 'red')
  }

  render() {
    return (
      <div class="content content-circle">
        <div class="content-main-graph" ref="graphContainer">
        </div>
        <div class="content-main-text">
          <span class="content-accent">
            {this.props.main}
          </span>
        </div>
        <div class="content-sub-text">
          {this.props.subtext}
        </div>
      </div>
    )
  }
}

export default CircleGraph;
