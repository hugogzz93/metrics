//@flow
import { combineReducers } from 'redux';
import dishFormReducer from './reducers/dishFormReducer';
import visualReducer from './reducers/visualReducer';

export default combineReducers({
  dishFormReducer,
  visualReducer
});
