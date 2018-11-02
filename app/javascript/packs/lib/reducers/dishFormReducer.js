//@flow
import {
  type Action,
  type Food,
  type Dish,
  type DishFormState,
} from '../types';

const DefaultState: DishFormState = {
  foodInput: {name: '', grams: 0},
  foods: []
}

const dishFormReducer = function(state: Dish = DefaultState, action: Action): DishFormState {
  switch(action.type) {
    case 'FOOD_INPUT_UPDATE':
      var key = action.payload.key;
      var value = action.payload.value;
      var foodInput = {
        ...state.foodInput,
        [key]: value
      }
      var newState = {...state, foodInput };
      return newState;
    case 'FOOD_INPUT_SAVE':
      var newState = {...state};
      var emptyFood = {name: '', grams: 0}
      newState.foods.push(state.foodInput);
      newState.foodInput = emptyFood;
      return newState;
    default:
      return state;
  }
}

export default dishFormReducer;
