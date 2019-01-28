import React, { Component } from 'react';
import './RaceMap.css'
export default class RaceMap extends Component{

    render(){
        return (<div>
            <h1>Google Maps</h1>
            <p>long:{this.props.long}</p>
            <p>lat: {this.props.lat}</p>
            </div>)
    };

}