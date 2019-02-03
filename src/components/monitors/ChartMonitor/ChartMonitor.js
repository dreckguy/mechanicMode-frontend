import React, { Component} from 'react';
import Dygraph from 'dygraphs';
import 'dygraphs/dist/dygraph.min.css';
import yarinLap from '../../../data/yarin_lap.json';
const fullData = yarinLap.data

 

export default class ChartMonitor
 extends Component {
    render() {
        return <div ref="chart"></div>;
    }


    componentDidMount() {

        const fieldValues = fullData.map((data)=>{
            let time = Date.parse(data.Timestamp);
            let temprature = parseFloat(data[this.props.dataField])
            return [time,temprature];
        
        });


        
        const g = new Dygraph(this.refs.chart,fieldValues
    ,{
        labels: [ "Time(ms)",this.props.label]
      });

    }
}