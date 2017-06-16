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
      let userDisplayName = app.user ? app.user.UserDisplayName : '';
        console.log('MONKEY NAV');
        console.log(app);

        return (
               <div>
                   <div id="navbar" className="navbar navbar-inverse navbar-fixed-top">
                     <div className="container">
                       <div className="navbar-header">
                         <IndexLink className="navbar-brand" to="/">LOGO</IndexLink>
                       </div>
                       <div className="navbar-collapse collapse">
                         <div className="float-right pad-top-10">
                           <span><i className="fa fa-info-circle gray-5 font-1-40" /> <span className="BebasNeue font-1-40 opacity-60 pad-left-5">{ userDisplayName }</span></span> <span className="gray-6">o</span>
                         </div>
                         <ul className="nav navbar-nav">
                           <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
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