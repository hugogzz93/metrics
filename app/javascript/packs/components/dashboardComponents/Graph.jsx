//@flow
import React, { Component } from 'react';

type Props = {
  main: string,
  subtext: string,
  suffix: string,
  image: string,
  success: bool
}

export default const Graph = (props: Props) => (
  <div class="content content-number">
    <div class="content-main-text">
      <span class="content-prefix">
        <i class={image} aria-hidden="true"/>
      </span>
      <span class="content-suffix">
        {suffix}
      </span>
    </div>
    <div class="content-sub-text">
      {subtext}
    </div>
    <div class="content-sub-graph">
    </div>
    { 
      props.success && 
      <div class="content-sub-icon">
        <i class="fa fa-check" aria-hidden='true'/>
      </div>
    }
  </div>
)


