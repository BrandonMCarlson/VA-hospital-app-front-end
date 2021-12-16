import { Map, GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FacilitySearch from "./pages/FacilitySearch"
import Register from "./pages/Register";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import Login from "./pages/Login";
import SearchBox from "./components/SearchBox";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";



function App() {
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [profile, setProfile] = useState({});
  const [searchText, setSearchText] = useState("");
  const [facility, setFacility] = useState({});
  const [allFacilities, setAllFacilities] = useState({});
  const [map, setMap] = useState({});

  const render = localStorage.getItem("token");

  const getAllUsers = async () => {
    await axios.get("http://localhost:3000/api/users").then((res) => {
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
        "https://api.va.gov/internal/docs/facilities/v0/openapi.json"
      )
      .then((res) => {
        setAllFacilities(res.data);
        console.log(res.data);
      });
  };


  useEffect(() => {
    getAllUsers();
    getFacility();
  }, []);

  return (
    <div className="App">
      <div>
      <div>
    <NavBar setProfile={setProfile} setSearchText={setSearchText} user={user} profile={profile} render={render}/>
    <SearchBox allUsers={allUsers} setProfile={setProfile} searchText={searchText}/>
      <div>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} setProfile={setProfile}  />}></Route>
          <Route path="register" element={<Register setUser={setUser} user={user} setProfile={setProfile}/>}></Route>
          <Route path="profile" element={<Profile user={user}  render={render} setUser={setUser} setProfile={setProfile} profile={profile} map={map} setMap={setMap} facility={facility} setFacility={setFacility} />}></Route>
          <Route path="FacilitySearch" element={<FacilitySearch map={map} setMap={setMap} allFacilities={allFacilities} setAllFacilities={setAllFacilities} />}></Route>
        </Routes>
        <div className="footer-div">
        {!render ? null : <MeetingRoomIcon onClick={()=>logoutUser()} fontSize="large"/>}
      </div>
      </div>
   
    </div>
      </div>
    </div>
  );
}

export default App;
