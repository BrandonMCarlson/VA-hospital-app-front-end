import React, { useState, useEffect, render } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./Navbar.css"


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link to={"/"} style={{ textDecoration: 'none', color: 'white'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Veteran Affairs Health App!
          </Typography>
          </Link>
          <Link to={"/FacilitySearch"} style={{ textDecoration: 'none', color: 'white'}}>
          <Button color="inherit">Facility Search</Button>
          </Link>
          <Link to={"/profile"} style={{ textDecoration: 'none', color: 'white'}}>

          <Button color="inherit">Profile</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}