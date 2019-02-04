import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"


export default class GuageMonitor extends Component {
    render() {
        return (
            <div>
<ReactSpeedometer value={this.props.value} maxValue={this.props.max} startColor="green" endColor="red"
  segments={10}/>
            </div>
        );
    }
}