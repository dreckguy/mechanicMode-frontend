import React, { Component } from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    msg: state.counter
})

class Test extends Component{

    render(){
        return (<div>
            <h1>Test</h1>
            <h2>{this.props.msg}</h2>
        </div>)
    }

}

export default connect(mapStateToProps)(Test)