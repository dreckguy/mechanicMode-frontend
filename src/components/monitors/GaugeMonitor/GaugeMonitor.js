import {connect} from 'react-redux'
import React, { Component } from 'react';
import _ from 'lodash';
import ReactSpeedometer from "react-d3-speedometer";


const mapStateToProps = (state, ownProps) => {
    const values = state.data;
    const last = _.cloneDeep(values[values.length-1]);
    const val = parseInt(last[ownProps.dataField]);
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