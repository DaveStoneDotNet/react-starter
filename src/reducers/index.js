import { combineReducers } from 'redux';
import {routerReducer}     from 'react-router-redux';

import appReducer          from './appReducer';
import ajaxStatusReducer   from './ajaxStatusReducer';

const rootReducer = combineReducers({
                                      routing:             routerReducer, 
                                      app:                 appReducer,
                                      ajaxCallsInProgress: ajaxStatusReducer
                                    });

export default rootReducer;
