import {connect} from 'react-redux'
import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';

const MARKING_COLOR = "#2e9cee"
const TEXT_COLOR="#e5e0e0"

const valueStyle = {
    fontSize: '1.8vw',
    fill: TEXT_COLOR,
    fontWeight: 600
}

const labelStyle={fill: TEXT_COLOR,
                  fontSize: '1vw',
                  fontWeight: 500

}



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
                <Gauge value={this.props.value}  width={200} height={150} label={this.props.label} max={this.props.max}
                color={MARKING_COLOR} valueLabelStyle={valueStyle} topLabelStyle = {valueStyle} minMaxLabelStyle = {labelStyle}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(GuageMonitor)