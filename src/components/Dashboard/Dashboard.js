import React, { Component} from 'react';
import {connect} from 'react-redux'

import {Container,Col,Row} from 'react-bootstrap'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';
import Gauge from '../monitors/GaugeMonitor/GaugeMonitor'


import ControlConsole from '../ControlConsole/ControlConsole'
import RaceMap from '../monitors/RaceMap/RaceMap'
import ChartMonitor from '../monitors/ChartMonitor/ChartMonitor';

const mapStateToProps = (state, ownProps) => ({
    data: state.data
})

class Dashboard extends Component{

    render(){
        return (<Container>
             <Row><Col><Gauge label="Speed"  value={90} max={300}/></Col><Col><Gauge label="RPM" value = {8604} max={15000}/></Col></Row>
            <Row><Col><ChartMonitor label="Eng. Oil Temprature" dataField = 'eng_oil_temp'/></Col><Col><ChartMonitor label="Eng. Water Temprature" dataField = 'eng_wat_temp'/></Col></Row>
            <Row><Col><ChartMonitor label="Eng. Oil Pressure" dataField = "eng_oil_pres"/></Col><Col><ChartMonitor label="Eng. Hydraulic Pressure" dataField = "hydraulic_pres"/></Col></Row>
            <Row><Col><ChartMonitor label="Differential Temprature" dataField =  "diff_oiltemp"/></Col><Col><ChartMonitor label="Eng. Fuel Pressure" dataField = "fuel_pres"/></Col></Row>

            </Container>)
    }

    componentDidMount() {

    }

}

export default connect(mapStateToProps)(Dashboard)