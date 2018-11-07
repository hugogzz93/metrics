//@flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodInput from './FoodInput';

@connect(state => ({
  formState: state.dishFormReducer
}))
class DishForm extends Component<Object> {
  render() {
    return (
      <form class="food__form">
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

