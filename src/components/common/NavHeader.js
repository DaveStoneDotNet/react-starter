import React         from 'react';
import PropTypes     from 'prop-types';
import { Link }      from 'react-router';
import { IndexLink } from 'react-router';

class NavHeader extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const app = this.props.app;

        return (
                <div className="navbar-root">
                    <div id="navbar" className="navbar navbar-inverse navbar-fixed-top">
                      <div className="container">
                        <div className="navbar-header">
                          <IndexLink className="navbar-brand" to="/">MRC</IndexLink>
                        </div>
                        <div className="navbar-collapse collapse">
                          <div className="float-right pad-top-15 pointer">
                            <span className="float-right"><i className="fa fa-user-circle gray-5 font-1-10" /> <span style={{marginTop: "-1px"}} className="float-right Lato font-1-00 opacity-60 pad-left-5 lowercase">{ app.user.UserDisplayName }</span></span>
                          </div>
                          <ul className="nav navbar-nav">
                            <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
                            <li><Link activeClassName="active" to="/data">Data</Link></li>
                            <li><Link activeClassName="active" to="/about">About</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
               );
    }
}

NavHeader.propTypes = {
                          app: PropTypes.object
                      };

export default NavHeader;