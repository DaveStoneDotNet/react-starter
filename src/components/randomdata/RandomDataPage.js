import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Button }             from 'react-bootstrap';
import { Modal }              from 'react-bootstrap';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell } from 'recharts';

import toastr                 from 'toastr';

import * as appActions        from '../../state/actions/appActions';

class RandomDataPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { 
                   showModal: false, 
                   isSaving:    false
                 };
    toastr.options.positionClass = 'toast-bottom-right';
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
      this.setState({ isSaving: true });
      this.props.actions.getData()
                        .then(() => {
                          toastr.success('Loaded some random data', 'SUCCESS');
                        })
                        .catch((error) => { 
                          toastr.success('error');
                        })
                        .then(() => {
                          this.setState({ isSaving: false });
                        });
    };

    const lineData = [
                       {xname: ' ', uv: 4000, pv: 2400, amt: 2400},
                       {xname: ' ', uv: 3000, pv: 1398, amt: 2210},
                       {xname: ' ', uv: 2000, pv: 9800, amt: 2290},
                       {xname: ' ', uv: 2780, pv: 3908, amt: 2000},
                       {xname: ' ', uv: 1890, pv: 4800, amt: 2181},
                       {xname: ' ', uv: 2390, pv: 3800, amt: 2500},
                       {xname: ' ', uv: 3490, pv: 4300, amt: 2100},
                     ];

    const data = [
                    {name: 'A', value: 400}, 
                    {name: 'B', value: 200}
                  ];
              
    const pieColors = ['#0088FE', '#00C49F'];

    const RADIAN = Math.PI / 180;

    return (
      <div>

        <h1>Random Experiments</h1>

        <Button bsStyle="info" onClick={() => openModel()}>Modal</Button> &nbsp;
        <Button bsStyle="primary" disabled={this.state.isSaving} onClick={() => getData()}>{this.state.isSaving ? 'Getting...' : 'Get Data'}</Button>

        <div className="pad-20">
          INFO: {app.home.info} : { this.state.isSaving.toString() }
        </div>

        <div>
          Random Graphs
        </div>
        <table className="border">
          <tr>
            <td>
              <div>
                <LineChart width={200} height={200} data={lineData} margin={{ top: 30, right: 20, left: 30, bottom: 0 }}>
                  <XAxis dataKey="xname" />
                  <Tooltip />
                  <CartesianGrid stroke="#444444" />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                  <Line type="monotone" dataKey="pv" stroke="#0088FE" yAxisId={1} />
                </LineChart>
              </div>
            </td>
            <td>
              <div>
                <PieChart width={200} height={200} onMouseEnter={this.onPieEnter}>
                  <Pie data={data} cx={100} cy={100} labelLine={false} label="o" outerRadius={80} fill="#8884d8">
                    {
                      data.map((entry, index) => <Cell fill={pieColors[index % pieColors.length]}/>)
                    }
                  </Pie>
                </PieChart>
              </div>
            </td>
          </tr>
        </table>



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

export default connect(mapStateToProps, mapDispatchToProps)(RandomDataPage);