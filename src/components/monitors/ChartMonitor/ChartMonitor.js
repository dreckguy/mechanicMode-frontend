import {connect} from 'react-redux'
import React, { Component} from 'react';
import Dygraph from 'dygraphs';
import './ChartMonitor.css';


const mapStateToProps = (state, ownProps) => {

    let values = state.data.map((data)=>{


        let time = data.time;
        let value = parseFloat(data[ownProps.dataField]);
        return[time,value];
    });

if(!values.length){
    values = [[new Date(),0]];
}
    return {data:values, last:values[values.length-1]}
}

 class ChartMonitor extends Component {

    constructor(props){
        super(props);

        this.state = {
            chart: null,
        }
    }


    render() {
        return <div ref="chart" className="chart"></div>;
    }


    componentDidMount() {



            this.setState({chart:new Dygraph(this.refs.chart,this.props.data
                ,{
                    //labels: [ "Time (ms)",this.props.label],
                    //drawPoints: true,
                    //dateWindow: getCurrentTimeRange(),
                    //axes:{x:{valueRange:getCurrentTimeRange()}}        
                    valueRange:[0,this.props.max],
                    axisLineColor: '#ffffff',
                    colors: ['#2e9cee']
                  })});

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        
        this.state.chart.updateOptions({ 
            'file':this.props.data,
            //dateWindow: getCurrentTimeRange(),
            //axes:{x:{valueRange:getCurrentTimeRange()}}        
 
        });
    }
}

export default  connect(mapStateToProps)(ChartMonitor);