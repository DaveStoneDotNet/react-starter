import * as types from '../constants/actionTypes';

// -----------------------------------------------------------------------------------------------------------------------
// Actions:
// -----------------------------------------------------------------------------------------------------------------------

export function beginAjaxCall(ajaxCount) { return { type: types.BEGIN_AJAX_CALL, ajaxCount: ajaxCount }; }
export function ajaxCallError(ajaxCount) { return { type: types.AJAX_CALL_ERROR, ajaxCount: ajaxCount }; }

// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------

