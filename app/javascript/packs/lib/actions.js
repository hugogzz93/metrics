import { type Action } from './types';
import { createAction } from 'redux-act';

export const updateFoodInput = createAction('update food input', (key: string, value: number): Action => ({key, value}));
export const updateFoodOptions = createAction('update food options', (payload: Array<Object>): Action => payload);


