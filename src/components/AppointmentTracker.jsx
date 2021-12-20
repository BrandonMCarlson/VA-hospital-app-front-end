import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
import useForm from "../useForm";
import axios from "axios";


export default function AppointmentTracker({setProfile, user, user_id}) {

  const AddAppointment = async () => {
    axios
    .put(`http://localhost:5000/api/users/${user_id}`, {
      appointment: formValue.appointment
  },
  { headers: { 'x-auth-token': localStorage.getItem('token') } })
  .then((res)=> {
      document.getElementById('put').value = ''
      setProfile(user)
    })
     .catch((error)=> {
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
      <h1>Appointment Tracker</h1>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Date
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          name="appointment"
          onChange={(event)=>handleChange(event)}
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
        name="appointment"
        onChange={(event)=>handleChange(event)}
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
        name="appointment"
        onChange={(event)=>handleChange(event)}
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
        name="appointment"
        onChange={(event)=>handleChange(event)}
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
    <Button className="save-buttons" variant="contained" type="submit"
    onClick={(event)=>handleSubmit(event)}>
                Save
              </Button>
    </div>
  );
}
