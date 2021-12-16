import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import useForm from "../useForm";
import axios from "axios";
import jwtDecode from "jwt-decode";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const FindFacility = ({ setUser, setProfile }) => {
  const navigate = useNavigate();

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

  const { formValue, handleChange, handleSubmit, setFormValue } =
    useForm(loginUser);

  useEffect(() => {
    
  }, []);

  return (
    <div className="whole-login-div">
      <div>
        <div className="login-title">
          <h1>Veteran Affairs Health Helper</h1>
          <br></br>
          <h1>Login</h1>
        </div>
        <div className="login-text-field">
          <form>
            <TextField
              id="outlined-basic"
              name="email"
              label="E-mail"
              onChange={(event) => handleChange(event)}
              variant="outlined"
            />
            <p></p>
            <TextField
              id="outlined-basic"
              type="password"
              name="password"
              label="Password"
              onChange={(event) => handleChange(event)}
              variant="outlined"
            />
            <p></p>
            <div className="register-here-button">
              <Button
                className="login-buttons"
                type="submit"
                onClick={(event) => handleSubmit(event)}
                variant="contained"
              >
                Login Here
              </Button>
            </div>
          </form>
          <div className="register-here-button">
            <Link style={{ textDecoration: "none" }} to="/register">
              {" "}
              <Button className="login-buttons" variant="contained">
                Register Here
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;