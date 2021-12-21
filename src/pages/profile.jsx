import React, { useState, useEffect } from "react";
import AppointmentTracker from "../components/AppointmentTracker";
import "./Profile.css";


const Profile = ({
  user,
  setUser,
  profile,
  setProfile,
  render,
  facility,
  setFacility,
  getUser,
  facilities,
  getFacilities,
  favFacility,
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
          <h1>{profile.firstName}'s</h1>
          <h2>Appointment Tracker</h2>
          <div className="appt">
            𝐃𝐚𝐭𝐞: {user.appointment.date} <br />
            𝐓𝐢𝐦𝐞: {user.appointment.time} <br />
            𝐋𝐨𝐜𝐚𝐭𝐢𝐨𝐧: {user.appointment.location} <br />
            𝐏𝐡𝐨𝐧𝐞: {user.appointment.number}{" "}
          </div>
          <AppointmentTracker user={user} setUser={setUser} getUser={getUser} />
          <div className="pref">
            Preferred Facility:
            <br /> <p>𝐍𝐚𝐦𝐞: {user.favFacility.name}</p>
            <br /> <p>𝐀𝐝𝐝𝐫𝐞𝐬𝐬:{user.favFacility.address}</p>
            <br /> <p> 𝐖𝐞𝐛𝐬𝐢𝐭𝐞:{user.favFacility.website}</p>
            <br /> <p>𝐏𝐡𝐨𝐧𝐞:{user.favFacility.number}</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
