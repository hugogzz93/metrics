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

export default const Number = (props: Props) => (
  <div class="content content-number">
    <div class="content-main-text">
      <span class="content-prefix">
        <i class={image} aria-hidden="true"/>
      </span>
      <span class="content-accent">
        {main}
      </span>
      <span class="content-suffix">
        {suffix}
      </span>
    </div>
    <div class="content-sub-text">
      {subtext}
    </div>
  </div>
)
