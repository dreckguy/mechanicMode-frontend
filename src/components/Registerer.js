import {connect} from 'react-redux'
import React, { Component } from 'react';
const INPUT_MESSAGE='Car Number';

const mapStateToProps = (state, ownProps) => {
    return {msg: state.msg}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      // dispatching plain actions
      register: (event) => {
          let value = event.target.value;
          if(value){
            dispatch({ type: 'SERVER/REGISTER', carNumber:value})

          }


    }
  }
  }





class Registerer extends Component{

    render(){

        return (<div>
            <p><input placeholder={INPUT_MESSAGE} onChange={this.props.register}/></p>
            <p>data from server:</p>
            <p>{this.props.msg}</p>
            
        </div>)
    }


}



export default  connect(mapStateToProps,mapDispatchToProps)(Registerer);
