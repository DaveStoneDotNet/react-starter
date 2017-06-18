import React         from 'react';
import PropTypes     from 'prop-types';

class AppFooter extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const app = this.props.app;

        return (
            <div>
                <div id="footer" className="footer pointer">
                  <i className="fa fa-cog fa-spin gray-9 font-1-10" /> <span className="app-working-message">Working...</span>
                  <span className="float-right"><i className="fa fa-clone gray-9 font-1-10" /></span>
                </div>
            </div>
           );
  }
}

AppFooter.propTypes = {
                          app: PropTypes.object
                      };

export default AppFooter;
