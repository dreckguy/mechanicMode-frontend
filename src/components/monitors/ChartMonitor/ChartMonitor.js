import {connect} from 'react-redux'
import React, { Component} from 'react';
import Dygraph from 'dygraphs';
import _ from 'lodash';
import helper from '../../../helpers/ArrayHelper';
import 'dygraphs/dist/dygraph.min.css';

let chart;



const mapStateToProps = (state, ownProps) => {

    let index = 1;
    const values = state.data.map((data)=>{


        //let time = Date.parse(data.Timestamp);
        let time = index ;
        let value = parseFloat(data[ownProps.dataField]);
        index++;
        return[time,value];
    });

    console.log(values);

    return {data:values}
}


class ChartMonitor extends Component {

    constructor(props){
        super(props);

        this.ref = props.dataField + " chart";
    }

    
    


    render() {
        return <div ref={this.ref}></div>;
    }


    componentDidMount() {
        
          chart = new Dygraph(this.refs[this.ref],this.props.data
    ,{
        labels: [ "Time (ms)",this.props.label],
      }); 

    }

    componentDidUpdate(){
        chart.updateOptions( { 'file':this.props.data} );


    }

    shouldComponentUpdate(nextProps, nextState){
        

        return true;
    }
}

export default connect(mapStateToProps)(ChartMonitor)