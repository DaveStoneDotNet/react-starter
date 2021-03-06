import React         from 'react';
import PropTypes     from 'prop-types';
import { Component } from 'react';
import { Provider }  from 'react-redux';
import { Router }    from 'react-router';

import routes        from '../routes';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
                   store:   PropTypes.object.isRequired,
                   history: PropTypes.object.isRequired
                 };
