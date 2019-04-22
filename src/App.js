import React,{ Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Dashboard from './components/Dashboard/Dashboard'
//import Test from './components/Test/Test';
require('dotenv').config();


class App extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Dashboard/>
            </Container>
        );
    }
}

export default App;