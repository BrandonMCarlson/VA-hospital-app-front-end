
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FacilitySearch from "./pages/FacilitySearch"
import Register from "./pages/Register";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import Login from "./pages/Login";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";



function App() {
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [profile, setProfile] = useState({});
  const [facility, setFacility] = useState({});
  const [favorite, setFavorite] = useState({});
  const render = localStorage.getItem("token");
  const navigate = useNavigate();


  const getAllUsers = async () => {
    await axios.get("http://localhost:5000/api/users").then((res) => {
      setAllUsers(res.data);
      console.log(res.data);
    });
  };

  const getUser = async () => {
    await axios.get(`http://localhost:5000/api/users/${user._id}`).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  };


  const logoutUser = async () => {
    console.log(localStorage.getItem("token"));
    localStorage.removeItem("token");
    setUser(null);
    setProfile(null);
    navigate("/");
    console.log(localStorage.getItem("token"));
  };
  


  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <div>
      <div>
    <NavBar setProfile={setProfile} user={user} profile={profile} render={render}/>
      <div>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} setProfile={setProfile}  />}></Route>
          <Route path="register" element={<Register setUser={setUser} user={user} setProfile={setProfile}/>}></Route>
          <Route path="profile" element={<Profile user={user}  render={render} setUser={setUser} setProfile={setProfile} profile={profile} facility={facility} setFacility={setFacility} setUser={setUser} getUser={getUser} />}></Route>
          <Route path="FacilitySearch" element={<FacilitySearch facility={facility} setFacility={setFacility} user={user} favorite={favorite} setFavorite={setFavorite} />}></Route>
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
