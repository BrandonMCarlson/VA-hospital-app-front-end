import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "40vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
    <div className="map">
     <LoadScript
       googleMapsApiKey='AIzaSyDu1P1Roxv4Alger3wViFLE0nU-VO1aIWY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
     </div>
  )
}

export default MapContainer;
