import React         from 'react';
import PropTypes     from 'prop-types';
import { Link }      from 'react-router';
import { IndexLink } from 'react-router';
import { connect }   from 'react-redux';

import NavHeader     from './common/NavHeader';

// This is a class-based component because the current version of hot reloading won't hot reload a stateless component at the top-level.

class App extends React.Component {
  render() {
      console.log('MONKEY APP');
      console.log(this.props);
    return (
      <div>
        <NavHeader app={this.props} />
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
                  children: PropTypes.element, 
                  app:      PropTypes.object
                };

const mapStateToProps = (state, ownProps) => ({
    app: state.app
});

export default connect(mapStateToProps)(App);
