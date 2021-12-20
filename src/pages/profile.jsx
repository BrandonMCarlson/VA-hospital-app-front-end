import React, { useState, useEffect } from "react";
import AppointmentTracker from "../components/AppointmentTracker";

import "./Profile.css"

const Profile = ({
  user,
  setUser,
  profile,
  setProfile,
  render,
  facility,
  setFacility,
}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {}, [profile._id]);

  return (
    <div>
      <div className="profile-page-grid">
        <div className="post-text">
          <h1>{profile.firstName}</h1>
          <AppointmentTracker/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
