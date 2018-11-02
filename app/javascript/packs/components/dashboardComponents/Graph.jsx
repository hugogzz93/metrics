//@flow
import React from 'react';

type Props = {
  main: string,
  subtext: string,
  suffix: string,
  image: string,
}

const Graph = (props: Props) => (
  <div class="content content-number">
    <div class="content-main-text">
      <span class="content-prefix">
        <i class={props.image} aria-hidden="true"/>
      </span>
      <span class="content-suffix">
        {props.suffix}
      </span>
    </div>
    <div class="content-sub-text">
      {props.subtext}
    </div>
    <div class="content-sub-graph">
    </div>
    { 
      <div class="content-sub-icon">
        <i class="fa fa-check" aria-hidden='true'/>
      </div>
    }
  </div>
)

export default Graph;
