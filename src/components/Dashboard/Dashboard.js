import React, { Component} from 'react';
import {connect} from 'react-redux'

import {Container,Col,Row} from 'react-bootstrap'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';


import ControlConsole from '../ControlConsole/ControlConsole'
import RaceMap from '../monitors/RaceMap/RaceMap'
import ChartMonitor from '../monitors/ChartMonitor/ChartMonitor';

const mapStateToProps = (state, ownProps) => ({
    data: state.data
})

class Dashboard extends Component{

    render(){
        return (<Container>
            {/* <Row><Col><ControlConsole/></Col><Col>{<RaceMap lat={this.props.data.gps_lat} long={this.props.data.gps_long}/>}</Col></Row>
            <Row><Col><ChartMonitor/></Col><Col><ChartMonitor/></Col><Col><ChartMonitor/></Col></Row> */}
            <Row><Col><ChartMonitor/></Col>{/* <Col><ChartMonitor/></Col><Col><ChartMonitor/></Col> */}</Row>

            </Container>)
    }

    componentDidMount() {

    }

}

export default connect(mapStateToProps)(Dashboard)