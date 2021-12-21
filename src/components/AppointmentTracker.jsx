import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import useForm from "../useForm";
import axios from "axios";

export default function AppointmentTracker({ user, setUser, getUser }) {
  const AddAppointment = async () => {
    axios
      .put(
        `http://localhost:5000/api/users/${user._id}`,
        {
          appointment: {
            date: formValue.date,
            time: formValue.time,
            location: formValue.location,
            number: formValue.number,
          },
        },
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      )
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
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
    useForm(AddAppointment);

  return (
    <div>
       
      <h1>Appointment Input</h1>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Date</InputLabel>
          <Input
            id="input-with-icon-adornment"
            name="date"
            onChange={(event) => handleChange(event)}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          id="input-with-icon-textfield"
          label="Time"
          name="time"
          onChange={(event) => handleChange(event)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          label="Location"
          name="location"
          onChange={(event) => handleChange(event)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          label="Number"
          name="number"
          onChange={(event) => handleChange(event)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Button
      sx={{bgcolor: "black"}}
        className="save-buttons"
        variant="contained"
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        Save
      </Button>
    </div>
  );
}
