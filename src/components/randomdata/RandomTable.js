import React                  from 'react';
import ReactTable             from 'react-table';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { ProgressBar }        from 'react-bootstrap';

import toastr                 from 'toastr';

import * as randomDataActions from '../../state/actions/randomDataActions';

import MrcApi     from '../../api/mockMrcApi';

class RandomTable extends React.Component {

    constructor() {

        super();

        this.state = {
                         loading: false
                     };

        this.fetchData = this.fetchData.bind(this);
    }

    // The 'fetchData' method gets called whenever the table model changes, or the user sorts or changes pages.
    // You can set the 'loading' prop of the table to true to use the built-in one or show you're own loading bar if you want.

    fetchData(state, instance) {

        this.setState({ loading: true });

        this.props.actions.randomDataActions.getRandomTableData(state.pageSize, state.page, state.sorted, state.filtered)
            .then((res) => {

              toastr.success('Loaded some random data', 'SUCCESS');
              console.log(res);
              console.log(this.state);
            })
            .catch((error) => { 
              toastr.error('error');
              console.log(error);
            })
            .then(() => {
              this.setState({ loading: false });
            });
        
    }

    render() {

        const loadingState = this.state.loading;
        
        const tableColumns = [
                                { 
                                    Header:          'ID', 
                                    accessor:        'id', 
                                    resizable:       false, 
                                    width:           50, 
                                    className:       'align-right',
                                    headerClassName: 'align-right' 
                                }, 
                                { 
                                    id:              'lastName', 
                                    Header:          'Last Name',  
                                    accessor:        d => d.lastName, 
                                    width:           100, 
                                    headerClassName: 'align-left' 
                                }, 
                                { 
                                    Header:          'First Name', 
                                    accessor:        'firstName', 
                                    width:           100, 
                                    headerClassName: 'align-left' 
                                }, 
                                { 
                                    Header:          'Age', 
                                    accessor:        'age',
                                    width:           50, 
                                    className:       'align-right',
                                    headerClassName: 'align-right' 
                                }, 
                                { 
                                    Header:          'Create Date', 
                                    accessor:        'createDate',
                                    width:           150, 
                                    className:       'align-right',
                                    headerClassName: 'align-right' 
                                }, 
                                { 
                                    Header:          ' ', 
                                }
                             ];

        return (
            <div>
                <div className="table-wrap">
                    <ReactTable className="-striped -highlight"
                                columns={tableColumns}
                                defaultPageSize={10}
                                manual                                               // Forces table not to paginate or sort automatically, so it can be handled server-side
                                data={this.props.randomData.randomTableData.rows}    // Set the rows to be displayed
                                pages={this.props.randomData.randomTableData.pages}  // Display the total number of pages
                                onFetchData={this.fetchData}                         // Request new data when things change
                                loading={loadingState}
                                getTdProps={(state, rowInfo, column, instance) => { return { onClick: e => { console.log('SELECTED: '+ rowInfo.original.id + ' ' + rowInfo.original.firstName + ' ' + rowInfo.original.lastName ) } } }}
                    />
                    <div>
                        <ProgressBar active now={100} active={loadingState} className={loadingState ? '"opacity-90"' : 'invisible'} style={{height: '5px'}} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('MAP STATE TO PROPS IN RANDOM TABLE');
    console.log(state);
    return {
              randomData: state.randomData
           };
}

function mapDispatchToProps(dispatch) {
  return {
            actions: {
                        randomDataActions: bindActionCreators(randomDataActions, dispatch)
                     }
         };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomTable);