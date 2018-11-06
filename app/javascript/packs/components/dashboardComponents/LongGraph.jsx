//@flow
import React, { Component } from 'react';
import LineGraph from './LineGraph';

type Props = {
  main: string,
  subtext: string,
  suffix: string,
  image: string,
}

const LongGraph = (props: Props) => (
  <div class="content long-bar">
    <div class="content-info">
      <LineGraph {...props}/>
    </div>
    <div class="content-chart">
    </div>
  </div>
)
export default LongGraph;
