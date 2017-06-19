import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { showModal: false };
  }

  render() {

    const app = this.props.app;

    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
         };
}

function mapDispatchToProps(dispatch) {
  return {
         };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);