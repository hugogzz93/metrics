import { createReducer } from 'redux-act';
import * as actions from '../actions';

const DefaultState = {
  foodInput: {name: '', grams: 0},
  foods: [],
  foodOptions: [],
}

export default createReducer({
  [actions.updateFoodInput]: (state, {key, value}) => ({
    ...state,
    foodInput: {...state.foodInput, [key]: value}
  }),
  [actions.updateFoodOptions]: (state, foodOptions) => ({ ...state, foodOptions }) 
}, DefaultState)
