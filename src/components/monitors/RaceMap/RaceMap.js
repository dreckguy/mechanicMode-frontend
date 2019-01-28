import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './RaceMap.css'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const mapStyles = {
    width: '100vh',
    height: '100%'
  };

class MapContainer extends Component {
    render() {
        console.log(GOOGLE_API_KEY)

      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: -1.2884,
           lng: 36.8233
          }}
        />
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY
  })(MapContainer);