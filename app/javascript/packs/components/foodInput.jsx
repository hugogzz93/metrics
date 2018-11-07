//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  onFoodInputUpdate
} from '../lib/actions';

import FoodDb from '../lib/FoodDb';

@connect(state => ({
  foodState: state.dishFormReducer.foodInput
}))
class FoodInput extends Component<Object> {
  onGramsChange(e: Object) {
    const grams = e.target.value;
    this.props.dispatch(onFoodInputUpdate('grams', grams));
  }

  onFoodNameChange(e: Object) {
    const name = e.target.value;
    this.props.dispatch(onFoodInputUpdate('name', name));
    FoodDb.search()
  }

  render() {
    const foodNames = ['avocado', 'tomato'];
    const foodOptions = foodNames.map((name, index) => (
      <option key={`${index}-${name}`}
        value={index}>
        {name}
      </option>
    ))


    return (
      <div class="in__food-input">
        <div class="form_control">
          <select name="food-name" onChange={this.onFoodNameChange.bind(this)}>
            { foodOptions }
          </select>
        </div>
        <div class="form_control">
          <label>Grams:</label>
          <input type="number" 
            name="food-qty" 
            value={this.props.foodState.grams} 
            onChange={this.onGramsChange.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default FoodInput;
