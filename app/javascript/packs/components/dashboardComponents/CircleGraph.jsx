//@flow
import React, { Component } from 'react';

type Props = {
  main: string,
  subtext: string
}

const CircleGraph = (props: Props) => (
  <div class="content content-circle">
    <div class="content-main-graph">
    </div>
    <div class="content-main-text">
      <span class="content-accent">
        {main}
      </span>
    </div>
    <div class="content-sub-text">
      {subtext}
    </div>
  </div>
)


