import {connect} from 'react-redux'
import React, { Component} from 'react';
import Dygraph from 'dygraphs';
import 'dygraphs/dist/dygraph.min.css';
import yarinLap from '../../../data/yarin_lap.json';
const fullData = yarinLap.data;


const mapStateToProps = (state, ownProps) => {

    const staticValues = fullData.map((data)=>{
        let time = Date.parse(data.Timestamp);
        let temprature = parseFloat(data[ownProps.dataField])
        return [time,temprature];
    
    });


    const values = state.data[ownProps.dataField];
    if(Array.isArray(values)){

        const last = parseInt(values[values.length - 1]);        
        return {data:staticValues}
    }else{
        return {data:staticValues}
    }
}



class ChartMonitor extends Component {
    render() {
        return <div ref="chart"></div>;
    }


    componentDidMount() {
        console.log(this.props)
        
         const g = new Dygraph(this.refs.chart,this.props.data
    ,{
        labels: [ "Time(ms)",this.props.label],
      }); 

    }
}

export default connect(mapStateToProps)(ChartMonitor)