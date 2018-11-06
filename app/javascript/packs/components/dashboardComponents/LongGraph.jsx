//@flow
import React, { Component } from 'react';
import LineGraph from './LineGraph';

type Props = {
  main: string,
  subtext: string,
  suffix: string,
  image: string,
  consumptions: Array<number>
}

export default class LongGraph extends Component<Props> {
  render() {
    return(
      <div class="content long-bar">
        <div class="content-info">
          <LineGraph 
            main={this.props.main}
            suffix={this.props.suffix}
            subtext={this.props.subtext}
            image={this.props.image}
          />
        </div>
        <div class="content-chart">
        </div>
      </div>
    )
  }
}
