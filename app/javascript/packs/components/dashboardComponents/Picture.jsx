//@flow
import React, { Component } from 'react';

type Props = {
  subtext: string,
  image: string,
}

const Picture = (props: Props) => (
  <div class="content content_picture">
    <div class="content-main-text">
      <i class={props.image} aria-hidden='true'/>
    </div>
    <div class="content-sub-text">
      {props.subtext}
    </div>
  </div>
)

export default Picture;
