import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../useForm";
import axios from "axios";
import jwtDecode from "jwt-decode";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = ({ setUser, setProfile }) => {
  const navigate = useNavigate();

  const loginUser = async () => {
    await axios
      .post("http://localhost:5000/api/auth", {
        email: formValue.email,
        password: formValue.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data);
        const user = jwtDecode(localStorage.getItem("token"));
        setUser(user);
        setProfile(user);
        navigate("/profile");
        
      })
      .catch((error) => console.log(error));
  };

  const { formValue, handleChange, handleSubmit } = useForm(loginUser);

  useEffect(() => {}, []);

  return (
    <div className="whole-login-div">
      <div>
        <div className="login-title">
          <h1>Your Health Matters!</h1>
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
                sx={{bgcolor: "black"}}
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
              <Button sx={{bgcolor: "black"}} className="login-buttons" variant="contained">
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
