import React from 'react';
import ChartMonitor from '../components/monitors/ChartMonitor/ChartMonitor';
import {Container,Col,Row} from 'react-bootstrap';

const ChartsPanel = (props) => (<Container fluid={true}>
    <Row><Col><ChartMonitor label="Eng. Oil Temprature" dataField = 'eng_oil_temp' max={150}/></Col><Col><ChartMonitor label="Eng. Water Temprature" dataField = 'eng_wat_temp' max={116}/></Col></Row>
        <Row><Col><ChartMonitor label="Eng. Oil Pressure" dataField = "eng_oil_pres" max={15}/></Col><Col><ChartMonitor label="Eng. Hydraulic Pressure" dataField = "hydraulic_pres" max={22}/></Col></Row>
        <Row><Col><ChartMonitor label="Differential Temprature" dataField =  "diff_oiltemp" max={150} /></Col><Col><ChartMonitor label="Eng. Fuel Pressure" dataField = "fuel_pres"/></Col></Row>
        </Container>)

export default ChartsPanel;

