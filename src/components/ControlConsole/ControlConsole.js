import React, { Component } from 'react';
import './ControlConsole.css'
import {Container,Col,Row} from 'react-bootstrap';
import Gauge from '../monitors/GaugeMonitor/GaugeMonitor';
import Registerer from '../Registerer';

export default class ControlConsole extends Component{
    render(){
        return (
            <Container>
                <Row>
                    <Registerer/>
                </Row>
                <Row>
                    <Col xs={3}>

                    </Col>
                    <Col className="gauges" xs={9}>
                        <Gauge label="Speed" max={250} dataField = "gps_speed"/>
                        <Gauge label="RPM" max={15000} dataField={'rpm'}/>
                    </Col>

                </Row>
            </Container>)
    }
}