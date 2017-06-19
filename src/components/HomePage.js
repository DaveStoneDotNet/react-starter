import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Button }             from 'react-bootstrap';
import { Modal }              from 'react-bootstrap';

import * as appActions        from '../state/actions/appActions';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { showModal: false };
  }

  render() {

    const app = this.props.app;

    let openModel = () => {
      this.setState({ show: true });
    };

    let closeModal = () => {
      this.setState({ show: false });
    };

    let getData = () => {
      this.props.actions.getData()
                        .then(() => {
                        })
                        .catch((error) => { 
                        });
    };

    return (
      <div>

        <Button bsStyle="info" onClick={() => openModel()}>Modal</Button> &nbsp;
        <Button bsStyle="primary" onClick={() => getData()}>Data</Button>

        <div>
          INFO: {app.home.info} - {app.ajaxCount} - {app.isInitialized} - {app.user.IsAuthenticated.toString()}
        </div>

        <div />



        <Modal show={this.state.show} onHide={closeModal} container={this}>
          <Modal.Body>
            <div className="pad-20">
              <h1>Modal</h1>
              <div>
                Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
              </div>
              <div className="pad-top-40 align-right">
                <Button bsStyle="info" onClick={closeModal}>Close</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
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
            actions: bindActionCreators(appActions, dispatch)
         };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);