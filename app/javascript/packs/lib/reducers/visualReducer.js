//@flow

import {
  type Action
} from '../types';

type VisualState = {
  dishFormVisible: bool,
  dashboardVisible: bool
}

const DefaultState: VisualState = {
  dishFormVisible: false,
  dashboardVisible: true
}

const VisualReducer = function(state: VisualState = DefaultState, action: Action): VisualState {
  switch(action.type) {
    case 'BRING_DISH_FORM_FRONT':
      return {
        dishFormVisible: true,
        dashboardVisible: false
      }
    case 'BRING_DASHBOARD_FRONT':
      return {
        dishFormVisible: false,
        dashboardVisible: true
      }
    default:
      return state;
  }
}

export default VisualReducer;
