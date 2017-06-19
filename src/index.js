/* eslint-disable import/default */

import React                    from 'react';
import { render }               from 'react-dom';
import { browserHistory }       from 'react-router';
import { AppContainer }         from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';

import Root                     from './components/Root';
import configureStore           from './state/store/configureStore';
import * as appActions          from './state/actions/appActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.scss';

require('./favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();

store.dispatch(appActions.getUserProfile());
store.dispatch(appActions.getLookups());

// store.subscribe(() =>
//   console.log(store.getState())
// );

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
