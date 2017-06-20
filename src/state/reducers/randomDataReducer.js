
import * as types   from '../actions/actionTypes';
import initialState from './initialState';

export default function randomDataReducer(state = initialState.randomData, action) {

    let new_state;

    switch (action.type) {

        case types.GET_RANDOM_TABLE_DATA_SUCCESS:
            new_state = Object.assign({}, state, { randomTableData: action.randomTableData });
            return new_state;

        default:
            return state;
    }
}
