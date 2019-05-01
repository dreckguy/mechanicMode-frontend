import {connect} from 'react-redux'
import React, {Component} from 'react';
import Dygraph from 'dygraphs';
import './ChartMonitor.css';

function getCurrentTimeRange(){
    let now = Date.now();
    let twoMinutesAgo = Date.now() - 2 * 60 * 1000;
    return [twoMinutesAgo, now];

    const CHART_DURATION = parseInt(process.env.REACT_APP_CHART_DURATION)
    console.log(`chart duration: ${CHART_DURATION}`);


}


const mapStateToProps = (state, ownProps) => {
    let values = state.data.map((data) => {
        let time = data.time;
        let value = parseFloat(data[ownProps.dataField])
        return [time, value];
    });

    if (!values.length) {
        values = [[new Date(), 0]];
    }

    const last = state.last;
    let lastValue = '0';
    if (last) {
        lastValue = Number.parseFloat(state.last[ownProps.dataField]).toFixed(1);
    }
    return {data: values, value: lastValue};
}

class ChartMonitor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chart: null,
        }
    }

    render() {
        return (
            <div>
                <div className="chart-label">
                    <h6 className="chart-label-left">{this.props.label}</h6>
                    <h6 className="chart-label-right text-right">{this.props.value}</h6>
                </div>
                <div ref="chart" className="chart"></div>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            chart: new Dygraph(this.refs.chart, this.props.data,
                {
                    labels: [ "Time (ms)",this.props.label],
                    drawPoints: true,
                    //dateWindow: getCurrentTimeRange(),
                    valueRange: [0, this.props.max],
                    axisLineColor: '#ffffff',
                    colors: ['#2e9cee'],
                    legend: 'follow',
                })
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.state.chart.updateOptions({
            'file': this.props.data,
            //dateWindow: getCurrentTimeRange(),
        });
    }
}

export default connect(mapStateToProps)(ChartMonitor);