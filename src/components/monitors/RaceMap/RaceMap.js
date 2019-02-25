import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Map,Marker,GoogleApiWrapper } from 'google-maps-react';
import './RaceMap.css'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const DEFAULT_ZOOM = parseInt(process.env.REACT_APP_DEFAULT_ZOOM);

const GRIIIP_HOME={lat: 32.105208,lng:34.898308}
//const MOTOR_CITY_BEER_SHEVA={lat: 31.273270, lng: 34.731834};
const DEFAULT_LOCATION = GRIIIP_HOME;

const mapStyles = {
    width: '100%',
    height: '100%'
  };

  

  const mapStateToProps = (state, ownProps) => {


    const last = state.last;
    let newLocation;

    if(last){
        newLocation =  {lat: parseFloat(last["gps_lat"]),lng: parseFloat(last["gps_long"])};
      }else{
          newLocation = DEFAULT_LOCATION;
        }
    
        return {location: newLocation}
    }


class MapContainer extends Component {
    render() {

      return (
        <Map
          google={this.props.google}
          zoom={DEFAULT_ZOOM}
          style={mapStyles}
          mapType="SATELLITE"
          mapTypeControl={false}
          initialCenter={DEFAULT_LOCATION}
          center = {this.props.location}
        >
        <Marker
    name={'Your position'}
    position={this.props.location}/>
        </Map>
      );
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        
    }
}

  export default GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY
  })(connect(mapStateToProps)(MapContainer));