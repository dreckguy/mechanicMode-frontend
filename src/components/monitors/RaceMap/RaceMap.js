import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './RaceMap.css'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
    width: '100vh',
    height: '100%'
  };

  const GRIIIP_HOME={lat: 32.105208,long:34.898308}

  const mapStateToProps = (state, ownProps) => {


    const last = state.last;

    if(!last){
        return {lat:GRIIIP_HOME.lat, long:GRIIIP_HOME.long};
    }

      return {
        lat: parseFloat(last["gps_lat"]),
        long: parseFloat(last["gps_long"])
      }
    }


class MapContainer extends Component {
    render() {

      console.log(this.props)

      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: GRIIIP_HOME.lat,
           lng: GRIIIP_HOME.long
          }}
        />
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY
  })(connect(mapStateToProps)(MapContainer));