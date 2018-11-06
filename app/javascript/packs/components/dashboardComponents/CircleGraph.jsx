//@flow
import React, { Component } from 'react';
import CircleChart from '../../lib/d3/CircleChart';
import Colors from './colors';

type Props = {
  main: string,
  subtext: string,
  col: number
}

class CircleGraph extends Component<Props> {
  health(percent: number) {
    if(percent > 0.4) {
      if(percent > 0.8)
        return Colors.good;
      else 
        return Colors.warning;
    } else
      return Colors.bad;
  }
  componentDidMount() {
    const circleGraph = new CircleChart();
    const graphContainer = this.refs.graphContainer;
    const percent = 0.85
    circleGraph.generate(graphContainer, percent, this.health(percent))
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
