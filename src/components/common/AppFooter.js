import React     from 'react';
import PropTypes from 'prop-types';

class AppFooter extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const app = this.props.app;

        return (
            <div>
                <div id="footer" className={app.ajaxCount <= 0 ? "footer non-working-footer" : "footer working-footer"}>
                    <span className="float-right"><i className="fa fa-clone gray-9 font-1-10" /></span>
                    <div className={app.ajaxCount <= 0 ? "hide" : ""}>
                        <i className="fa fa-cog fa-spin gray-9 font-1-10" /> <span className="app-working-message">{app.ajaxMessage}</span>
                    </div>
                </div>
            </div>
           );
  }
}

AppFooter.propTypes = {
                          app: PropTypes.object.isRequired
                      };

export default AppFooter;
