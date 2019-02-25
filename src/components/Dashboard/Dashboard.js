import React, { Component} from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';
import RaceMap from '../monitors/RaceMap/RaceMap';
import ControlConsole from '../ControlConsole/ControlConsole';
import ChartsPanel from '../ChartsPanel'

class Dashboard extends Component{

    render(){
        return (<Container>
             <Row noGutters={true}><Col><ControlConsole/></Col><Col><RaceMap/></Col></Row>
             <Row><ChartsPanel/></Row>
            </Container>)
    }

    componentDidMount() {

    }

}

export default Dashboard