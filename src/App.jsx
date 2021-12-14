import { Map, GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MapContainer from "./components/MapContainer";
import Register from "./pages/register";

function App() {
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [profile, setProfile] = useState({});
  const [searchText, setSearchText] = useState("");
  const [facility, setFacility] = useState({});
  const [allFacilities, setAllFacilities] = useState({});

  const render = localStorage.getItem("token");

  const getAllUsers = async () => {
    await axios.get("http://localhost:5000/api/users").then((res) => {
      setAllUsers(res.data);
      console.log(res.data);
    });
  };

  const logoutUser = async () => {
    console.log(localStorage.getItem("token"));
    localStorage.removeItem("token");
    setUser(null);

    console.log(localStorage.getItem("token"));
  };

  const getFacility = async () => {
    await axios
      .get(
        "https://api.va.gov/services/community-care/v0/eligibility/openapi.json"
      )
      .then((res) => {
        setAllFacilities(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <div>
        <MapContainer />
        <Register/>
      </div>
    </div>
  );
}

export default App;
