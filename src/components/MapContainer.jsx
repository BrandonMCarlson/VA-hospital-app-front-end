import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const mapStyles = {
    height: "30vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 47.65449791,
    lng: -117.42244742,
  };

  const locations = [
    {
      name: "Spokane VA Clinic",
      location: {
        lat: 47.65449791,
        lng: -117.42244742,
      },
    },
    {
      name: "VA Medical Center (VAMC)",
      location: {
        lat: 47.70192635,
        lng: -117.47562284,
      },
    },
    {
      name: "East Front Avenue VA Clinic",
      location: {
        lat: 47.66032451,
        lng: -117.40147021,
      },
    },
    {
      name: "Spokane VA Mobile Clinic",
      location: {
        lat: 47.70192635,
        lng: -117.47562284,
      },
    },
    {
      name: "Coeur d 'Alene VA Clinic",
      location: {
        lat: 47.69263845,
        lng: -116.79626796,
      },
    },
  ];

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}>
          {
            locations.map(item=> {
              return(
                <Marker key={item.name} position={item.location}/>
              )
            })
          }
        </GoogleMap>
      
    </LoadScript>
  );
};

export default MapContainer;
