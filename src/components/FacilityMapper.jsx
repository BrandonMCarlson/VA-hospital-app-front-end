import React from "react";
import "../components/FacilityMapper.css";
import Button from "@mui/material/Button";
import axios from "axios";

const FacilityMapper = ({
  facilities,
  user,
  setUser,
  render,
  facility,
  setFacility,
  favorite,
  setFavorite,
}) => {
  const favFacility = async (facility) => {
    axios
      .post(
        `http://localhost:5000/api/users/${user._id}`,
        {
          favFacility: {
            name: facility.attributes.name,
            address: facility.attributes.address.physical.address_1,
            website: facility.attributes.website,
            phone: facility.attributes.phone.main,
          },
        },
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      )
      .then((res) => {
        setFavorite(res.data);
      })
      .catch((error) => {
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
  console.log(facilities);
  return (
    <div className="results">
      <ul>
        {!facilities
          ? null
          : facilities.map((facility) => {
              return (
                <li className="results-view">
                  <p>Facility Name: {facility.attributes.name} </p>
                  <p>
                    Facility Address:{" "}
                    {facility.attributes.address.physical.address_1}
                  </p>
                  <p>
                    Facility Website:{" "}
                    {facility.attributes.website === null
                      ? "no website"
                      : facility.attributes.website}
                  </p>
                  <p>
                    Facility Number:{" "}
                    {facility.attributes.phone.main === null
                      ? "no main number"
                      : facility.attributes.phone.main}
                  </p>
                  <button onClick={() => favFacility(facility)}> Save </button>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default FacilityMapper;
