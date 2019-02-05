import {connect} from 'react-redux'
import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { isArray, isNumber } from 'util';

const mapStateToProps = (state, ownProps) => {
    const values = state.data[ownProps.dataField];
    if(Array.isArray(values)){

        const last = parseInt(values[values.length - 1]);
        console.log(values);
        
        console.log(`last: ${last}`);
        return {value:last}
    
    }else{
        return {value:0}
    }
}


class GuageMonitor extends Component {
    render() {
        return (
            <div>
<ReactSpeedometer value={this.props.value} maxValue={this.props.max} startColor="green" endColor="red"
  segments={10}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(GuageMonitor)