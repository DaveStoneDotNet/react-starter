import React         from 'react';
import PropTypes     from 'prop-types';
import { connect }   from 'react-redux';

import Splash        from './common/Splash';
import NavHeader     from './common/NavHeader';
import AppFooter     from './common/AppFooter';

// This is a class-based component because the current version of hot reloading won't hot reload a stateless component at the top-level.

class App extends React.Component {
  render() {

    const app = this.props.app;

    return (
      <div>
        <Splash    app={app} />
        <NavHeader app={app} />
        <div className="container body-content">
          {
              React.Children.map(this.props.children, function(child) {
                  return React.cloneElement(child, { app: app });
              })
          }                        
        </div>
        <AppFooter />
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
