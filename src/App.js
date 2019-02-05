import React,{ Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Dashboard from './components/Dashboard/Dashboard'
import Test from './components/Test/Test';

class App extends Component {

 render() {

  return (
    <Container>
      <Dashboard/>
</Container>);
 }
}
export default App;
