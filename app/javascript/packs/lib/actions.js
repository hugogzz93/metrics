//@flow
import {
  type Action
} from './types';

export function onFoodInputUpdate(key: string, value: number | string ): Action {
  return {
    type: 'FOOD_INPUT_UPDATE',
    payload: {key, value}
  }
}

export function onFoodOptionsUpdate(payload: Array<Object> ): Action {
  return {
    type: 'FOOD_OPTION_UPDATE',
    payload
  }
}
