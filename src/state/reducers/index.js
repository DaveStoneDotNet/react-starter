import { combineReducers } from 'redux';
import {routerReducer}     from 'react-router-redux';

import appReducer          from './appReducer';
import ajaxStatusReducer   from './ajaxStatusReducer';
import randomDataReducer   from './randomDataReducer';

const rootReducer = combineReducers({
                                      routing:    routerReducer, 
                                      app:        appReducer,
                                      randomData: randomDataReducer, 
                                      ajaxCount:  ajaxStatusReducer
                                    });

export default rootReducer;
