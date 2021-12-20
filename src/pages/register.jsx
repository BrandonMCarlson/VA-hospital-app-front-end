import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import useForm from "../useForm";
import Buttons from "../components/Button";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import "../pages/Register.css";


const Register = ({ user, setUser, setProfile }) => { 
  const navigate = useNavigate();

  const registerUser = async () => {
    console.log(formValue.password)
    console.log(formValue.confirmPassword)
    if (formValue.password !== formValue.confirmPassword) {
      alert("Passwords do not match!");
      return;
  }

    await axios
      .post("http://localhost:5000/api/users/register", {
        firstName: formValue.firstName,
        lastName:  formValue.lastName,
        email:  formValue.email,
        password:  formValue.password,
})

      .then((res) => {
        localStorage.setItem("token", res.headers["x-auth-token"]);
        const user = jwtDecode(localStorage.getItem("token"));
        setUser(user);
        setProfile(user);
        navigate("/profile");
        console.log("token", res.headers["x-auth-token"]);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };
  
  
  const { formValue, handleChange, handleSubmit, setFormValue } =
    useForm(registerUser);

  return (
    <div className="register-grid">
      <div className="flex">
        <form>
          <div>
            <h1 className="heading">Register Below</h1>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="firstName" label="First Name" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="lastName" label="Last Name" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" name="email" label="E-mail" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
            <TextField id="outlined-basic" type="password" name="password" label="Password" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="input-div">
          <TextField id="outlined-basic"  type="password" name="confirmPassword"  label="Confirm Password" onChange={(event)=>handleChange(event)} variant="outlined" required/>
          </div>
          <div className="flex-button">
            <Button className="login-buttons" type="submit" onClick={(event)=>handleSubmit(event)} variant="contained">Register</Button>
          </div>
          <div className="terms">
                By creating an account you agree to our
                <p>Terms of <a target="_blank" href="https://www.va.gov/privacy-policy/">Service and Privacy Policy</a></p> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;