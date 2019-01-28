import React,{Component} from 'react'
import TimeCalc from '../../helpers/TimeCalc'
export default class LatencyMonitor extends Component{

    render(){
        
        return (<div>
            <h3>Latency: {TimeCalc.getLatency(this.props.carTime)}</h3>

        </div>)
    }

    
}