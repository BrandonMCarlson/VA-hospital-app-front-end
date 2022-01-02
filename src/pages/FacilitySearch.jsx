import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import FacilityMapper from "../components/FacilityMapper";
import useForm from "../useForm";
import TextField from "@mui/material/TextField";
import "../pages/FacilitySearch.css";
import MapContainer from "../components/MapContainer";

const FacilitySearch = ({user, favorite, setFavorite, getUser, setUser, profile, setProfile }) => {
  const [facilities, setFacilities] = useState([]);
  
  let idArray = [];
  // destructure useForm
  // declare callback to be sent into useForm
  //  //destructuring the formValue in order to grab individual fields
  //  //removing whitespace (opt)
  const { formValue, handleChange, handleSubmit } = useForm(getFacilities);

  async function getFacilities() {
    const { street_address, city, state, zip } = formValue;
    const API_KEY = process.env.REACT_APP_VA_API_KEY;

    street_address.replace(/\s/g, "%20");
    city.replace(/\s/g, "%20");
    state.replace(/\s/g, "%20");
    zip.replace(/\s/g, "%20");

    await axios
      .get(
        `https://sandbox-api.va.gov/services/va_facilities/v0/nearby?street_address=${street_address}&city=${city}&state=${state}&zip=${zip}&drive_time=60`,
        {
          headers: { apikey: `${API_KEY}`},
        }
      )

      .then((res) => {
        res.data.data.map((el) => {
          idArray.push(el.id);
        });
        idArray = idArray.join("%2C");
        return axios.get(
          `https://sandbox-api.va.gov/services/va_facilities/v0/facilities?ids=${idArray}`,
          {
            headers: { apikey: `${API_KEY}`},
          }
        );
      })
      .then((res) => {
        setFacilities(res.data.data);
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
  }

  return (
    <div className="facility-finder">
      <div>
        <MapContainer />
        <form onSubmit={(event) => handleSubmit(event)}>
          <div>
            <h1 className="heading">Search Below</h1>
          </div>
          <div className="input-div">
            <TextField
              id="outlined-basic"
              name="street_address"
              label="Address"
              onChange={(event) => handleChange(event)}
              variant="outlined"
              required
            />
          </div>
          <div className="input-div">
            <TextField
              id="outlined-basic"
              name="city"
              label="City"
              onChange={(event) => handleChange(event)}
              variant="outlined"
              required
            />
          </div>
          <div className="input-div">
            <TextField
              id="outlined-basic"
              name="state"
              label="State"
              onChange={(event) => handleChange(event)}
              variant="outlined"
              required
            />
          </div>
          <div className="input-div">
            <TextField
              id="outlined-basic"
              name="zip"
              label="zip"
              onChange={(event) => handleChange(event)}
              variant="outlined"
              required
            />
          </div>
          <div className="flex-button">
            <Button  sx={{bgcolor: "black"}} className="Search-Button" type="submit" variant="contained">
              Search
            </Button>{" "}
          </div>
        </form>
        <h1>These are your Facilities within 60 minutes!</h1>
        <FacilityMapper facilities={facilities} user={user} setFavorite={setFavorite} />
      </div>
    </div>
  );
};
export default FacilitySearch;
