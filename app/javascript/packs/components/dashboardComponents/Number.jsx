//@flow
import React, { Component } from 'react';
import Graph from './Graph';

type Props = {
  main: string,
  subtext: string,
  suffix: string,
  image: string,
}

const Number = (props: Props) => (
  <div class="content content-number">
    <div class="content-main-text">
      <span class="content-prefix">
        <i class={props.image} aria-hidden="true"/>
      </span>
      <span class="content-accent">
        {props.main}
      </span>
      <span class="content-suffix">
        {props.suffix}
      </span>
    </div>
    <div class="content-sub-text">
      {props.subtext}
    </div>
  </div>
)
export default Number;
