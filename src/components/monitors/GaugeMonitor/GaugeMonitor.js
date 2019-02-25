import {connect} from 'react-redux'
import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const BACKGROUND_COLOR = "#5a4c76"
const MARKING_COLOR="#e5e0e0"



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
<ReactSpeedometer value={this.props.value} maxValue={this.props.max}
startColor={BACKGROUND_COLOR} endColor={BACKGROUND_COLOR} textColor={BACKGROUND_COLOR} needleColor={MARKING_COLOR} segments={10} fluidWidth />
            </div>
        );
    }
}

export default connect(mapStateToProps)(GuageMonitor)