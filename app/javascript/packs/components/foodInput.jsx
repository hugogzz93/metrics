//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce, debounceEvent }  from '../lib/debounce';
import {
  onFoodInputUpdate,
  onFoodOptionsUpdate
} from '../lib/actions';

import FoodDb from '../lib/FoodDb';

@connect(state => ({
  foodState: state.dishFormReducer.foodInput,
  foodOptions: state.dishFormReducer.foodOptions
}))
class FoodInput extends Component<Object> {
  FoodDb: FoodDb
  constructor(props: Object) {
    super(props);
    this.FoodDb = new FoodDb();
  }
  onGramsChange(e: Object) {
    const grams = e.target.value;
    this.props.dispatch(onFoodInputUpdate('grams', grams));
  }

  onFoodNameChange(e: Object) {
    const name = e.target.value;
    this.props.dispatch(onFoodInputUpdate('name', name));
    this.FoodDb.search(name).then(foodOptions => {
      this.props.dispatch(onFoodOptionsUpdate(foodOptions));
    })
  }

  render() {
    const foodOptions = this.props.foodOptions.map((option, index) => (
      <div class="in__food-option" key={ option.api_id }>
        {option.name}
      </div>
    ))


    return (
      <div class="in__food-input">
        <div class="form_control">
          <input type='text'
            name='text-name'
            onChange={ debounceEvent.apply(this, [this.onFoodNameChange.bind(this), 250])}
          />
          { foodOptions }
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
