import { Map, GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MapContainer from "./components/MapContainer";

function App() {
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [profile, setProfile] = useState({});
  const [searchText, setSearchText] = useState("");

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

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <div>
        <MapContainer />
        <div id="search_bar">
          <div id="suggestions_anchor">
            <input type="text" id="search_input" placeholder="Search for..." />
          </div>
        </div>
        <div id="facet_results"></div>
        <div id="search_results"></div>
      </div>
    </div>
  );
}

export default App;
