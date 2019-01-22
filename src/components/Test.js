import React, { Component } from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    data: state.data
})

class Test extends Component{

    render(){
        return (<div>
            <h1>Test</h1>
            <p>{JSON.stringify(this.props.data)}</p>
        </div>)
    }

}

export default connect(mapStateToProps)(Test)