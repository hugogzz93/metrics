//@flow
import React, { Component } from 'react';

type Props = {
  col: number,
  theme: string,
  children: Object
}

const Widget = (props: Props) => (
  <div class={ `widget col-${props.col} ${props.theme}` }>
    {props.children}
  </div>
)

export default Widget;
