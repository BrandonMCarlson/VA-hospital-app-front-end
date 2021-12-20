import React, { useEffect } from "react";
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
  getUser,
  facilities,
  getFacilities,
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
          <div className="appt">Date: {user.appointment.date} <br/>
          Time: {user.appointment.time}  <br/>
          Location: {user.appointment.location}  <br/>
          Phone: {user.appointment.number} </div>
          <AppointmentTracker user={user} setUser={setUser} getUser={getUser}/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
