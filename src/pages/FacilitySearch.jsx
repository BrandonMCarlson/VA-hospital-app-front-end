import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams } from "react-router-dom";
import axios from "axios";
import MapContainer from "../components/MapContainer"



const FindFacility = ({ setUser, setFacility }) => {
  

  const getFacility = async () => {
    await axios
      .get(
        "https://api.va.gov/internal/docs/facilities/v0/openapi.json"
      )
      .then((res) => {
        FindFacility(res.data);
        console.log(res.data);
      });
  };



  return (
    <div className="facility-finder">
      <div>
      <MapContainer/>  
      </div>
    </div>
  );
};

export default FindFacility;