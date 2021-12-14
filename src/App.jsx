
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {

  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [profile, setProfile] = useState({});
  const [searchText, setSearchText] = useState("");

  const render = localStorage.getItem("token");


  const getAllUsers = async () => {
    await axios
      .get("http://localhost:5000/api/users")
      .then((res) => {
        setAllUsers(res.data);
        console.log(res.data);
      })
  }
  
  const logoutUser = async () => {
    console.log(localStorage.getItem("token"));
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
    console.log(localStorage.getItem("token"));
  };

  useEffect(() => {
    getAllUsers();
  }, []);



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
