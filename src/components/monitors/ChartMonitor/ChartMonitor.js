import {connect} from 'react-redux'
import React, { Component} from 'react';
import Dygraph from 'dygraphs';
import './ChartMonitor.css';


const mapStateToProps = (state, ownProps) => {

    let values = state.data.map((data)=>{


        let time = data.time;
        let value = parseFloat(data[ownProps.dataField])
        return[time,value];
    });


if(!values.length){
    values = [[new Date(),0]];
}

const last = state.last;
let lastValue ='0';
if(last){
    lastValue = Number.parseFloat(state.last[ownProps.dataField]).toFixed(1);
}
    return {data:values, value:lastValue};
}

 class ChartMonitor extends Component {

    constructor(props){
        super(props);

        this.state = {
            chart: null,
        }
    }


    render() {
        return (<div>
            <h6>{this.props.label}: {this.props.value}</h6>
                    <div ref="chart" className="chart"></div>
        </div>) 
        
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