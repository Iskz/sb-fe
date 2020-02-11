import * as count from './count';
import * as types from '../actions/types';

const createReducer = handlers => (state, action) => {
    if (!handlers.hasOwnProperty(action.type)) {
        return state;
    }

    return handlers[action.type](state, action);
};

export default createReducer({
    [types.ADD_COUNT]: count.add,
    [types.REMOVE_COUNT]: count.remove
});
