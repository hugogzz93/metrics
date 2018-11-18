import { type Action } from './types';
import { createAction } from 'redux-act';

export const updateFoodInput = createAction('update food input', (key, value) => ({key, value}));
export const updateFoodOptions = createAction('update food options');


