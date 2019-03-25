import {connect} from 'react-redux'
import React, { Component } from 'react';

const mapStateToProps = (state, ownProps) => {
    return {cars: state.activeCars}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
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
      const cars = this.props.cars
      console.log(cars);
      const MakeItem = function(X) {
        return <option>{X}</option>;
    };

    if(cars){
      return <select>{cars.map(MakeItem)}</select>;


    }else{
      return <div>No Cars to show</div>
    }

    }


}



export default  connect(mapStateToProps,mapDispatchToProps)(Registerer);
