import {connect} from 'react-redux'
import React, { Component} from 'react';
import Dygraph from 'dygraphs';
import _ from 'lodash';
import helper from '../../../helpers/ArrayHelper';
import 'dygraphs/dist/dygraph.min.css';
import yarinLap from '../../../data/yarin_lap.json';
const fullData = yarinLap.data;

let chart;

const mapStateToProps = (state, ownProps) => {

    
    const dynamicValues = state.data.map((data)=>{

        let time = Date.parse(data.Timestamp);
        let value = parseFloat(data[ownProps.dataField]);
        return[time,value];
    });

    

    


    const staticValues = fullData.map((data)=>{
        let time = Date.parse(data.Timestamp);
        let value = parseFloat(data[ownProps.dataField])
        return [time,value];
    
    });

    return {data:dynamicValues}
}


class ChartMonitor extends Component {

    render() {
        return <div ref="chart"></div>;
    }


    componentDidMount() {
        
          chart = new Dygraph(this.refs.chart,this.props.data
    ,{
        labels: [ "Time (ms)",this.props.label],
      }); 

    }

    componentDidUpdate(){
        chart.updateOptions( { 'file':this.props.data} );


    }

    shouldComponentUpdate(nextProps, nextState){
        

        return true;
    }
}

export default connect(mapStateToProps)(ChartMonitor)