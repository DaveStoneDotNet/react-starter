
import MrcApi            from '../../api/mockMrcApi';
import * as types        from './actionTypes';

// -----------------------------------------------------------------------------------------------------------------------
// Actions:
// -----------------------------------------------------------------------------------------------------------------------

export function getRandomTableDataSuccess(data) { return { type: types.GET_RANDOM_TABLE_DATA_SUCCESS, randomTableData: data  }; }

// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------

export function getRandomTableData(pageSize, page, sorted, filtered) {
    console.log('A-001')
    return function (dispatch) {
        console.log('A-002')
        return MrcApi.getRandomTableData(pageSize, page, sorted, filtered)
            .then(response => { 
                console.log('A-003')
                console.log(response);
                dispatch(getRandomTableDataSuccess(response)); 
            })
            .catch(error => { 
                console.log('A-004')
                throw (error); 
            });
    };
}

// -----------------------------------------------------------------------------------------------------------------------
