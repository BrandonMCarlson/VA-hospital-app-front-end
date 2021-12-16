import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import useForm from "../useForm";
import axios from "axios";



const FindFacility = ({ setUser, setFacility }) => {
  const navigate = useNavigate();

  const getFacility = async () => {
    await axios
      .get(
        "https://api.va.gov/services/va_facilities/v0"
      )
      .then((res) => {
        setAllFacilities(res.data);
        console.log(res.data);
      });
  };

  const { formValue, handleChange, handleSubmit, setFormValue } =
    useForm(loginUser);

  useEffect(() => {
    getFacility();
  }, []);

  return (
    <div className="facility-finder">
      
    </div>
  );
};

export default Login;