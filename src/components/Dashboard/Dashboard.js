import React, { Component} from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';
import RaceMap from '../monitors/RaceMap/RaceMap';
import ControlConsole from '../ControlConsole/ControlConsole';
import ChartsPanel from '../ChartsPanel'

class Dashboard extends Component{

    render(){
        return (
            <Container fluid={true}>
                <Row>
                    <Col xs="6">
                        <ControlConsole/>
                    </Col>
                    <Col xs ="6">
                        <RaceMap/>
                    </Col>
                </Row>
                <Row>
                    <ChartsPanel/>
                </Row>
            </Container>)
    }

    componentDidMount() {

    }

}

export default Dashboard