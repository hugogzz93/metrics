import React, { Component } from 'react';
import { connect } from 'react-redux';
import DishForm from './dishForm';

@connect( state => ({
  visualState: state.visualReducer
}))
class App extends Component<Object> {
  render() {
    return (
      <DishForm/>
    )
  }
}

export default App;
