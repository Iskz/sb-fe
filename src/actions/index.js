import * as types from './types';

export const addCount = count => ({ type: types.ADD_COUNT, payload: { count } });

export const subtractCount = count => ({ type: types.REMOVE_COUNT, payload: { count } });

