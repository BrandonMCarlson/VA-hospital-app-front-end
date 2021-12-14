import React, { useState, useEffect } from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import axios from "axios";
import useForm from "../useForm";
import TextField from "@mui/material/TextField";

const Location = ({ user, setUser, profile, render }) => {

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
        console.log(user);
      });
  };

  const { formValue, handleChange, handleSubmit, setFormValue } =
    useForm(updateLocation);

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

export default AboutMe;