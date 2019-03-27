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
      let cars = this.props.cars;

    if(cars){
      let index = 0;
      const options = cars.map((car)=>{
        return <option value={car} key={index++}>{car}</option>
      });

      return <h6><label>Racing Number: &nbsp; </label><select onChange={this.props.register}>{options}</select></h6>


    }else{
      return <div>Loading...</div>
    }

    }

}

export default  connect(mapStateToProps,mapDispatchToProps)(Registerer);
