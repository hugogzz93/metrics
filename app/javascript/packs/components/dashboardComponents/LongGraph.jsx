//@flow
import React, { Component } from 'react';
import Graph from './graph';

type Props = {
  main: string,
  subtext: string,
  suffix: string,
  image: string,
  success: bool
}

export default const LongGraph = (props: Props) => (
  <div class="content long-bar">
    <div class="content-info">
      <Graph {...props}/>
    </div>
    <div class="content-chart">
    </div>
  </div>
