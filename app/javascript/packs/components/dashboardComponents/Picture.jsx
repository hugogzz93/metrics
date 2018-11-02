//@flow
import React, { Component } from 'react';

type Props = {
  subtext: string,
  image: string,
  success: bool
}

export default const Picture = (props: Props) => (
  <div class="content content_picture">
    <div class="content-main-text">
      <i class={image} aria-hidden='true'/>
    </div>
    <div class="content-sub-text">
      {subtext}
    </div>
  </div>
)
