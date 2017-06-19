
import * as types   from '../actions/actionTypes';
import initialState from './initialState';

// - The whole state of an app is stored in an object tree inside a single store.
// - The only way to change the state tree is to emit an action, an object describing what happened.
// - To specify how actions transform the state tree, you write pure reducers.
// 
// The 'state' parameter passed in will be the 'app' property defined in the combined reducers of 'index.js'...
//
//          const rootReducer = combineReducers({
//                                                 ...
//                                                 app: appReducer
//                                                 ...
//                                             });
// 
// That is, this reducer is specifically managing that 'app' property.
//
// 'app' is currently shaped as follows:
//
//          app: {
//                   user:                 {},
//                   lookups:              {},
//                   isUserInitialized:    false,
//                   isLookupsInitialized: false,
//                   isAppInitialized:     false,
//                   ajaxCount:            0
//               }

const actionTypeEndsInSuccess = (type) => {
    return type.substring(type.length - 8) === '_SUCCESS';
};

export default function appReducer(state = initialState.app, action) {

    let new_state;

    switch (action.type) {

        case types.IS_INITIALIZED:
            new_state = Object.assign({}, state, action.app);
            return new_state;

        case types.GET_USER_SUCCESS:
            new_state = Object.assign({}, state, { user: action.user });
            return new_state;

        case types.GET_LOOKUPS_SUCCESS:
            new_state = Object.assign({}, state, { lookups: action.lookups });
            return new_state;

        case types.GET_DATA_SUCCESS:
            new_state = Object.assign({}, state, { home: action.home });
            return new_state;

        case types.BEGIN_AJAX_CALL:
            new_state = Object.assign({}, state, { ajaxCount: state.ajaxCount + 1 });
            return new_state;

        case types.END_AJAX_CALL:
            new_state = Object.assign({}, state, { ajaxCount: state.ajaxCount - 1 });
            return new_state;

        case types.AJAX_CALL_ERROR:
            new_state = Object.assign({}, state, { ajaxCount: state.ajaxCount - 1 });
            return new_state;

        default:
            return state;
    }
}
