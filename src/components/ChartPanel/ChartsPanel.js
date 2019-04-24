import React from 'react';
import ChartMonitor from '../monitors/ChartMonitor/ChartMonitor';
import {Container, Col, Row} from 'react-bootstrap';
import './ChartPanel.css'


const ChartsPanel = (props) => (
    <Container fluid={true}>
        <Row className="pt-30 pb-10">
            <Col xs="12" md="6">
                <ChartMonitor label="Eng. Oil Temprature" dataField='eng_oil_temp' max={150}/>
            </Col>
            <Col xs="12" md="6">
                <ChartMonitor label="Eng. Water Temprature" dataField='eng_wat_temp' max={116}/>
            </Col>
        </Row>
        <Row className="pt-10 pb-10">
            <Col xs="12" md="6">
                <ChartMonitor label="Eng. Oil Pressure" dataField="eng_oil_pres" max={15}/>
            </Col>
            <Col xs="12" md="6">
                <ChartMonitor label="Eng. Hydraulic Pressure" dataField="hydraulic_pres" max={22}/>
            </Col>
        </Row>
        <Row className="pt-10 pb-10">
            <Col xs="12" md="6">
                <ChartMonitor label="Differential Temprature" dataField="diff_oiltemp" max={150}/>
            </Col >
            <Col xs="12" md="6">
                <ChartMonitor label="Eng. Fuel Pressure" dataField="fuel_pres"/>
            </Col>
        </Row>
    </Container>
);

export default ChartsPanel;

