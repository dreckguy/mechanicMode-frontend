import {connect} from 'react-redux'
import React, { Component } from 'react';
import _ from 'lodash';
import ReactSpeedometer from "react-d3-speedometer";


const mapStateToProps = (state, ownProps) => {

    const last = state.last;
    if(!last){
        return {value:0};
    }
    const val = parseInt(state.last[ownProps.dataField]);
    
    return {value:val}
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