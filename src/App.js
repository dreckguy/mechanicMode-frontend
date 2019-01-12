import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { simpleAction } from './actions/simpleAction'


const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
   }

  
 render() {
  return (
   <div className="App">
    <header className="App-header">
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
    <button onClick={this.simpleAction}>Test redux action</button>
    </p>
    <hr/>
    <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
   </div>
   
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
