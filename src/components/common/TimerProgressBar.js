import React     from 'react';
import moment    from 'moment';
import countdown from 'countdown';

import { DateFormats }           from '../../constants';
import { getReleaseBlockBgCss }  from '../../constants';

class TimerProgressBar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
                         momentDate:      moment(), 
                         momentFormat:    props.momentFormat ? props.momentFormat        : 'hh:mm:ss A', 
                         containerHeight: props.height       ? props.height + 'px'       : '10px', 
                         barHeight:       props.height       ? (props.height - 2) + 'px' : '8px', 
                         bgClass:         props.bgClass      ? props.bgClass             : 'white-a-1-bg', 
                         isFixed:         props.width > 0
                     };
    }

    updateComponent() {

        this.setState({ 
                          momentDate: this.state.momentDate.add(1, 'seconds')
                      });
    }

    componentDidMount () {

        this.interval = setInterval(() => {
            this.updateComponent();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getBarStyle () {
        const bgCss            = this.props.bgClass ? this.props.bgClass : 'white-a-1-bg';

        const startTime        = moment(this.props.startTime, DateFormats.DefaultDateTime).toDate();
        const stopTime         = moment(this.props.stopTime, DateFormats.DefaultDateTime).toDate();
        const nowTime          = new Date();
        
        const totalDuration    = countdown(startTime, stopTime, countdown.SECONDS);
        const currentDuration  = countdown(startTime, nowTime,  countdown.SECONDS);
        const totalValue       = Math.abs(totalDuration.value);
        const currentValue     = Math.abs(currentDuration.value);

        const canCountDown     = this.props.canCountDown ? this.props.canCountDown : false;
        const hasStarted       = canCountDown ? true : nowTime > startTime;
        
        const countDownPercent = currentDuration.value ? (currentValue / totalValue) : (currentValue > 0 ? currentValue / totalValue : 0);
        const normalPercent    = currentDuration.value > 0 ? currentValue / totalValue : 0;

        let percent = 0;

        // 'canCountDown' indicates if the progress bar can 'shrink' as the current time approaches the start time...
        // ... otherwise, the progress can only 'grow' once the current time is past the start time.

        if (canCountDown) {
            percent = currentDuration.value ? (currentValue / totalValue) : (currentValue > 0 ? currentValue / totalValue : 0);
        } else {
            percent = currentDuration.value > 0 ? currentValue / totalValue : 0;
        }

        // Don't go over 100%...

        percent = percent > 1 ? 1 : percent;

        // Percent is a decimal, but the percentage used on the css style is a 'whole' number, e.g. '12%' instead of '0.12%'
        const whole        = Math.floor(percent * 100);

        let barWidth       = 0;

        if (this.state.isFixed) {

            // Use Fixed Width
            barWidth = hasStarted ? Math.floor(percent * this.props.width) + 'px' : '0px';
        } else {

            // Use Percentage of DIV Width
            barWidth = hasStarted ? whole + '%' : '0%';
        }

        return { width: barWidth, height: this.state.barHeight };
    }
    render() {
        
        const bgCss            = this.props.bgClass ? this.props.bgClass : 'white-a-1-bg';

        const startTime        = moment(this.props.startTime, DateFormats.DefaultDateTime).toDate();
        const stopTime         = moment(this.props.stopTime, DateFormats.DefaultDateTime).toDate();
        const nowTime          = new Date();
        
        const totalDuration    = countdown(startTime, stopTime, countdown.SECONDS);
        const currentDuration  = countdown(startTime, nowTime,  countdown.SECONDS);
        const totalValue       = Math.abs(totalDuration.value);
        const currentValue     = Math.abs(currentDuration.value);

        const canCountDown     = this.props.canCountDown ? this.props.canCountDown : false;
        const hasStarted       = canCountDown ? true : nowTime > startTime;
        
        const countDownPercent = currentDuration.value ? (currentValue / totalValue) : (currentValue > 0 ? currentValue / totalValue : 0);
        const normalPercent    = currentDuration.value > 0 ? currentValue / totalValue : 0;

        let percent = 0;

        // 'canCountDown' indicates if the progress bar can 'shrink' as the current time approaches the start time...
        // ... otherwise, the progress can only 'grow' once the current time is past the start time.

        if (canCountDown) {
            percent = currentDuration.value ? (currentValue / totalValue) : (currentValue > 0 ? currentValue / totalValue : 0);
        } else {
            percent = currentDuration.value > 0 ? currentValue / totalValue : 0;
        }

        // Don't go over 100%...

        percent = percent > 1 ? 1 : percent;

        // Percent is a decimal, but the percentage used on the css style is a 'whole' number, e.g. '12%' instead of '0.12%'
        const whole        = Math.floor(percent * 100);

        let barWidth       = 0;

        if (this.state.isFixed) {

            // Use Fixed Width
            barWidth = hasStarted ? Math.floor(percent * this.props.width) + 'px' : '0px';
        } else {

            // Use Percentage of DIV Width
            barWidth = hasStarted ? whole + '%' : '0%';
        }

        //const barStyle = { width: barWidth, height: this.state.barHeight };
        const barStyle = this.getBarStyle();

        // Set the container to the pixel width provided by the 'width' prop, otherwise, just set it to '100%'...
        let conainerStyle  = { width: this.state.isFixed ? this.props.width + 'px' : '100%', height: this.state.containerHeight };

        return (
                    <div name="time-progress-bar">

                        <div style={ conainerStyle } className="border-a-50">
                            <div style={ barStyle } className={ 'opacity-30 ' + bgCss }>
                            </div>
                        </div>
                    </div>
               );
    }
}

export default TimerProgressBar;
