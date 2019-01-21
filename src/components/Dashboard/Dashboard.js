import React, { Component} from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';

import ControlConsole from '../ControlConsole/ControlConsole'
import RaceMap from '../monitors/RaceMap/RaceMap'
import ChartMonitor from '../monitors/ChartMonitor/ChartMonitor';

export default class Dashboard extends Component{

    render(){
        return (<Container>
            <Row>
            <Col><ControlConsole/></Col>
            <Col><RaceMap/></Col>
            </Row>

            <Row>
            <Col><ChartMonitor/></Col>
            <Col><ChartMonitor/></Col>
            <Col><ChartMonitor/></Col>
            </Row> 
            
            <Row>
            <Col><ChartMonitor/></Col>
            <Col><ChartMonitor/></Col>
            <Col><ChartMonitor/></Col>
            </Row>
            </Container>
            )
    }

}