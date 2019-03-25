import {connect} from 'react-redux'
import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';

const BACKGROUND_COLOR = "#5a4c76"
const MARKING_COLOR="#e5e0e0"

const gaugeStyles = {
    height: '15vh',
    width: '15vw'
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
                <Gauge value={this.props.value}  width={200} height={150} label={this.props.label} max={this.props.max}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(GuageMonitor)