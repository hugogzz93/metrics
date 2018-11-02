import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import DishForm from './dishForm';
import Dashboard from './Dashboard';

// @connect( state => ({
//   visualState: state.visualReducer
// }))
class App extends Component<Object> {
  render() {
    return (
      <Router>
        <div class="app__wrapper">
          <div class="app__links">
            <Link to={'/'}>Dashboard</Link>
            <Link to={'/health'}>Health</Link>
          </div>
          <Route exact={true} path='/' component={Dashboard}/>
          <Route path='/health' component={DishForm}/>
        </div>
      </Router>
    )
  }
}

export default App;
