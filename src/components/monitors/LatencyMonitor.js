import React,{Component} from 'react'
import TimeCalc from '../../helpers/TimeCalc'
export default class LatencyMonitor extends Component{

    render(){
        console.log(this.props.carTime)

        return (<div>
            <p>Car Time: {this.props.carTime}</p>
            <p>Latency: {TimeCalc.getLatency()}</p>

        </div>)
    }

    
}