import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams } from "react-router-dom";
import axios from "axios";
import MapContainer from "../components/MapContainer"
import Button from '@mui/material/Button';
import useForm from "../useForm";
import TextField from "@mui/material/TextField";



const FindFacility = ({ facility, setfacility }) => {
  const address = '949 E 34th Ave'
  address.replace(/\s/g, '%20')
  

  const getFacility = async () => {
    await axios
      .get(
        `https://sandbox-api.va.gov/services/va_facilities/v0/nearby?/${street_address}/${city}/${state}/${zip}`, {
          headers:{apiKey: 'eKyzvJo6cvxSR6S4PrI30CPXRCyQ7nDY' }})
      .then((res) => {
        getFacility(res.data.drive_time);
        console.log(res.data.nearby);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  const { formValue, handleChange, handleSubmit, setFormValue } =
  useForm(getFacility);

  return (
    <div className="facility-finder">
      <div>
      <MapContainer/>  
      <div>
            <h1 className="heading">Enter your information below</h1>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="street_address" label="Street Address" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="city" label="City" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="state" label="State" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="zip" label="Zip-Code" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="flex-button">
            <Button facility={facility} setfacility={setfacility} className="Search-Button" type="submit" onClick={(event)=>handleSubmit(event)} variant="contained">Search</Button>
          </div>
      </div>
    </div>
  );
};

export default FindFacility;