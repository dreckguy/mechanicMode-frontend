import React, { Component } from 'react';
import ChartMonitor from '../monitors/ChartMonitor/ChartMonitor';
export default class Test extends Component{

    render(){

        return (<div>
            <ChartMonitor label = "Oil Pressure" dataField = "eng_oil_pres"/>

     </div>)

    }

}
