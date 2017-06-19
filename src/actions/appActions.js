
import MrcApi            from '../api/mockMrcApi';
import * as types        from '../constants/actionTypes';

// -----------------------------------------------------------------------------------------------------------------------
// Actions:
// -----------------------------------------------------------------------------------------------------------------------
// 
// Events happening in an app are called 'actions'. They're just plain objects describing events. They must have a 
// 'type' key. The second property contains data, is optional, and can be of any type.
// 
// Instead of mutating state directly, you specify mutations you want to happen with plain objects called 'actions'. 
// Then you write a special function called a 'reducer' to decide how every action transforms the entire application's state.
// 
// To specify how the state tree is transformed by actions, you write pure reducers.
// 
// Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to 
// return NEW state objects, instead of mutating the previous state. You can start with a single reducer, and as your app 
// grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just 
// functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for 
// common tasks such as pagination.
// 
// An action describes user intent.
// 
//      1) Store gets notified of action.
//      2) Store sends action to reducers.
//      3) Reducers accept state and return new state.
// 
// Once an action is created, you need a function which will 'handle' that action, and that's where reducers come in.
// Reducers are just functions which accept a state, an action, and returns a new state.
// 
// *ALL* reducers are called when an action is dispatched.
// 
// These ___SUCCESS actions don't fire until all the responses have been asynchronously returned by the API calls.
// 
// -----------------------------------------------------------------------------------------------------------------------

export function getLookupsSuccess(lookups) { return { type: types.GET_LOOKUPS_SUCCESS, lookups:   lookups   }; }
export function getUserSuccess(user)       { return { type: types.GET_USER_SUCCESS,    user:      user      }; }
export function updateIsInitialized(app)   { return { type: types.IS_INITIALIZED,      app:       app       }; }

export function beginAjaxCall(ajaxCount)   { return { type: types.BEGIN_AJAX_CALL,     ajaxCount: ajaxCount }; }
export function endAjaxCall(ajaxCount)     { return { type: types.END_AJAX_CALL,       ajaxCount: ajaxCount }; }
export function ajaxCallError(ajaxCount)   { return { type: types.AJAX_CALL_ERROR,     ajaxCount: ajaxCount }; }


// The parameter name of this function is arbitrary. You could name it 'monkey', 'data', 'home', whatever...
// Shown below, the parameter name I'm referring to is 'data'. I many cases, this will typically just be 
// a 'response' returned by an api.
// The property name of the return object is significant however, and represents the property name of the
// property being updated as indicated by 'initialState.js'. This name is NOT arbitrary and must be 
// referenced as 'home' since that's the property intended to be updated/replaced by the corresponding 
// reducer. For example, suppose you drunk and you typed 'monkey' instead of 'home'...
//  
//      export function getDataSuccess(data) { return { type: types.GET_DATA_SUCCESS, home:   data  }; }   CORRECT
//      export function getDataSuccess(data) { return { type: types.GET_DATA_SUCCESS, monkey: data  }; }   WRONG
//
// If you typed 'monkey' instead of 'home' then nothing would get updated and no error would occur, but 
// most importantly, 'home' would NOT be updated.

export function getDataSuccess(data)       { return { type: types.GET_DATA_SUCCESS,    home: data  }; }


// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------
// A thunk always returns a function that accepts a dispatch....
// 
//      return function (dispatch) 
// 
// ... this wrapper function will exist in every thunk.
// 
// -----------------------------------------------------------------------------------------------------------------------

let isLookupsInitialized = false;
let isUserInitialized    = false;

function isAppInitialized(dispatch) {
    const isInitialized = isLookupsInitialized && isUserInitialized;
    if (isInitialized) {
        dispatch(updateIsInitialized({ isAppInitialized: true }));
    }
}

export function getLookups() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return MrcApi.getLookups()
            .then(response => {
                dispatch(getLookupsSuccess(response));
                dispatch(updateIsInitialized({ isLookupsInitialized: true }));
                isLookupsInitialized = true;
                isAppInitialized(dispatch);
                dispatch(endAjaxCall());
            })
            .catch(error => { dispatch(endAjaxCall()); throw (error); });
    };
}

export function getUserProfile() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return MrcApi.getUserProfile()
            .then(response => {
                dispatch(getUserSuccess(response));
                dispatch(updateIsInitialized({ isUserInitialized: true }));
                isUserInitialized = true;
                isAppInitialized(dispatch);
                dispatch(endAjaxCall());
            })
            .catch(error => { dispatch(endAjaxCall()); throw (error); });
    };
}

export function getData() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return MrcApi.getData()
            .then(response => { 
                dispatch(getDataSuccess(response)); 
                dispatch(endAjaxCall());
            })
            .catch(error => { dispatch(endAjaxCall()); throw (error); });
    };
}

// -----------------------------------------------------------------------------------------------------------------------
