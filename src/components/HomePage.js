import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import countdown                from 'countdown';

import { getReleaseBlockBgCss } from '../constants';

import TimerProgressBar         from './common/TimerProgressBar';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { showModal: false };
  }

  render() {

    const app = this.props.app;

    const startTime     = '07/16/2017 13:30:00';
    const stopTime      = '07/16/2017 14:00:00';
    const releaseStatus = 'Started';
    const bgClass       = getReleaseBlockBgCss(releaseStatus);

    return (
      <div>
        <h1>Home</h1>
        Percent
        <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } height="40" />
        Percent with CountDown
        <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } height="40" canCountDown={ true } />
        Fixed
        <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="600" height="20" />
        Fixed with CountDown
        <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="600" height="20" canCountDown={ true } />
        Bunches
        <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
        <div className="font-0-75">
          01
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          02
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          03
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          04
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          05
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          06
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          07
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          08
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          09
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          10
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          11
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          12
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          13
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          14
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          15
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          16
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          17
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          18
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          19
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          20
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          21
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          22
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          23
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          24
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          25
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          26
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          27
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          28
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          29
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          30
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          31
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          32
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          33
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          34
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          35
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          36
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          37
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          38
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          39
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          40
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          41
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          42
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          43
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          44
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          45
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          46
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          47
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          48
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          49
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
          50
          <TimerProgressBar startTime={startTime} stopTime={stopTime} bgClass={ bgClass } width="100" height="10" />
        </div>
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