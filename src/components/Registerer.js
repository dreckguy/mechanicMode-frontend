import {connect} from 'react-redux'
import React, { Component } from 'react';

const INPUT_MESSAGE='Car Number';





class Registerer extends Component{
    
    render(){

        return (<div>
            <input placeholder={INPUT_MESSAGE} onChange={this.report}/>
            
        </div>)
    }

    report(event){
        console.log(event.target.value);
    }

}



export default  Registerer;
