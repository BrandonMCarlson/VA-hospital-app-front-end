import React, { useState, useEffect } from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import axios from "axios";
import useForm from "../useForm";
import TextField from "@mui/material/TextField";
import { ShareLocation } from "@mui/icons-material";


const Location = ({ user, setUser, profile }) => {

  const updateLocation = async () => {
    await axios
      .put(
        `http://localhost:5000/api/users/${user._id}`,
        {
          firstName: user.firstName,
          lastName: user.lastName,
          location: formValue.location,
          email: user.email,
          password: user.password,
        },
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      )
      .then((res) => {
        updateLocation(res.data)
        document.getElementById("location").disabled = true;
        console.log(user);
      });
  };

  const { formValue, handleChange, handleSubmit, setFormValue } =
    useForm(updateLocation);

    useEffect(() => {

    }, [user._id]);

  return (
    <div className="style-fav-location">
      <span>
        {" "}
        {profile !== user ? null :
        <TextField
        id="location"
        label="location"
        multiline
        InputLabelProps={{ shrink: true }}
        defaultValue={profile.aboutMe}
        onChange={(event) => handleChange(event)}
        name="location"
      />}
      </span>
      <span>
        {profile !== user ? null : <button onClick={(event) => handleSubmit(event)} className="our-button about-me-button">
          <AppRegistrationIcon fontSize="medium"></AppRegistrationIcon>
        </button>}
        
      </span>
    </div>
  );
};

export default Location;