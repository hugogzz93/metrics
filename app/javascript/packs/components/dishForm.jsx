//@flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodInput from './foodInput';

@connect(state => ({
  formState: state.dishFormReducer
}))
class DishForm extends Component<Object> {
  render() {
    return (
      <form class="in__dish">
        <button>
          New Dish
        </button>
        {/* Consumed Foods */}
        <FoodInput/>
      </form>
    )
  }

}

export default DishForm;

