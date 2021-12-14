import React, { useState, useEffect } from "react";
import Location from "../components/Location";

const Profile = ({
  user,
  setUser,
  profile,
  setProfile,
  render,
  facility,
  setFacility,
  location,
  setLocation
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
          <favFacility
            render={render}
            profile={profile}
            user={user}
            setUser={setUser}
            facility={facility}
            setFacility={setFacility}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
