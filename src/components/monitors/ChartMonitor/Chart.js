import React, { Component} from 'react';
import Dygraph from 'dygraphs';
import 'dygraphs/dist/dygraph.min.css'
import data from './eng_wat_temp_data.json';

export default class Chart extends Component {
    render() {
        return <div ref="chart"></div>;
    }


    componentDidMount() {
        
        const g = new Dygraph(this.refs.chart,"Date,Temperature\n" +
        "2008-05-07,75\n" +
        "2008-05-08,70\n" +
        "2008-05-09,80\n"
    , {});

    }
}