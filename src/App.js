import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Test from './components/Test/Test'


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
   }

  
 render() {
  return (
    <Container>
      <Row><Col><Test/></Col></Row>
</Container>);
 }
}
export default connect()(App);
